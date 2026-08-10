export const locales = ["aa", "am", "en"] as const;
export const defaultLocale = "aa" as const;

export type Locale = (typeof locales)[number];
