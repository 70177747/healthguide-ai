export type ToolMode =
  | "assistant"
  | "health-information"
  | "warning-signs"
  | "doctor-preparation"
  | "medical-terms"
  | "report-explainer";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  isUrgentWarning?: boolean;
}

export const MEDICAL_DISCLAIMER =
  "HealthGuide AI provides general educational health information only. It is not a doctor, does not diagnose medical conditions, and does not prescribe medications or dosages. If you think you may be experiencing a medical emergency, call your local emergency number or seek urgent medical care immediately.";

export const BASE_HEALTH_EDUCATOR_PROMPT = `You are HealthGuide AI, an educational healthcare information assistant.
You are NOT a doctor, diagnostic tool, or emergency service.
- Never claim to diagnose diseases or conditions.
- Never prescribe medications or dosages.
- Explain health concepts in clear, compassionate, plain language.
- Highlight potential warning signs that warrant prompt medical attention.
- Encourage consulting qualified healthcare professionals.
- Never guarantee that the absence of warning signs means a user is safe.`;

/**
 * Server-side AI provider configuration check.
 */
export function getAiProviderConfig(): {
  provider: "gemini";
  isConfigured: boolean;
} {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  const isPlaceholder =
    !apiKey ||
    apiKey === "your_actual_gemini_api_key" ||
    apiKey === "your_api_key_here";

  return {
    provider: "gemini",
    isConfigured: !isPlaceholder,
  };
}
