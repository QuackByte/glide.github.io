# Glide website

The website for Glide, the scrolling window manager for [Mac](https://github.com/QuackByte/glide) and [Windows](https://github.com/QuackByte/glide-windows). Built with Astro 7 (Vite under the hood) and TypeScript, in eight languages, and served at **https://quackbyte.dev/glide/**.

| Language | Home | Privacy policy |
| --- | --- | --- |
| English | `/glide/` | `/glide/privacy/` |
| Español | `/glide/es/` | `/glide/es/privacidad/` |
| Français | `/glide/fr/` | `/glide/fr/confidentialite/` |
| Deutsch | `/glide/de/` | `/glide/de/datenschutz/` |
| 日本語 | `/glide/ja/` | `/glide/ja/privacy/` |
| 简体中文 | `/glide/zh/` | `/glide/zh/privacy/` |
| 한국어 | `/glide/ko/` | `/glide/ko/privacy/` |
| Português (Brasil) | `/glide/pt/` | `/glide/pt/privacidade/` |

## Copy and translations

All visible copy lives in one file per language, [`src/i18n/<lang>.ts`](src/i18n). [`en.ts`](src/i18n/en.ts) defines the shape (its header explains how to translate, how `…Html` strings carry links and `<kbd>`, and the `{tokens}` such as `{mac}` that stand for URLs and key symbols); every other language is typed against it, so a missing key fails `npm run check`. Components never contain copy. Product names, URLs and key symbols come from [`src/config.ts`](src/config.ts) and `tokens()` in [`src/i18n.ts`](src/i18n.ts).

To change a sentence, edit it in every language file (or in English and let translators follow). To add a language: add a message file, then the language to `langs`, `languages` and `routes` in `src/i18n.ts`, to `i18n.locales` in `astro.config.mjs`, and a page pair under `src/pages/<lang>/`. CJK languages also need a font stack in `src/styles/global.css`.

## Downloads

The download buttons link to each app's latest GitHub release. In the browser, the page asks GitHub's API for that release and points them straight at the files (`*-macOS.zip`, `*-x64-Setup.exe`, `*-arm64-Setup.exe`), so a new release shows up without rebuilding the site. Keep those asset names in the apps' release workflows.

## Mac and Windows parity

[`src/data/features.ts`](src/data/features.ts) lists what each app does, and the home page renders it as the "Mac & Windows" table. It's the one place that tracks parity between the two apps. It holds feature ids and statuses; the names and notes are in the message files (`features.names` and `features.notes`, keyed by id):

- When a feature ships on one platform, add a row (plus its name in every `src/i18n/*.ts`), `planned` on the other if it should follow.
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
