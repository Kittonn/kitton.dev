import type { Translations } from "./types";

export const DEFAULT_LOCALE = "en";
export type Locale = "en";

const langModules = import.meta.glob<{ default: Translations }>(
  "./languages/*.ts",
  { eager: true }
);

const translations: Record<string, Translations> = {};

for (const [path, module] of Object.entries(langModules)) {
  const locale = path.match(/languages\/(.*)\.ts/)?.[1];

  if (locale) {
    translations[locale] = module.default;
  }
}

export const useTranslations = (
  locale: Locale = DEFAULT_LOCALE
): Translations => {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
};
