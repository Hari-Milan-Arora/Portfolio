const DEFAULT_SITE_URL = "https://harimilanarora.com";
const DEFAULT_CONTACT_EMAIL = "harimilanarora@gmail.com";
const GITHUB_URL = "https://github.com/Hari-Milan-Arora";
const LINKEDIN_URL = "https://www.linkedin.com/in/hari-milan-arora/";
const PORTFOLIO_URL = "https://hellohari.vercel.app";

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

export const githubUrl = GITHUB_URL;
export const linkedinUrl = LINKEDIN_URL;
export const portfolioUrl = PORTFOLIO_URL;

export const resumePaths = {
  softwareEngineering: "/resumes/Hari-Milan-Arora-Software-Engineer-Resume.pdf",
  aiEngineering: "/resumes/Hari-Milan-Arora-AI-ML-Engineer-Resume.pdf",
  forwardDeployed: "/resumes/Hari-Milan-Arora-Forward-Deployed-Engineer-Resume.pdf",
} as const;
