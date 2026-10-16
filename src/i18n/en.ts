// English copy, and the shape every language file must follow (`Messages` is derived from this
// object, so a key missing from another language fails `npm run check`).
//
// HOW TO TRANSLATE
//   Copy the values only; keep every key, and keep the order. Product names (Glide, Mac,
//   Windows, GitHub) and keyboard symbols stay as they are unless your language writes them
//   differently. Strings are plain TypeScript strings: use "double quotes" or `backticks`
//   if the text contains a straight apostrophe, and \n is not needed anywhere.
//
// PLAIN vs. HTML STRINGS
//   Keys ending in `Html` are small HTML strings, rendered as markup. They may contain only:
//       <a href="{mac}">text</a>     a link. Translate the text, never touch the href.
//       <kbd>{macMod}</kbd>          a keyboard key.
//       <span class="path">…</span>  a file path.
//   Every other key is plain text (don't write HTML in it; `&` and `<` are fine).
//
// {TOKENS}
//   Anything in {curly braces} is replaced when the page is built, in both plain and HTML
//   strings. Keep the tokens exactly as written; move them wherever your grammar needs them.
//   The full list is `tokens()` in src/i18n.ts. The ones used below:
//     {mac} {windows}                     GitHub repositories of the two apps
//     {macReleases} {windowsReleases}     their release pages
//     {macIssues} {windowsIssues}         their issue trackers
//     {privacy}                           this site's privacy policy, in the same language
//     {maintainer} {maintainerUrl} {brand}
//     {githubPrivacy} {aepd}              external privacy pages
//     {macMod} {macOverview}              ⌃⌥ and ⌃⌥O
//     {winKey} {winOverview}              Win and Win+Tab
//     {appData} {localAppData}            Windows folders shown in the privacy policy
//     {date}                              only in privacy.updated: the formatted date
//
// The Mac and Windows feature table: names and notes are keyed by the ids in
// src/data/features.ts. Statuses (yes, planned…) live there; only the words live here.

import type { FeatureId, GroupId, NotedFeatureId, Status } from '../data/features';

