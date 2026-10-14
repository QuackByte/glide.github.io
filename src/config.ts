export const repos = {
  mac: 'QuackByte/glide',
  windows: 'QuackByte/glide-windows',
  site: 'QuackByte/glide.github.io',
} as const;

export const github = (repo: string, path = '') => `https://github.com/${repo}${path}`;

export const requirements = {
  mac: { en: 'macOS 27 or later, Apple silicon', es: 'macOS 27 o posterior, Apple silicon' },
  windows: { en: 'Windows 11, x64 or Arm', es: 'Windows 11, x64 o Arm' },
};

export const owner = {
  brand: 'Quackbyte',
  brandUrl: 'https://quackbyte.dev/',
  maintainer: 'Jesus Sanz',
  maintainerUrl: 'https://github.com/jsanzdev',
};

/** Date shown as "Last updated" on the privacy policy and code signing policy. ISO format. */
export const policiesUpdated = '2026-10-14';
