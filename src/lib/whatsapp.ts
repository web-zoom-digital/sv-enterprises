import { SITE_CONFIG } from "@/lib/constants";

/**
 * Standard business WhatsApp number for S V ENTERPRISES in international format (digits only).
 * Cleaned from SITE_CONFIG.phoneRaw (+919940451673 => 919940451673)
 */
export const WHATSAPP_NUMBER = "919940451673";

/**
 * Predefined floating icon & general WhatsApp welcome message.
 */
export const DEFAULT_WELCOME_MESSAGE =
  "Hello! Welcome to S V Enterprises 👋\n\n" +
  "Thank you for your interest in our professional audio equipment.\n\n" +
  "How can we help you today? Please let us know your product requirements or enquiry, and our team will assist you.";

/**
 * Creates a clean wa.me WhatsApp URL with encoded message payload.
 *
 * @param phoneNumber International format phone number digits (e.g. "919940451673")
 * @param message Unencoded text message to pre-fill in WhatsApp
 */
export function createWhatsAppUrl(
  phoneNumber: string = WHATSAPP_NUMBER,
  message: string = DEFAULT_WELCOME_MESSAGE
): string {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Form values interface for WhatsApp message generation.
 */
export interface WhatsAppFormPayload {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  productName?: string;
  category?: string;
  enquiryType?: string;
  quantity?: string;
  subject?: string;
  message?: string;
  pageUrl?: string;
  [key: string]: string | undefined;
}

/**
 * Generates a structured, professional WhatsApp message from form values.
 * Only includes non-empty, defined fields.
 */
export function buildFormWhatsAppMessage(payload: WhatsAppFormPayload): string {
  const lines: string[] = [
    "Hello S V Enterprises,",
    "",
    "I would like to enquire about your products/services.",
  ];

  // Customer Details section
  const customerDetails: string[] = [];
  if (payload.name && payload.name.trim()) {
    customerDetails.push(`Name: ${payload.name.trim()}`);
  }
  if (payload.phone && payload.phone.trim()) {
    customerDetails.push(`Phone: ${payload.phone.trim()}`);
  }
  if (payload.email && payload.email.trim()) {
    customerDetails.push(`Email: ${payload.email.trim()}`);
  }
  if (payload.company && payload.company.trim()) {
    customerDetails.push(`Company: ${payload.company.trim()}`);
  }

  if (customerDetails.length > 0) {
    lines.push("");
    lines.push("*Customer Details*");
    lines.push(...customerDetails);
  }

  // Enquiry Details section
  const enquiryDetails: string[] = [];
  const prodOrCat = payload.productName || payload.category;
  if (prodOrCat && prodOrCat.trim()) {
    enquiryDetails.push(`Product/Category: ${prodOrCat.trim()}`);
  }
  if (payload.enquiryType && payload.enquiryType.trim()) {
    enquiryDetails.push(`Enquiry Type: ${payload.enquiryType.trim()}`);
  }
  if (payload.quantity && payload.quantity.trim()) {
    enquiryDetails.push(`Quantity: ${payload.quantity.trim()}`);
  }
  if (payload.subject && payload.subject.trim()) {
    enquiryDetails.push(`Subject: ${payload.subject.trim()}`);
  }
  if (payload.message && payload.message.trim()) {
    enquiryDetails.push(`Requirements: ${payload.message.trim()}`);
  }

  if (enquiryDetails.length > 0) {
    lines.push("");
    lines.push("*Enquiry Details*");
    lines.push(...enquiryDetails);
  }

  // Source Page
  if (payload.pageUrl && payload.pageUrl.trim()) {
    lines.push("");
    lines.push(`Source Page: ${payload.pageUrl.trim()}`);
  }

  lines.push("");
  lines.push("Please contact me with further information and pricing.");
  lines.push("");
  lines.push("Thank you.");

  return lines.join("\n");
}

/**
 * Safely opens a WhatsApp URL in a new window/tab for user submission.
 */
export function openWhatsAppUrl(url: string): void {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