export const en = {
  // <html> and the page chrome
  site: {
    skip: 'Skip to content',
  },
  header: {
    mainNav: 'Main',
    download: 'Download',
    platforms: 'Mac & Windows',
    source: 'Source',
    // Label of the language picker; the language names themselves are never translated.
    language: 'Language',
  },
  footer: {
    madeBy: 'A Quackbyte app.',
    license: 'Open source, MIT license',
    privacy: 'Privacy policy',
  },

  home: {
    title: 'Glide: a scrolling window manager for Mac and Windows',
    description:
      'Glide lays your windows out as columns on an endless horizontal strip that you glide through with the keyboard. Free and open source.',
    hero: {
      title: 'Your windows, in a row. Glide.',
      lede: 'Glide puts every window in a column on an endless horizontal strip and moves you through them with the keyboard or trackpad. No more windows piled on windows. For Mac and Windows.',
      download: 'Download free',
      meta: 'Open source, MIT license. In the style of niri and PaperWM.',
    },
    how: {
      title: 'How it works',
      steps: [
        {
          title: 'Every window is a column',
          body: 'New windows open to the right of the one you’re using. Columns fill the screen’s height in set widths: ⅓, ½, ⅔ or full.',
        },
        {
          title: 'Glide along the strip',
          body: 'The arrow keys take you from column to column, and the strip scrolls just enough to show the one in focus.',
        },
        {
          title: 'Arrange without dragging',
          body: 'Add Shift to take the window with you. Stack windows in a column, turn them into tabs, or send them to another workspace.',
        },
      ],
    },
    keyboard: {
      title: 'Made for the keyboard',
      points: [
        {
          title: 'One chord for everything',
          bodyHtml: 'Everything starts with <kbd>{macMod}</kbd> on Mac and <kbd>{winKey}</kbd> on Windows. Every shortcut can be changed.',
        },
        {
          title: 'Nine workspaces and an overview',
          bodyHtml:
            'Each workspace is its own strip. <kbd>{macOverview}</kbd> or <kbd>{winOverview}</kbd> shows them all; type to find a window.',
        },
        {
          title: 'Never lose a window',
          bodyHtml: 'Turn Glide off or quit it and every window comes back on screen. If Glide crashes, a watchdog does the same.',
        },
      ],
    },
    downloadTitle: 'Download',
    platformsTitle: 'Mac and Windows',
    open: {
      title: 'Open source',
      points: [
        {
          title: 'Read it, change it',
          bodyHtml:
            'Glide is free and MIT licensed. The code is on GitHub: <a href="{mac}">Mac</a> (Swift) and <a href="{windows}">Windows</a> (C#).',
        },
        {
          title: 'Tell us what breaks',
          bodyHtml:
            'Open an issue in your platform’s repository: <a href="{macIssues}">Mac</a> or <a href="{windowsIssues}">Windows</a>.',
        },
        {
          title: 'Nothing leaves your computer',
          bodyHtml:
            'No accounts, analytics or tracking. Glide only asks GitHub whether there’s a newer version. <a href="{privacy}">Privacy policy</a>',
        },
      ],
    },
  },

  strip: {
    label: 'Columns of windows on a horizontal strip sliding under the screen',
    swipe: 'or swipe three fingers',
  },

  downloads: {
    macNote: 'macOS 27 or later, Apple silicon. Signed and notarized by Apple.',
    macButton: 'Download for Mac',
    windowsNote: 'Windows 11, x64 or Arm. Installs without administrator rights.',
    windowsWarning: 'Not code-signed yet, so Windows SmartScreen may warn the first time: choose More info › Run anyway.',
    windowsX64: 'Download (x64)',
    windowsArm: 'Download (Arm)',
    source: 'Source code',
    releasesHtml:
      'Both keep themselves up to date. Every release, with its notes and checksums, is on GitHub: <a href="{macReleases}">Mac</a>, <a href="{windowsReleases}">Windows</a>.',
  },

  parity: {
    caption:
      'Glide for Mac and Glide for Windows share one engine and the same shortcuts ({macMod} on Mac, {winKey} on Windows). This is what each does today.',
    feature: 'Feature',
    status: {
      yes: 'Yes',
      partial: 'Partly',
      planned: 'Planned',
      na: 'Not needed',
    } satisfies Record<Status, string>,
  },

  features: {
    groups: {
      tiling: 'Tiling',
      workspaces: 'Workspaces and monitors',
      input: 'Input',
      appearance: 'Appearance',
      behavior: 'Behavior',
    } satisfies Record<GroupId, string>,
    names: {
      columns: 'Columns on an endless horizontal strip',
      stacks: 'Stacks: several windows in one column',
      tabs: 'Tabbed columns',
      widths: 'Width presets, full width and centering',
      resize: 'Resize a column by dragging its edge',
      floating: 'Floating windows',
      slideAnimation: 'Slide animation',
      dragWindow: 'Drag a window into a stack, tabs or another monitor',
      nineWorkspaces: 'Nine workspaces',
      everyMonitor: 'Every monitor tiled, with its own workspaces',
      workspacesInUse: 'Workspaces in use, in the menu bar or tray',
      workspaceNumbers: 'Workspace numbers on screen when switching',
      overview: 'Overview of every workspace, filtered by typing',
      livePreviews: 'Live window previews in the overview',
      shortcuts: 'A shortcut for every action, all rebindable',
      clashWarnings: 'Warnings for shortcuts that clash',
      swipe: 'Three-finger swipe along the strip',
      mouseWheel: 'Mouse wheel along the strip',
      systemShortcuts: 'Take over the system’s window shortcuts',
      gap: 'Gap between windows',
      focusRingColor: 'Focus ring in any color',
      focusRingThickness: 'Focus ring thickness',
      dimUnfocused: 'Dim unfocused windows',
      appRules: 'Per-app rules: float, tile, width, workspace',
      reopenApps: 'Apps reopen where you keep them',
      restoreWindows: 'Windows put back when tiling stops or Glide quits',
      watchdog: 'Crash watchdog that puts windows back',
      startAtLogin: 'Start at login',
      autoUpdates: 'Automatic updates',
      runAsAdmin: 'Manage apps running as administrator',
    } satisfies Record<FeatureId, string>,
    notes: {
      workspacesInUse:
        'On Windows the tray icon shows a 3×3 grid of the nine workspaces, with the ones in use lit. Glide for Mac shows their numbers in the menu bar.',
      livePreviews: 'On Mac, with the Screen Recording permission; app icons without it.',
      systemShortcuts: 'On Mac, Glide’s ⌃⌥ shortcuts don’t clash with macOS.',
      runAsAdmin: 'Windows only: restart Glide as administrator.',
    } satisfies Record<NotedFeatureId, string>,
  },

  privacy: {
    title: 'Privacy policy | Glide',
    description: 'How Glide and this website handle your data: Glide collects none.',
    heading: 'Privacy policy',
    updated: 'Last updated {date}',
    intro:
      'Glide doesn’t collect, store or share any personal data. Your layout, shortcuts and settings stay on your computer.',
    responsible: {
      title: 'Who is responsible',
      bodyHtml:
        'Glide is open-source software made by <a href="{maintainerUrl}">{maintainer}</a> as {brand}. For any privacy question, open an issue on <a href="{macIssues}">GitHub</a>.',
    },
    apps: {
      title: 'The Glide apps',
      stores: {
        title: 'What they store',
        bodyHtml:
          'Your settings, shortcuts, app rules and window layout are saved only on your computer: in macOS’s preferences for Glide on Mac, and in <span class="path">{appData}</span> on Windows. Glide for Windows also keeps a log in <span class="path">{localAppData}</span>, which stays on your PC.',
      },
      updates: {
        title: 'Update checks',
        bodyHtml:
          'To keep itself up to date, Glide asks GitHub about once a day whether there’s a newer release, and downloads it from GitHub when you install it. That request carries Glide’s version and, like any request, your IP address; nothing else is sent, and we don’t receive it. GitHub handles it under the <a href="{githubPrivacy}">GitHub General Privacy Statement</a>. Turn the check off in Glide’s Settings, under Updates.',
      },
      doesNot: {
        title: 'What the apps don’t do',
        items: [
          'They don’t collect personal data, usage data or identifiers.',
          'They don’t include analytics, advertising or tracking of any kind.',
          'They don’t read the contents of your windows or what you type. Glide watches only its own shortcuts.',
        ],
      },
      permissions: {
        title: 'Permissions on Mac',
        body: 'Glide needs the Accessibility permission to read window positions and move, resize and focus windows. Screen Recording is optional and only draws window previews in the overview; the images never leave your Mac.',
      },
    },
    website: {
      title: 'This website',
      bodyHtml:
        'This website doesn’t use cookies, analytics or trackers, and its fonts are served from the same place as the site. It is hosted on GitHub Pages, and the download buttons ask GitHub for the latest release from your browser. GitHub may process your IP address in server logs for security and to deliver the site, as described in the <a href="{githubPrivacy}">GitHub General Privacy Statement</a>.',
    },
    rights: {
      title: 'Your rights',
      bodyHtml:
        'Under the GDPR you can ask to access, correct or delete personal data we hold about you; since Glide sends us none, we normally hold none. You can also complain to the Spanish data protection authority, the <a href="{aepd}">Agencia Española de Protección de Datos</a>.',
    },
  },
};

export type Messages = typeof en;
