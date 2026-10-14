# Glide website

The website for Glide, the scrolling window manager for [Mac](https://github.com/QuackByte/glide) and [Windows](https://github.com/QuackByte/glide-windows). Built with Astro 7 (Vite under the hood) and TypeScript, in English and Spanish, and served at **https://quackbyte.dev/glide/**.

| Page | English | Español |
| --- | --- | --- |
| Home, downloads, Mac & Windows table | `/glide/` | `/glide/es/` |
| Privacy policy | `/glide/privacy/` | `/glide/es/privacidad/` |

## Downloads

The download buttons link to each app's latest GitHub release. In the browser, the page asks GitHub's API for that release and points them straight at the files (`*-macOS.zip`, `*-x64-Setup.exe`, `*-arm64-Setup.exe`), so a new release shows up without rebuilding the site. Keep those asset names in the apps' release workflows.

## Mac and Windows parity

[`src/data/features.ts`](src/data/features.ts) lists what each app does, and the home page renders it as the "Mac & Windows" table. It's the one place that tracks parity between the two apps:

- When a feature ships on one platform, add a row, `planned` on the other if it should follow.
- When it ships on the other, flip it to `yes`.
- `partial` needs a note saying what differs; `na` is for things that don't apply to a platform.

To see what's missing on each side, search the file for `mac: 'planned'` or `windows: 'planned'`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/glide/
npm run build    # astro check + static build into dist/
```

## Deploy

[QuackByte/quackbyte.github.io](https://github.com/QuackByte/quackbyte.github.io) builds this repository into `/glide` of quackbyte.dev on every push to its `main`, like ClickType, Quackbit and Quacktop. After changing this site, re-run that repository's **Deploy to GitHub Pages** workflow. This repository's own workflow only checks the build.
