export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

export const routes = {
  home: { en: '', es: 'es/' },
  privacy: { en: 'privacy/', es: 'es/privacidad/' },
  codeSigning: { en: 'code-signing/', es: 'es/firma-de-codigo/' },
} as const;
export type Route = keyof typeof routes;

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function href(route: Route, lang: Lang, hash = ''): string {
  return base + routes[route][lang] + hash;
}

export function asset(path: string): string {
  return base + path.replace(/^\//, '');
}

export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const ui = {
  en: {
    nav: { download: 'Download', platforms: 'Mac & Windows', source: 'Source' },
    switchTo: 'Español',
    switchLabel: 'Leer en español',
    footer: {
      madeBy: 'A Quackbyte app.',
      license: 'Open source, MIT license',
      privacy: 'Privacy policy',
      codeSigning: 'Code signing policy',
    },
    skip: 'Skip to content',
  },
  es: {
    nav: { download: 'Descargar', platforms: 'Mac y Windows', source: 'Código' },
    switchTo: 'English',
    switchLabel: 'Read in English',
    footer: {
      madeBy: 'Una app de Quackbyte.',
      license: 'Código abierto, licencia MIT',
      privacy: 'Política de privacidad',
      codeSigning: 'Política de firma de código',
    },
    skip: 'Saltar al contenido',
  },
} as const;
