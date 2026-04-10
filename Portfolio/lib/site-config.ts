const DEFAULT_SITE_URL = "https://harimilanarora.com";
const DEFAULT_CONTACT_EMAIL = "hello@harimilanarora.com";
const DEFAULT_AEAAS_URL = "https://example.com";

function normalizeUrl(value: string | undefined, fallback: string) {
  if (!value) {
    return fallback;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return fallback;
  }

  return trimmed.startsWith("http://") || trimmed.startsWith("https://")
    ? trimmed
    : `https://${trimmed}`;
}

export const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
  DEFAULT_SITE_URL,
);

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

export const aeaasUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_AEAAS_URL,
  DEFAULT_AEAAS_URL,
);
