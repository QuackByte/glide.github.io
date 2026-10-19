// French (France) copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { Messages } from './en';

export const fr: Messages = {
  site: {
    skip: 'Aller au contenu',
  },
  header: {
    mainNav: 'Principal',
    download: 'Télécharger',
    platforms: 'Mac et Windows',
    source: 'Code source',
    // Label of the language picker; the language names themselves are never translated.
    language: 'Langue',
  },
  footer: {
    madeBy: 'Une app Quackbyte.',
    license: 'Open source, licence MIT',
    privacy: 'Politique de confidentialité',
  },

  home: {
    title: 'Glide : un gestionnaire de fenêtres à défilement et en mosaïque pour Mac et Windows',
    description:
      'Glide dispose vos fenêtres en colonnes sur une bande horizontale sans fin que vous parcourez au clavier, ou les met toutes en mosaïque sur un seul écran. Gratuit et open source.',
    hero: {
      title: 'Vos fenêtres, en file. Glide.',
      lede: 'Glide place chaque fenêtre dans une colonne sur une bande horizontale sans fin et vous fait passer de l’une à l’autre au clavier ou au trackpad. Ou passez un bureau en mosaïque pour que toutes les fenêtres tiennent à l’écran. Pour Mac et Windows.',
      download: 'Télécharger gratuitement',
      meta: 'Open source, licence MIT. Défile dans l’esprit de niri et PaperWM, se met en mosaïque en spirale comme une disposition dwindle.',
    },
    how: {
      title: 'Comment ça marche',
      steps: [
        {
          title: 'Chaque fenêtre est une colonne',
          body: 'Les nouvelles fenêtres s’ouvrent à droite de celle que vous utilisez. Les colonnes occupent toute la hauteur de l’écran, avec des largeurs prédéfinies : ⅓, ½, ⅔ ou pleine largeur.',
        },
        {
          title: 'Glissez le long de la bande',
          body: 'Les touches fléchées vous font passer d’une colonne à l’autre, et la bande défile juste assez pour montrer celle qui a le focus.',
        },
        {
          title: 'Organisez sans glisser-déposer',
          body: 'Ajoutez Maj pour emmener la fenêtre avec vous. Empilez des fenêtres dans une colonne, transformez-les en onglets ou envoyez-les vers un autre bureau.',
        },
      ],
    },
    tiling: {
      title: "Ou tout en mosaïque sur un écran",
      lede: "Envie de voir toutes vos fenêtres ? Passez n’importe quel bureau en mosaïque et Glide les fait toutes tenir à l’écran, sans rien à faire défiler. Revenez en arrière et elles gardent leur ordre.",
      points: [
        {
          title: "Une spirale qui s’organise toute seule",
          bodyHtml:
            "Une fenêtre remplit l’écran, deux se le partagent. À partir de la troisième, la dernière tuile se divise à nouveau, en haut et en bas, puis côte à côte. Aucun arbre à gérer.",
        },
        {
          title: "Deux colonnes, ou trois",
          bodyHtml:
            "<kbd>{macTiledColumns}</kbd> ou <kbd>{winTiledColumns}</kbd> bascule entre 2 et 3 colonnes. Sur un écran ultra-large, Glide en choisit 3 pour vous.",
        },
        {
          title: "Déplacez-vous par direction",
          bodyHtml:
            "Les flèches activent la tuile de ce côté, et avec Maj vous l’échangez. Réglez une division sur ⅓, ½ ou ⅔, agrandissez une tuile en plein écran et regroupez des fenêtres en onglets.",
        },
        {
          title: "Une disposition par bureau",
          bodyHtml:
            "Chaque bureau de chaque écran garde sa disposition, même après un redémarrage : éditeur et terminaux en mosaïque sur l’un, une bande de navigateurs sur le suivant.",
        },
      ],
    },
    keyboard: {
      title: 'Conçu pour le clavier',
      points: [
        {
          title: 'Une seule combinaison pour tout',
          bodyHtml: 'Tout commence par <kbd>{macMod}</kbd> sur Mac et <kbd>{winKey}</kbd> sur Windows. Chaque raccourci peut être modifié.',
        },
        {
          title: 'Neuf bureaux et une vue d’ensemble',
          bodyHtml:
            'Chaque bureau a sa propre bande. <kbd>{macOverview}</kbd> ou <kbd>{winOverview}</kbd> les affiche tous ; saisissez du texte pour trouver une fenêtre.',
        },
        {
          title: 'Ne perdez jamais une fenêtre',
          bodyHtml: 'Désactivez Glide ou quittez-le, et chaque fenêtre revient à l’écran. Si Glide plante, un chien de garde fait de même.',
        },
      ],
    },
    downloadTitle: 'Télécharger',
    platformsTitle: 'Mac et Windows',
    open: {
      title: 'Open source',
      points: [
        {
          title: 'Lisez-le, modifiez-le',
          bodyHtml:
            'Glide est gratuit et sous licence MIT. Le code est sur GitHub : <a href="{mac}">Mac</a> (Swift) et <a href="{windows}">Windows</a> (C#).',
        },
        {
          title: 'Dites-nous ce qui ne va pas',
          bodyHtml:
            'Ouvrez un ticket dans le dépôt de votre plateforme : <a href="{macIssues}">Mac</a> ou <a href="{windowsIssues}">Windows</a>.',
        },
        {
          title: 'Rien ne quitte votre ordinateur',
          bodyHtml:
            'Ni compte, ni statistiques, ni suivi. Glide demande seulement à GitHub s’il existe une version plus récente. <a href="{privacy}">Politique de confidentialité</a>',
        },
      ],
    },
  },

  strip: {
    label: 'Des colonnes de fenêtres sur une bande horizontale qui défile sous l’écran',
    swipe: 'ou balayez avec trois doigts',
  },

  tiled: {
    label: "Des fenêtres qui se placent en spirale : chaque nouvelle fenêtre coupe la dernière tuile en deux",
    toggle: "défilement ⇄ mosaïque",
    columns: "2 ou 3 colonnes",
  },

  downloads: {
    macNote: 'macOS 27 ou version ultérieure, puce Apple. Signé et notarisé par Apple.',
    macButton: 'Télécharger pour Mac',
    windowsNote: 'Windows 11, x64 ou Arm. S’installe sans droits d’administrateur.',
    windowsWarning: 'Pas encore signé avec un certificat de signature de code, donc Windows SmartScreen peut afficher un avertissement la première fois : choisissez Informations complémentaires › Exécuter quand même.',
    windowsX64: 'Télécharger (x64)',
    windowsArm: 'Télécharger (Arm)',
    source: 'Code source',
    releasesHtml:
      'Les deux se mettent à jour tout seuls. Chaque version, avec ses notes et ses sommes de contrôle, est sur GitHub : <a href="{macReleases}">Mac</a>, <a href="{windowsReleases}">Windows</a>.',
  },

  parity: {
    caption:
      'Glide pour Mac et Glide pour Windows partagent le même moteur et les mêmes raccourcis ({macMod} sur Mac, {winKey} sur Windows). Voici ce que fait chacun aujourd’hui.',
    feature: 'Fonctionnalité',
    status: {
      yes: 'Oui',
      partial: 'En partie',
      planned: 'Prévu',
      na: 'Inutile',
    },
  },

  features: {
    groups: {
      tiling: 'Mosaïque',
      workspaces: 'Bureaux et écrans',
      input: 'Saisie',
      appearance: 'Apparence',
      behavior: 'Comportement',
    },
    names: {
      columns: 'Des colonnes sur une bande horizontale sans fin',
      stacks: 'Piles : plusieurs fenêtres dans une colonne',
      tabs: 'Colonnes en onglets',
      widths: 'Largeurs prédéfinies, pleine largeur et centrage',
      tiledLayout: "Mosaïque en spirale ou bande à défilement, par bureau",
      tiledColumns: "Mosaïque sur 2 ou 3 colonnes, 3 sur les écrans ultra-larges",
      tiledMoves: "Mosaïque : activer et échanger par direction, régler les divisions, agrandir une tuile",
      resize: 'Redimensionner une colonne en faisant glisser son bord',
      floating: 'Fenêtres flottantes',
      slideAnimation: 'Animation de glissement',
      dragWindow: 'Glisser une fenêtre vers une pile, des onglets ou un autre écran',
      nineWorkspaces: 'Neuf bureaux',
      everyMonitor: 'Chaque écran en mosaïque, avec ses propres bureaux',
      workspacesInUse: 'Bureaux utilisés, dans la barre des menus ou la zone de notification',
      workspaceNumbers: 'Numéro du bureau affiché à l’écran lors du changement',
      overview: 'Vue d’ensemble de tous les bureaux, filtrable en saisissant du texte',
      livePreviews: 'Aperçus en direct des fenêtres dans la vue d’ensemble',
      shortcuts: 'Un raccourci pour chaque action, tous modifiables',
      clashWarnings: 'Alertes en cas de conflit de raccourcis',
      swipe: 'Balayage à trois doigts le long de la bande',
      mouseWheel: 'Molette de la souris le long de la bande',
      systemShortcuts: 'Remplacement des raccourcis de fenêtres du système',
      gap: 'Espace entre les fenêtres',
      focusRingColor: 'Contour de focus de n’importe quelle couleur',
      focusRingThickness: 'Épaisseur du contour de focus',
      dimUnfocused: 'Atténuation des fenêtres inactives',
      appRules: 'Règles par app : flottante, mosaïque, largeur, bureau',
      reopenApps: 'Les apps se rouvrent là où vous les rangez',
      restoreWindows: 'Fenêtres remises en place à l’arrêt de la mosaïque ou à la fermeture de Glide',
      watchdog: 'Chien de garde en cas de plantage, qui remet les fenêtres en place',
      startAtLogin: 'Lancement à l’ouverture de session',
      autoUpdates: 'Mises à jour automatiques',
      runAsAdmin: 'Gestion des apps exécutées en tant qu’administrateur',
    },
    notes: {
      tiledLayout:
        'Sous Windows, Win+Ctrl+T bascule le bureau ; sur Mac, ⌃⌥T. En mosaïque, toutes les fenêtres tiennent à l’écran en spirale, sans défilement. Chaque bureau garde sa disposition, et Paramètres › Général › Disposition choisit celle des nouveaux.',
      workspacesInUse:
        'Sous Windows, l’icône de la zone de notification affiche une grille 3×3 des neuf bureaux, ceux qui sont utilisés étant allumés. Glide pour Mac affiche leurs numéros dans la barre des menus.',
      livePreviews: 'Sur Mac, avec l’autorisation d’enregistrement de l’écran ; sans elle, des icônes d’apps.',
      systemShortcuts: 'Sur Mac, les raccourcis ⌃⌥ de Glide n’entrent pas en conflit avec macOS.',
      runAsAdmin: 'Windows uniquement : redémarrez Glide en tant qu’administrateur.',
    },
  },

  privacy: {
    title: 'Politique de confidentialité | Glide',
    description: 'Comment Glide et ce site web traitent vos données : Glide n’en collecte aucune.',
    heading: 'Politique de confidentialité',
    updated: 'Dernière mise à jour le {date}',
    intro:
      'Glide ne collecte, ne stocke et ne partage aucune donnée personnelle. Votre disposition, vos raccourcis et vos réglages restent sur votre ordinateur.',
    responsible: {
      title: 'Responsable',
      bodyHtml:
        'Glide est un logiciel open source créé par <a href="{maintainerUrl}">{maintainer}</a> sous le nom {brand}. Pour toute question de confidentialité, ouvrez un ticket sur <a href="{macIssues}">GitHub</a>.',
    },
    apps: {
      title: 'Les apps Glide',
      stores: {
        title: 'Ce qu’elles stockent',
        bodyHtml:
          'Vos réglages, raccourcis, règles d’apps et la disposition de vos fenêtres sont enregistrés uniquement sur votre ordinateur : dans les préférences de macOS pour Glide sur Mac, et dans <span class="path">{appData}</span> sous Windows. Glide pour Windows tient aussi un journal dans <span class="path">{localAppData}</span>, qui reste sur votre PC.',
      },
      updates: {
        title: 'Recherche de mises à jour',
        bodyHtml:
          'Pour rester à jour, Glide demande à GitHub environ une fois par jour s’il existe une version plus récente, et la télécharge depuis GitHub lorsque vous l’installez. Cette requête contient la version de Glide et, comme toute requête, votre adresse IP ; rien d’autre n’est envoyé, et nous ne la recevons pas. GitHub la traite conformément à sa <a href="{githubPrivacy}">déclaration de confidentialité générale</a>. Désactivez la recherche dans les réglages de Glide, sous Mises à jour.',
      },
      doesNot: {
        title: 'Ce que les apps ne font pas',
        items: [
          'Elles ne collectent aucune donnée personnelle, donnée d’utilisation ni identifiant.',
          'Elles n’incluent aucun outil de statistiques, de publicité ni de suivi, quel qu’il soit.',
          'Elles ne lisent ni le contenu de vos fenêtres ni ce que vous saisissez. Glide surveille uniquement ses propres raccourcis.',
        ],
      },
      permissions: {
        title: 'Autorisations sur Mac',
        body: 'Glide a besoin d’un accès à l’accessibilité pour lire la position des fenêtres, les déplacer, les redimensionner et leur donner le focus. L’enregistrement de l’écran est facultatif et ne sert qu’à afficher des aperçus de fenêtres dans la vue d’ensemble ; les images ne quittent jamais votre Mac.',
      },
    },
    website: {
      title: 'Ce site web',
      bodyHtml:
        'Ce site web n’utilise ni cookies, ni outils de statistiques, ni traceurs, et ses polices sont servies depuis le même endroit que le site. Il est hébergé sur GitHub Pages, et les boutons de téléchargement demandent à GitHub la dernière version depuis votre navigateur. GitHub peut traiter votre adresse IP dans les journaux de ses serveurs pour des raisons de sécurité et pour diffuser le site, comme l’explique sa <a href="{githubPrivacy}">déclaration de confidentialité générale</a>.',
    },
    rights: {
      title: 'Vos droits',
      bodyHtml:
        'En vertu du RGPD, vous pouvez demander l’accès aux données personnelles que nous détenons à votre sujet, leur rectification ou leur suppression ; comme Glide ne nous en envoie aucune, nous n’en détenons normalement pas. Vous pouvez aussi déposer une réclamation auprès de l’autorité espagnole de protection des données, l’<a href="{aepd}">Agencia Española de Protección de Datos</a>.',
    },
  },
};
