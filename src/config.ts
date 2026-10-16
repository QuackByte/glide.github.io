export const repos = {
  mac: 'QuackByte/glide',
  windows: 'QuackByte/glide-windows',
  site: 'QuackByte/glide.github.io',
} as const;

export const github = (repo: string, path = '') => `https://github.com/${repo}${path}`;

export const owner = {
  brand: 'Quackbyte',
  brandUrl: 'https://quackbyte.dev/',
  maintainer: 'Jesus Sanz',
  maintainerUrl: 'https://github.com/jsanzdev',
};

/** Date shown as "Last updated" on the privacy policy. ISO format. */
export const policiesUpdated = '2026-10-14';
