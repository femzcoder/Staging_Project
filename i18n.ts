// i18n.ts

export const locales = ["en", "fr", "de"] as const;

export const i18n = {
  locales, // used by next.config.ts
  defaultLocale: "en",
};

export const routing = {
  locales, // used for runtime validation
};

export type Locale = typeof locales[number]; // "en" | "fr" | "de"
