import { owner, repos, github } from './config';
import { en, type Messages } from './i18n/en';
import { es } from './i18n/es';
import { fr } from './i18n/fr';
import { de } from './i18n/de';
import { ja } from './i18n/ja';
import { zh } from './i18n/zh';
import { ko } from './i18n/ko';
import { pt } from './i18n/pt';

/** Every language of the site. English first: it is the default and the x-default alternate. */
export const langs = ['en', 'es', 'fr', 'de', 'ja', 'zh', 'ko', 'pt'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'en';

export const messages: Record<Lang, Messages> = { en, es, fr, de, ja, zh, ko, pt };

interface LangInfo {
  /** Name of the language in itself, for the language picker. */
  name: string;
  /** Value of <html lang> and of hreflang. */
  htmlLang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Locale for formatting dates. */
  dateLocale: string;
}

export const languages: Record<Lang, LangInfo> = {
  en: { name: 'English', htmlLang: 'en', ogLocale: 'en_GB', dateLocale: 'en-GB' },
  es: { name: 'Español', htmlLang: 'es', ogLocale: 'es_ES', dateLocale: 'es-ES' },
  fr: { name: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR', dateLocale: 'fr-FR' },
  de: { name: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE', dateLocale: 'de-DE' },
  ja: { name: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP', dateLocale: 'ja-JP' },
  zh: { name: '简体中文', htmlLang: 'zh-Hans', ogLocale: 'zh_CN', dateLocale: 'zh-CN' },
  ko: { name: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR', dateLocale: 'ko-KR' },
  pt: { name: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR', dateLocale: 'pt-BR' },
};

export const routes = {
  home: {
    en: '', es: 'es/', fr: 'fr/', de: 'de/', ja: 'ja/', zh: 'zh/', ko: 'ko/', pt: 'pt/',
  },
  privacy: {
    en: 'privacy/',
    es: 'es/privacidad/',
    fr: 'fr/confidentialite/',
    de: 'de/datenschutz/',
    ja: 'ja/privacy/',
    zh: 'zh/privacy/',
    ko: 'ko/privacy/',
    pt: 'pt/privacidade/',
  },
} as const satisfies Record<string, Record<Lang, string>>;
export type Route = keyof typeof routes;

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function href(route: Route, lang: Lang, hash = ''): string {
  return base + routes[route][lang] + hash;
}

export function asset(path: string): string {
  return base + path.replace(/^\//, '');
}

export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString(languages[lang].dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Values that message strings refer to as {name}. Links and symbols live here, not in the
 * messages, so translators can't break them. Documented at the top of src/i18n/en.ts.
 */
export function tokens(lang: Lang): Record<string, string> {
  return {
    mac: github(repos.mac),
    windows: github(repos.windows),
    macReleases: github(repos.mac, '/releases'),
    windowsReleases: github(repos.windows, '/releases'),
    macIssues: github(repos.mac, '/issues'),
    windowsIssues: github(repos.windows, '/issues'),
    privacy: href('privacy', lang),
    maintainer: owner.maintainer,
    maintainerUrl: owner.maintainerUrl,
    brand: owner.brand,
    githubPrivacy: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
    aepd: 'https://www.aepd.es/',
    macMod: '⌃⌥',
    macOverview: '⌃⌥O',
    winKey: 'Win',
    winOverview: 'Win+Tab',
    appData: '%APPDATA%\\Glide',
    localAppData: '%LOCALAPPDATA%\\Glide',
  };
}

/**
 * Returns a function that fills {tokens} in a message string. For `Html` strings, render the
 * result with set:html; for the rest, use it as normal text.
 */
export function filler(lang: Lang, extra: Record<string, string> = {}) {
  const values = { ...tokens(lang), ...extra };
  return (text: string) =>
    text.replace(/\{(\w+)\}/g, (match, name: string) => {
      if (!(name in values)) throw new Error(`Unknown token ${match} in message: ${text}`);
      return values[name];
    });
}
