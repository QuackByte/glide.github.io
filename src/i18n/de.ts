// German (Germany) copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { Messages } from './en';

export const de: Messages = {
  site: {
    skip: 'Zum Inhalt springen',
  },
  header: {
    mainNav: 'Hauptnavigation',
    download: 'Download',
    platforms: 'Mac & Windows',
    source: 'Quellcode',
    // Label of the language picker; the language names themselves are never translated.
    language: 'Sprache',
  },
  footer: {
    madeBy: 'Eine App von Quackbyte.',
    license: 'Open Source, MIT-Lizenz',
    privacy: 'Datenschutzerklärung',
  },

  home: {
    title: 'Glide: ein scrollender und kachelnder Fenstermanager für Mac und Windows',
    description:
      'Glide ordnet deine Fenster als Spalten auf einem endlosen horizontalen Band an, über das du mit der Tastatur gleitest, oder kachelt sie alle auf einem Bildschirm. Kostenlos und Open Source.',
    hero: {
      title: 'Deine Fenster in einer Reihe. Glide.',
      lede: 'Glide setzt jedes Fenster in eine Spalte auf einem endlosen horizontalen Band und bringt dich per Tastatur oder Trackpad von Fenster zu Fenster. Oder kachle einen Arbeitsbereich, damit alle Fenster auf den Bildschirm passen. Für Mac und Windows.',
      download: 'Kostenlos herunterladen',
      meta: 'Open Source, MIT-Lizenz. Scrollt wie niri und PaperWM, kachelt spiralförmig wie ein Dwindle-Layout.',
    },
    how: {
      title: 'So funktioniert es',
      steps: [
        {
          title: 'Jedes Fenster ist eine Spalte',
          body: 'Neue Fenster öffnen sich rechts neben dem, das du gerade benutzt. Die Spalten füllen die Bildschirmhöhe aus und haben feste Breiten: ⅓, ½, ⅔ oder volle Breite.',
        },
        {
          title: 'Entlang des Bands gleiten',
          body: 'Mit den Pfeiltasten wechselst du von Spalte zu Spalte, und das Band scrollt gerade so weit, dass die fokussierte Spalte sichtbar ist.',
        },
        {
          title: 'Anordnen ohne Ziehen',
          body: 'Mit der Umschalttaste nimmst du das Fenster mit. Stapele Fenster in einer Spalte, verwandle sie in Tabs oder schicke sie in einen anderen Arbeitsbereich.',
        },
      ],
    },
    tiling: {
      title: "Oder alles gekachelt auf einem Bildschirm",
      lede: "Alle Fenster im Blick? Schalte einen beliebigen Arbeitsbereich auf die gekachelte Anordnung, und Glide bringt sie alle auf den Bildschirm, ohne Scrollen. Schaltest du zurück, bleibt ihre Reihenfolge erhalten.",
      points: [
        {
          title: "Eine Spirale, die sich selbst kachelt",
          bodyHtml:
            "Ein Fenster füllt den Bildschirm, zwei teilen ihn sich. Ab dem dritten teilt sich die letzte Kachel erneut, oben und unten, dann nebeneinander. Keine Bäume zu verwalten.",
        },
        {
          title: "Zwei Spalten oder drei",
          bodyHtml:
            "<kbd>{macTiledColumns}</kbd> oder <kbd>{winTiledColumns}</kbd> wechselt zwischen 2 und 3 Spalten. Auf einem Ultrawide-Bildschirm wählt Glide 3 für dich.",
        },
        {
          title: "Nach Richtung bewegen",
          bodyHtml:
            "Die Pfeiltasten fokussieren die Kachel auf dieser Seite, mit Umschalt tauschst du sie dorthin. Stelle eine Teilung auf ⅓, ½ oder ⅔, zoome eine Kachel auf den ganzen Bildschirm und fasse Fenster als Tabs zusammen.",
        },
        {
          title: "Eine Anordnung pro Arbeitsbereich",
          bodyHtml:
            "Jeder Arbeitsbereich auf jedem Bildschirm behält seine Anordnung, auch nach einem Neustart: Editor und Terminals gekachelt auf dem einen, ein scrollendes Band voller Browser auf dem nächsten.",
        },
      ],
    },
    keyboard: {
      title: 'Für die Tastatur gemacht',
      points: [
        {
          title: 'Eine Modifikatortaste für alles',
          bodyHtml: 'Alles beginnt mit <kbd>{macMod}</kbd> auf dem Mac und <kbd>{winKey}</kbd> unter Windows. Jedes Tastenkürzel lässt sich ändern.',
        },
        {
          title: 'Neun Arbeitsbereiche und eine Übersicht',
          bodyHtml:
            'Jeder Arbeitsbereich hat sein eigenes Band. <kbd>{macOverview}</kbd> oder <kbd>{winOverview}</kbd> zeigt alle; tippe, um ein Fenster zu finden.',
        },
        {
          title: 'Nie wieder ein verlorenes Fenster',
          bodyHtml: 'Schalte Glide aus oder beende es, und jedes Fenster kehrt auf den Bildschirm zurück. Stürzt Glide ab, erledigt das ein Wächterprozess.',
        },
      ],
    },
    downloadTitle: 'Download',
    platformsTitle: 'Mac und Windows',
    open: {
      title: 'Open Source',
      points: [
        {
          title: 'Lesen und ändern',
          bodyHtml:
            'Glide ist kostenlos und steht unter der MIT-Lizenz. Den Code findest du auf GitHub: <a href="{mac}">Mac</a> (Swift) und <a href="{windows}">Windows</a> (C#).',
        },
        {
          title: 'Sag uns, was nicht funktioniert',
          bodyHtml:
            'Eröffne ein Issue im Repository deiner Plattform: <a href="{macIssues}">Mac</a> oder <a href="{windowsIssues}">Windows</a>.',
        },
        {
          title: 'Nichts verlässt deinen Computer',
          bodyHtml:
            'Keine Konten, keine Analyse, kein Tracking. Glide fragt GitHub lediglich, ob es eine neuere Version gibt. <a href="{privacy}">Datenschutzerklärung</a>',
        },
      ],
    },
  },

  strip: {
    label: 'Fensterspalten auf einem horizontalen Band, das unter dem Bildschirm gleitet',
    swipe: 'oder mit drei Fingern wischen',
  },

  tiled: {
    label: "Fenster, die sich spiralförmig selbst kacheln: Jedes neue Fenster teilt die letzte Kachel in zwei",
    toggle: "scrollend ⇄ gekachelt",
    columns: "2 oder 3 Spalten",
  },

  downloads: {
    macNote: 'macOS 27 oder neuer, Apple Silicon. Von Apple signiert und notarisiert.',
    macButton: 'Für Mac herunterladen',
    windowsNote: 'Windows 11, x64 oder Arm. Wird ohne Administratorrechte installiert.',
    windowsWarning: 'Noch nicht codesigniert, daher warnt Windows SmartScreen beim ersten Mal eventuell: wähle „Weitere Informationen“ › „Trotzdem ausführen“.',
    windowsX64: 'Download (x64)',
    windowsArm: 'Download (Arm)',
    source: 'Quellcode',
    releasesHtml:
      'Beide halten sich selbst aktuell. Jede Version mit Versionshinweisen und Prüfsummen findest du auf GitHub: <a href="{macReleases}">Mac</a>, <a href="{windowsReleases}">Windows</a>.',
  },

  parity: {
    caption:
      'Glide für Mac und Glide für Windows teilen sich eine Engine und dieselben Tastenkürzel ({macMod} auf dem Mac, {winKey} unter Windows). So viel kann jedes von beiden heute.',
    feature: 'Funktion',
    status: {
      yes: 'Ja',
      partial: 'Teilweise',
      planned: 'Geplant',
      na: 'Nicht nötig',
    },
  },

  features: {
    groups: {
      tiling: 'Kacheln',
      workspaces: 'Arbeitsbereiche und Monitore',
      input: 'Eingabe',
      appearance: 'Darstellung',
      behavior: 'Verhalten',
    },
    names: {
      columns: 'Spalten auf einem endlosen horizontalen Band',
      stacks: 'Stapel: mehrere Fenster in einer Spalte',
      tabs: 'Spalten mit Tabs',
      widths: 'Breitenvorgaben, volle Breite und Zentrieren',
      tiledLayout: "Gekachelte Spirale oder scrollendes Band, pro Arbeitsbereich",
      tiledColumns: "Gekachelt mit 2 oder 3 Spalten, 3 auf Ultrawide-Bildschirmen",
      tiledMoves: "Gekachelt: nach Richtung fokussieren und tauschen, Teilungen ändern, eine Kachel zoomen",
      resize: 'Spaltengröße durch Ziehen am Rand ändern',
      floating: 'Schwebende Fenster',
      slideAnimation: 'Gleitanimation',
      dragWindow: 'Fenster in einen Stapel, in Tabs oder auf einen anderen Monitor ziehen',
      nineWorkspaces: 'Neun Arbeitsbereiche',
      everyMonitor: 'Jeder Monitor gekachelt, mit eigenen Arbeitsbereichen',
      workspacesInUse: 'Genutzte Arbeitsbereiche in der Menüleiste oder im Infobereich',
      workspaceNumbers: 'Arbeitsbereichsnummern beim Wechseln auf dem Bildschirm',
      overview: 'Übersicht aller Arbeitsbereiche, durch Tippen filterbar',
      livePreviews: 'Live-Vorschauen der Fenster in der Übersicht',
      shortcuts: 'Ein Tastenkürzel für jede Aktion, alle anpassbar',
      clashWarnings: 'Warnungen bei kollidierenden Tastenkürzeln',
      swipe: 'Dreifingerwischen entlang des Bands',
      mouseWheel: 'Mausrad entlang des Bands',
      systemShortcuts: 'Fenster-Tastenkürzel des Systems übernehmen',
      gap: 'Abstand zwischen Fenstern',
      focusRingColor: 'Fokusrahmen in jeder Farbe',
      focusRingThickness: 'Stärke des Fokusrahmens',
      dimUnfocused: 'Inaktive Fenster abdunkeln',
      appRules: 'Regeln pro App: schweben, kacheln, Breite, Arbeitsbereich',
      reopenApps: 'Apps öffnen sich dort, wo du sie ablegst',
      restoreWindows: 'Fenster kehren zurück, wenn das Kacheln endet oder Glide beendet wird',
      watchdog: 'Absturzwächter, der Fenster zurückholt',
      startAtLogin: 'Beim Anmelden starten',
      autoUpdates: 'Automatische Updates',
      runAsAdmin: 'Apps verwalten, die als Administrator laufen',
    },
    notes: {
      tiledLayout:
        'Unter Windows schaltet Win+Strg+T den Arbeitsbereich um, am Mac ⌃⌥T. In der gekachelten Anordnung passen alle Fenster spiralförmig auf den Bildschirm, ohne Scrollen. Jeder Arbeitsbereich behält seine Anordnung; unter Einstellungen › Allgemein › Anordnung legst du fest, womit neue starten.',
      workspacesInUse:
        'Unter Windows zeigt das Symbol im Infobereich ein 3×3-Raster der neun Arbeitsbereiche, wobei die genutzten leuchten. Glide für Mac zeigt ihre Nummern in der Menüleiste.',
      livePreviews: 'Auf dem Mac mit der Berechtigung „Bildschirmaufnahme“; ohne sie werden App-Symbole angezeigt.',
      systemShortcuts: 'Auf dem Mac kollidieren die ⌃⌥-Tastenkürzel von Glide nicht mit macOS.',
      runAsAdmin: 'Nur unter Windows: Glide als Administrator neu starten.',
    },
  },

  privacy: {
    title: 'Datenschutzerklärung | Glide',
    description: 'Wie Glide und diese Website mit deinen Daten umgehen: Glide erhebt keine.',
    heading: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert am {date}',
    intro:
      'Glide erhebt, speichert und teilt keine personenbezogenen Daten. Deine Anordnung, Tastenkürzel und Einstellungen bleiben auf deinem Computer.',
    responsible: {
      title: 'Verantwortlicher',
      bodyHtml:
        'Glide ist Open-Source-Software von <a href="{maintainerUrl}">{maintainer}</a> unter der Marke {brand}. Bei Fragen zum Datenschutz eröffne ein Issue auf <a href="{macIssues}">GitHub</a>.',
    },
    apps: {
      title: 'Die Glide-Apps',
      stores: {
        title: 'Was sie speichern',
        bodyHtml:
          'Deine Einstellungen, Tastenkürzel, App-Regeln und die Fensteranordnung werden nur auf deinem Computer gespeichert: in den Einstellungen von macOS für Glide auf dem Mac und in <span class="path">{appData}</span> unter Windows. Glide für Windows führt außerdem ein Protokoll in <span class="path">{localAppData}</span>, das auf deinem PC bleibt.',
      },
      updates: {
        title: 'Update-Prüfungen',
        bodyHtml:
          'Um sich aktuell zu halten, fragt Glide etwa einmal täglich bei GitHub nach, ob es eine neuere Version gibt, und lädt sie von GitHub herunter, wenn du sie installierst. Diese Anfrage enthält die Version von Glide und, wie jede Anfrage, deine IP-Adresse; sonst wird nichts gesendet, und wir erhalten sie nicht. GitHub verarbeitet sie gemäß der <a href="{githubPrivacy}">Allgemeinen Datenschutzerklärung von GitHub</a>. Schalte die Prüfung in den Einstellungen von Glide unter „Updates“ aus.',
      },
      doesNot: {
        title: 'Was die Apps nicht tun',
        items: [
          'Sie erheben keine personenbezogenen Daten, Nutzungsdaten oder Kennungen.',
          'Sie enthalten keine Analyse-, Werbe- oder Tracking-Funktionen jeglicher Art.',
          'Sie lesen weder den Inhalt deiner Fenster noch deine Eingaben. Glide überwacht nur seine eigenen Tastenkürzel.',
        ],
      },
      permissions: {
        title: 'Berechtigungen auf dem Mac',
        body: 'Glide benötigt die Berechtigung für die Bedienungshilfen, um Fensterpositionen zu lesen und Fenster zu bewegen, ihre Größe zu ändern und sie zu fokussieren. Die Bildschirmaufnahme ist optional und dient nur dazu, Fenstervorschauen in der Übersicht zu zeichnen; die Bilder verlassen deinen Mac nie.',
      },
    },
    website: {
      title: 'Diese Website',
      bodyHtml:
        'Diese Website verwendet keine Cookies, Analyse- oder Tracking-Dienste, und ihre Schriften werden vom selben Ort wie die Website ausgeliefert. Sie wird auf GitHub Pages gehostet, und die Download-Buttons fragen GitHub in deinem Browser nach der neuesten Version. GitHub kann deine IP-Adresse zur Sicherheit und zur Auslieferung der Website in Server-Logs verarbeiten, wie in der <a href="{githubPrivacy}">Allgemeinen Datenschutzerklärung von GitHub</a> beschrieben.',
    },
    rights: {
      title: 'Deine Rechte',
      bodyHtml:
        'Nach der DSGVO kannst du Auskunft über personenbezogene Daten verlangen, die wir über dich gespeichert haben, sowie deren Berichtigung oder Löschung; da Glide uns keine sendet, haben wir normalerweise keine. Du kannst dich außerdem bei der spanischen Datenschutzbehörde beschweren, der <a href="{aepd}">Agencia Española de Protección de Datos</a>.',
    },
  },
};
