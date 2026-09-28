"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { SITE_CONFIG } from "@/lib/constants";
import {
  WHATSAPP_NUMBER,
  createWhatsAppUrl,
  buildFormWhatsAppMessage,
  openWhatsAppUrl,
} from "@/lib/whatsapp";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Speakers & PA Systems",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation check
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    setLoading(true);

    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const message = buildFormWhatsAppMessage({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      category: formData.requirement,
      message: formData.message,
      pageUrl,
    });

    const whatsappUrl = createWhatsAppUrl(WHATSAPP_NUMBER, message);
    setGeneratedUrl(whatsappUrl);

    // Open WhatsApp with pre-filled details
    openWhatsAppUrl(whatsappUrl);

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-xs">
      <h2 className="text-2xl font-extrabold text-[#171A1D] tracking-tight mb-2">
        Send an Audio Enquiry
      </h2>
      <p className="text-sm text-[#6B7280] mb-6">
        Fill in your requirement below or reach us directly at{" "}
        <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-[#1683C7] font-semibold">
          {SITE_CONFIG.phone}
        </a>
      </p>

      {submitted ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-bold text-emerald-900">
            WhatsApp Pre-filled!
          </h3>
          <p className="text-sm text-emerald-800">
            Thank you, {formData.name}. WhatsApp has opened with your audio enquiry details pre-filled.
          </p>
          <p className="text-xs text-emerald-700 bg-emerald-100/80 p-3 rounded-lg border border-emerald-200 font-medium">
            <strong>Next Step:</strong> Please review and press <strong>Send</strong> in WhatsApp to complete submitting your enquiry.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openWhatsAppUrl(generatedUrl)}
              className="w-full sm:w-auto px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>Re-open WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  requirement: "Speakers & PA Systems",
                  message: "",
                });
              }}
              className="w-full sm:w-auto px-4 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-lg hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#171A1D] uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajesh Kumar"
              className="w-full px-4 py-3 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl text-sm text-[#171A1D] focus:outline-none focus:ring-2 focus:ring-[#1683C7] focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#171A1D] uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 98765 43210"
                className="w-full px-4 py-3 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl text-sm text-[#171A1D] focus:outline-none focus:ring-2 focus:ring-[#1683C7] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#171A1D] uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. name@company.com"
                className="w-full px-4 py-3 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl text-sm text-[#171A1D] focus:outline-none focus:ring-2 focus:ring-[#1683C7] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171A1D] uppercase tracking-wider mb-1">
              Audio Requirement Category *
            </label>
            <select
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl text-sm text-[#171A1D] focus:outline-none focus:ring-2 focus:ring-[#1683C7] focus:bg-white transition-all"
            >
              <option value="Speakers & PA Systems">Speakers & PA Systems</option>
              <option value="Commercial Power Amplifiers">Commercial Power Amplifiers</option>
              <option value="Microphones & Wireless Audio">Microphones & Wireless Audio</option>
              <option value="Audio Mixing Consoles">Audio Mixing Consoles</option>
              <option value="Reflex Horn & Column Speakers">Reflex Horn & Column Speakers</option>
              <option value="Flush Ceiling Speakers">Flush Ceiling Speakers</option>
              <option value="Other Sound Accessories">Other Sound Accessories</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171A1D] uppercase tracking-wider mb-1">
              Requirement Message / Specifics
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your venue, hall size, or required equipment quantity..."
              className="w-full px-4 py-3 bg-[#F5F6F7] border border-[#E5E7EB] rounded-xl text-sm text-[#171A1D] focus:outline-none focus:ring-2 focus:ring-[#1683C7] focus:bg-white transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#1683C7] hover:bg-[#126fa9] text-white font-bold py-3.5 px-6 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? (
              <span>Preparing WhatsApp...</span>
            ) : (
              <>
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>Submit Enquiry via WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
