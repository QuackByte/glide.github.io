// Spanish (Spain) copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { Messages } from './en';

export const es: Messages = {
  site: {
    skip: 'Saltar al contenido',
  },
  header: {
    mainNav: 'Principal',
    download: 'Descargar',
    platforms: 'Mac y Windows',
    source: 'Código',
    language: 'Idioma',
  },
  footer: {
    madeBy: 'Una app de Quackbyte.',
    license: 'Código abierto, licencia MIT',
    privacy: 'Política de privacidad',
  },

  home: {
    title: 'Glide: gestor de ventanas con desplazamiento para Mac y Windows',
    description:
      'Glide coloca tus ventanas en columnas sobre una tira horizontal sin fin y te deslizas por ellas con el teclado, o las reparte todas en una pantalla. Gratis y de código abierto.',
    hero: {
      title: 'Tus ventanas, en fila. Deslízate.',
      lede: 'Glide coloca cada ventana en una columna de una tira horizontal sin fin y te mueve por ellas con el teclado o el trackpad. Sin ventanas encima de otras. Para Mac y Windows.',
      download: 'Descargar gratis',
      meta: 'Código abierto, licencia MIT. Al estilo de niri y PaperWM.',
    },
    how: {
      title: 'Cómo funciona',
      steps: [
        {
          title: 'Cada ventana, una columna',
          body: 'Las ventanas nuevas se abren a la derecha de la que usas. Las columnas ocupan toda la altura y tienen anchos fijos: ⅓, ½, ⅔ o completo.',
        },
        {
          title: 'Deslízate por la tira',
          body: 'Las flechas te llevan de columna en columna y la tira se desplaza lo justo para mostrar la que tiene el foco.',
        },
        {
          title: 'Ordena sin arrastrar',
          body: 'Añade Mayúsculas para llevarte la ventana. Apila ventanas en una columna, conviértelas en pestañas o envíalas a otro escritorio.',
        },
      ],
    },
    keyboard: {
      title: 'Hecho para el teclado',
      points: [
        {
          title: 'Un acorde para todo',
          bodyHtml: 'Todo empieza con <kbd>{macMod}</kbd> en Mac y <kbd>{winKey}</kbd> en Windows. Cada atajo se puede cambiar.',
        },
        {
          title: 'Nueve escritorios y una vista general',
          bodyHtml:
            'Cada escritorio es su propia tira. <kbd>{macOverview}</kbd> o <kbd>{winOverview}</kbd> los muestran todos; escribe para buscar una ventana.',
        },
        {
          title: 'Nunca pierdes una ventana',
          bodyHtml: 'Al desactivar Glide o salir, cada ventana vuelve a la pantalla. Si Glide falla, un vigilante hace lo mismo.',
        },
      ],
    },
    downloadTitle: 'Descargar',
    platformsTitle: 'Mac y Windows',
    open: {
      title: 'Código abierto',
      points: [
        {
          title: 'Léelo, cámbialo',
          bodyHtml:
            'Glide es gratis y de licencia MIT. El código está en GitHub: <a href="{mac}">Mac</a> (Swift) y <a href="{windows}">Windows</a> (C#).',
        },
        {
          title: 'Cuéntanos qué falla',
          bodyHtml:
            'Abre un issue en el repositorio de tu plataforma: <a href="{macIssues}">Mac</a> o <a href="{windowsIssues}">Windows</a>.',
        },
        {
          title: 'Nada sale de tu equipo',
          bodyHtml:
            'Sin cuentas, analíticas ni rastreo. Glide solo pregunta a GitHub si hay una versión nueva. <a href="{privacy}">Política de privacidad</a>',
        },
      ],
    },
  },

  strip: {
    label: 'Columnas de ventanas en una tira horizontal que se desliza bajo la pantalla',
    swipe: 'o desliza tres dedos',
  },

  downloads: {
    macNote: 'macOS 27 o posterior, Apple silicon. Firmada y notarizada por Apple.',
    macButton: 'Descargar para Mac',
    windowsNote: 'Windows 11, x64 o Arm. Se instala sin permisos de administrador.',
    windowsWarning:
      'Aún no está firmado con un certificado de código, así que Windows SmartScreen puede avisar la primera vez: elige Más información › Ejecutar de todas formas.',
    windowsX64: 'Descargar (x64)',
    windowsArm: 'Descargar (Arm)',
    source: 'Código fuente',
    releasesHtml:
      'Las dos se actualizan solas. Cada versión, con sus notas y sumas de verificación, está en GitHub: <a href="{macReleases}">Mac</a>, <a href="{windowsReleases}">Windows</a>.',
  },

  parity: {
    caption:
      'Glide para Mac y Glide para Windows comparten el mismo motor y los mismos atajos ({macMod} en Mac, {winKey} en Windows). Esto es lo que hace cada una hoy.',
    feature: 'Función',
    status: {
      yes: 'Sí',
      partial: 'En parte',
      planned: 'Previsto',
      na: 'No aplica',
    },
  },

  features: {
    groups: {
      tiling: 'Mosaico',
      workspaces: 'Escritorios y monitores',
      input: 'Entrada',
      appearance: 'Apariencia',
      behavior: 'Comportamiento',
    },
    names: {
      columns: 'Columnas en una tira horizontal sin fin',
      stacks: 'Pilas: varias ventanas en una columna',
      tabs: 'Columnas con pestañas',
      widths: 'Anchos predefinidos, ancho completo y centrado',
      tiledLayout: 'Disposición en mosaico o en tira desplazable, por escritorio',
      resize: 'Cambiar el ancho arrastrando el borde',
      floating: 'Ventanas flotantes',
      slideAnimation: 'Animación de deslizamiento',
      dragWindow: 'Arrastrar una ventana a una pila, a pestañas o a otro monitor',
      nineWorkspaces: 'Nueve escritorios',
      everyMonitor: 'Mosaico en cada monitor, con sus propios escritorios',
      workspacesInUse: 'Escritorios en uso, en la barra de menús o la bandeja',
      workspaceNumbers: 'Números de escritorio en pantalla al cambiar',
      overview: 'Vista general de todos los escritorios, filtrable al escribir',
      livePreviews: 'Vistas previas en directo en la vista general',
      shortcuts: 'Un atajo para cada acción, todos reasignables',
      clashWarnings: 'Avisos de atajos que chocan',
      swipe: 'Deslizar con tres dedos por la tira',
      mouseWheel: 'Rueda del ratón por la tira',
      systemShortcuts: 'Sustituir los atajos de ventanas del sistema',
      gap: 'Separación entre ventanas',
      focusRingColor: 'Borde de foco de cualquier color',
      focusRingThickness: 'Grosor del borde de foco',
      dimUnfocused: 'Atenuar las ventanas sin foco',
      appRules: 'Reglas por app: flotar, mosaico, ancho, escritorio',
      reopenApps: 'Las apps se reabren donde las tienes',
      restoreWindows: 'Ventanas devueltas al parar el mosaico o salir',
      watchdog: 'Vigilante que recoloca las ventanas si Glide falla',
      startAtLogin: 'Abrir al iniciar sesión',
      autoUpdates: 'Actualizaciones automáticas',
      runAsAdmin: 'Gestionar apps que se ejecutan como administrador',
    },
    notes: {
      tiledLayout:
        'En Windows, Win+Ctrl+T cambia el escritorio; en Mac, ⌃⌥T. En el mosaico todas las columnas comparten la pantalla, sin desplazarte. Cada escritorio conserva su disposición, y Configuración › General › Disposición define la de los nuevos.',
      workspacesInUse:
        'En Windows, el icono de la bandeja muestra una cuadrícula de 3×3 con los nueve escritorios, iluminando los que están en uso. Glide para Mac muestra sus números en la barra de menús.',
      livePreviews: 'En Mac, con el permiso de Grabación de pantalla; iconos de app sin él.',
      systemShortcuts: 'En Mac, los atajos ⌃⌥ de Glide no chocan con macOS.',
      runAsAdmin: 'Solo Windows: reinicia Glide como administrador.',
    },
  },

  privacy: {
    title: 'Política de privacidad | Glide',
    description: 'Cómo tratan tus datos Glide y esta web: Glide no recopila ninguno.',
    heading: 'Política de privacidad',
    updated: 'Última actualización: {date}',
    intro:
      'Glide no recopila, guarda ni comparte datos personales. Tu disposición, tus atajos y tus ajustes se quedan en tu equipo.',
    responsible: {
      title: 'Responsable',
      bodyHtml:
        'Glide es software de código abierto hecho por <a href="{maintainerUrl}">{maintainer}</a> como {brand}. Para cualquier duda de privacidad, abre un issue en <a href="{macIssues}">GitHub</a>.',
    },
    apps: {
      title: 'Las apps de Glide',
      stores: {
        title: 'Qué guardan',
        bodyHtml:
          'Tus ajustes, atajos, reglas de apps y disposición de ventanas se guardan solo en tu equipo: en las preferencias de macOS para Glide en Mac, y en <span class="path">{appData}</span> en Windows. Glide para Windows también guarda un registro en <span class="path">{localAppData}</span>, que no sale de tu PC.',
      },
      updates: {
        title: 'Comprobación de actualizaciones',
        bodyHtml:
          'Para mantenerse al día, Glide pregunta a GitHub más o menos una vez al día si hay una versión nueva, y la descarga de GitHub cuando la instalas. Esa petición lleva la versión de Glide y, como cualquier petición, tu dirección IP; no se envía nada más y nosotros no la recibimos. GitHub la trata según su <a href="{githubPrivacy}">declaración de privacidad</a>. Puedes desactivarla en los Ajustes de Glide, en Actualizaciones.',
      },
      doesNot: {
        title: 'Qué no hacen',
        items: [
          'No recopilan datos personales, de uso ni identificadores.',
          'No incluyen analíticas, publicidad ni rastreo de ningún tipo.',
          'No leen el contenido de tus ventanas ni lo que escribes. Glide solo atiende a sus propios atajos.',
        ],
      },
      permissions: {
        title: 'Permisos en Mac',
        body: 'Glide necesita el permiso de Accesibilidad para leer la posición de las ventanas y moverlas, cambiar su tamaño y darles el foco. Grabación de pantalla es opcional y solo sirve para las vistas previas de la vista general; las imágenes no salen de tu Mac.',
      },
    },
    website: {
      title: 'Esta web',
      bodyHtml:
        'Esta web no usa cookies, analíticas ni rastreadores, y sus fuentes se sirven desde el mismo sitio. Está alojada en GitHub Pages, y los botones de descarga preguntan a GitHub por la última versión desde tu navegador. GitHub puede tratar tu dirección IP en sus registros por seguridad y para servir la web, como explica su <a href="{githubPrivacy}">declaración de privacidad</a>.',
    },
    rights: {
      title: 'Tus derechos',
      bodyHtml:
        'Según el RGPD puedes pedir acceso, rectificación o supresión de los datos personales que tengamos sobre ti; como Glide no nos envía ninguno, normalmente no tenemos ninguno. También puedes reclamar ante la <a href="{aepd}">Agencia Española de Protección de Datos</a>.',
    },
  },
};
