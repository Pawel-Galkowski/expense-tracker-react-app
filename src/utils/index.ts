export type CurrencyType = "PLN" | "EUR" | "USD" | "GBP";
export const currencies: Record<CurrencyType, string> = {
  PLN: "zł",
  EUR: "€",
  USD: "$",
  GBP: "£",
};

export type LanguageType = "PL" | "EN" | "DE";
export const languages: Record<string, LanguageType> = {
  pl: "PL",
  en: "EN",
  de: "DE",
};

export type ThemeType = "orange" | "light" | "dark";
export const themes: Record<ThemeType, string> = {
  orange: "orangeTheme",
  light: "lightTheme",
  dark: "darkTheme",
};
