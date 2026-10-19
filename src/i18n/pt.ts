// Brazilian Portuguese copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { Messages } from './en';

export const pt: Messages = {
  site: {
    skip: 'Ir para o conteúdo',
  },
  header: {
    mainNav: 'Principal',
    download: 'Baixar',
    platforms: 'Mac e Windows',
    source: 'Código-fonte',
    // Label of the language picker; the language names themselves are never translated.
    language: 'Idioma',
  },
  footer: {
    madeBy: 'Um app da Quackbyte.',
    license: 'Código aberto, licença MIT',
    privacy: 'Política de privacidade',
  },

  home: {
    title: 'Glide: um gerenciador de janelas com rolagem para Mac e Windows',
    description:
      'O Glide organiza suas janelas em colunas numa faixa horizontal sem fim, pela qual você desliza com o teclado, ou as organiza todas em mosaico numa tela. Gratuito e de código aberto.',
    hero: {
      title: 'Suas janelas, em fila. Glide.',
      lede: 'O Glide coloca cada janela em uma coluna numa faixa horizontal sem fim e leva você de uma a outra com o teclado ou o trackpad. Chega de janelas empilhadas umas sobre as outras. Para Mac e Windows.',
      download: 'Baixar grátis',
      meta: 'Código aberto, licença MIT. No estilo do niri e do PaperWM.',
    },
    how: {
      title: 'Como funciona',
      steps: [
        {
          title: 'Cada janela é uma coluna',
          body: 'As janelas novas abrem à direita da que você está usando. As colunas ocupam a altura da tela em larguras fixas: ⅓, ½, ⅔ ou total.',
        },
        {
          title: 'Deslize pela faixa',
          body: 'As setas levam você de coluna em coluna, e a faixa rola só o necessário para mostrar a que está em foco.',
        },
        {
          title: 'Organize sem arrastar',
          body: 'Adicione Shift para levar a janela junto. Empilhe janelas em uma coluna, transforme-as em abas ou envie-as para outro espaço de trabalho.',
        },
      ],
    },
    keyboard: {
      title: 'Feito para o teclado',
      points: [
        {
          title: 'Um único atalho-base para tudo',
          bodyHtml: 'Tudo começa com <kbd>{macMod}</kbd> no Mac e <kbd>{winKey}</kbd> no Windows. Todos os atalhos podem ser alterados.',
        },
        {
          title: 'Nove espaços de trabalho e uma visão geral',
          bodyHtml:
            'Cada espaço de trabalho é uma faixa própria. <kbd>{macOverview}</kbd> ou <kbd>{winOverview}</kbd> mostra todos; digite para encontrar uma janela.',
        },
        {
          title: 'Nunca perca uma janela',
          bodyHtml: 'Desative o Glide ou saia dele e todas as janelas voltam para a tela. Se o Glide travar, um vigia faz o mesmo.',
        },
      ],
    },
    downloadTitle: 'Baixar',
    platformsTitle: 'Mac e Windows',
    open: {
      title: 'Código aberto',
      points: [
        {
          title: 'Leia, altere',
          bodyHtml:
            'O Glide é gratuito e tem licença MIT. O código está no GitHub: <a href="{mac}">Mac</a> (Swift) e <a href="{windows}">Windows</a> (C#).',
        },
        {
          title: 'Conte o que não funciona',
          bodyHtml:
            'Abra uma issue no repositório da sua plataforma: <a href="{macIssues}">Mac</a> ou <a href="{windowsIssues}">Windows</a>.',
        },
        {
          title: 'Nada sai do seu computador',
          bodyHtml:
            'Sem contas, análises nem rastreamento. O Glide só pergunta ao GitHub se há uma versão mais nova. <a href="{privacy}">Política de privacidade</a>',
        },
      ],
    },
  },

  strip: {
    label: 'Colunas de janelas numa faixa horizontal deslizando sob a tela',
    swipe: 'ou deslize com três dedos',
  },

  downloads: {
    macNote: 'macOS 27 ou posterior, Apple silicon. Assinado e notarizado pela Apple.',
    macButton: 'Baixar para Mac',
    windowsNote: 'Windows 11, x64 ou Arm. Instala sem direitos de administrador.',
    windowsWarning: 'Ainda sem assinatura de código, então o Windows SmartScreen pode avisar na primeira vez: escolha Mais informações › Executar assim mesmo.',
    windowsX64: 'Baixar (x64)',
    windowsArm: 'Baixar (Arm)',
    source: 'Código-fonte',
    releasesHtml:
      'Ambos se atualizam sozinhos. Todas as versões, com notas e checksums, estão no GitHub: <a href="{macReleases}">Mac</a>, <a href="{windowsReleases}">Windows</a>.',
  },

  parity: {
    caption:
      'O Glide para Mac e o Glide para Windows compartilham o mesmo motor e os mesmos atalhos ({macMod} no Mac, {winKey} no Windows). Isto é o que cada um faz hoje.',
    feature: 'Recurso',
    status: {
      yes: 'Sim',
      partial: 'Em parte',
      planned: 'Planejado',
      na: 'Desnecessário',
    },
  },

  features: {
    groups: {
      tiling: 'Mosaico',
      workspaces: 'Espaços de trabalho e monitores',
      input: 'Entrada',
      appearance: 'Aparência',
      behavior: 'Comportamento',
    },
    names: {
      columns: 'Colunas numa faixa horizontal sem fim',
      stacks: 'Pilhas: várias janelas em uma coluna',
      tabs: 'Colunas com abas',
      widths: 'Larguras predefinidas, largura total e centralização',
      tiledLayout: 'Layout em mosaico ou faixa com rolagem, por espaço de trabalho',
      resize: 'Redimensionar uma coluna arrastando a borda',
      floating: 'Janelas flutuantes',
      slideAnimation: 'Animação de deslize',
      dragWindow: 'Arrastar uma janela para uma pilha, abas ou outro monitor',
      nineWorkspaces: 'Nove espaços de trabalho',
      everyMonitor: 'Todos os monitores em mosaico, cada um com seus espaços de trabalho',
      workspacesInUse: 'Espaços de trabalho em uso, na barra de menus ou na bandeja',
      workspaceNumbers: 'Número do espaço de trabalho na tela ao alternar',
      overview: 'Visão geral de todos os espaços de trabalho, filtrada ao digitar',
      livePreviews: 'Pré-visualização ao vivo das janelas na visão geral',
      shortcuts: 'Um atalho para cada ação, todos personalizáveis',
      clashWarnings: 'Avisos para atalhos em conflito',
      swipe: 'Deslizar com três dedos pela faixa',
      mouseWheel: 'Roda do mouse pela faixa',
      systemShortcuts: 'Assumir os atalhos de janela do sistema',
      gap: 'Espaço entre as janelas',
      focusRingColor: 'Contorno de foco em qualquer cor',
      focusRingThickness: 'Espessura do contorno de foco',
      dimUnfocused: 'Escurecer as janelas sem foco',
      appRules: 'Regras por app: flutuar, mosaico, largura, espaço de trabalho',
      reopenApps: 'Os apps reabrem onde você os deixa',
      restoreWindows: 'Janelas restauradas quando o mosaico para ou o Glide sai',
      watchdog: 'Vigia contra travamentos que restaura as janelas',
      startAtLogin: 'Abrir ao fazer login',
      autoUpdates: 'Atualizações automáticas',
      runAsAdmin: 'Gerenciar apps executados como administrador',
    },
    notes: {
      tiledLayout:
        'No Windows, Win+Ctrl+T alterna o espaço de trabalho; no Mac, ⌃⌥T. No mosaico, todas as colunas dividem a tela, sem rolagem. Cada espaço de trabalho mantém o próprio layout, e Configurações › Geral › Layout define o dos novos.',
      workspacesInUse:
        'No Windows, o ícone da bandeja mostra uma grade 3×3 dos nove espaços de trabalho, com os que estão em uso acesos. O Glide para Mac mostra os números na barra de menus.',
      livePreviews: 'No Mac, com a permissão de Gravação de Tela; sem ela, aparecem os ícones dos apps.',
      systemShortcuts: 'No Mac, os atalhos ⌃⌥ do Glide não entram em conflito com o macOS.',
      runAsAdmin: 'Só no Windows: reinicie o Glide como administrador.',
    },
  },

  privacy: {
    title: 'Política de privacidade | Glide',
    description: 'Como o Glide e este site tratam seus dados: o Glide não coleta nenhum.',
    heading: 'Política de privacidade',
    updated: 'Última atualização: {date}',
    intro:
      'O Glide não coleta, armazena nem compartilha nenhum dado pessoal. Seu layout, seus atalhos e suas configurações ficam no seu computador.',
    responsible: {
      title: 'Responsável',
      bodyHtml:
        'O Glide é um software de código aberto feito por <a href="{maintainerUrl}">{maintainer}</a> como {brand}. Para qualquer dúvida sobre privacidade, abra uma issue no <a href="{macIssues}">GitHub</a>.',
    },
    apps: {
      title: 'Os apps do Glide',
      stores: {
        title: 'O que eles armazenam',
        bodyHtml:
          'Suas configurações, atalhos, regras de apps e o layout das janelas são salvos somente no seu computador: nas preferências do macOS para o Glide no Mac e em <span class="path">{appData}</span> no Windows. O Glide para Windows também guarda um registro em <span class="path">{localAppData}</span>, que fica no seu PC.',
      },
      updates: {
        title: 'Verificação de atualizações',
        bodyHtml:
          'Para se manter atualizado, o Glide pergunta ao GitHub cerca de uma vez por dia se há uma versão nova e a baixa do GitHub quando você a instala. Essa solicitação leva a versão do Glide e, como qualquer solicitação, seu endereço IP; nada mais é enviado, e nós não o recebemos. O GitHub a trata conforme a <a href="{githubPrivacy}">Declaração Geral de Privacidade do GitHub</a>. Desative a verificação nos Ajustes do Glide, em Atualizações.',
      },
      doesNot: {
        title: 'O que os apps não fazem',
        items: [
          'Não coletam dados pessoais, dados de uso nem identificadores.',
          'Não incluem análises, publicidade nem rastreamento de nenhum tipo.',
          'Não leem o conteúdo das suas janelas nem o que você digita. O Glide só observa os próprios atalhos.',
        ],
      },
      permissions: {
        title: 'Permissões no Mac',
        body: 'O Glide precisa da permissão de Acessibilidade para ler a posição das janelas e mover, redimensionar e dar foco a elas. A Gravação de Tela é opcional e serve apenas para desenhar as pré-visualizações das janelas na visão geral; as imagens nunca saem do seu Mac.',
      },
    },
    website: {
      title: 'Este site',
      bodyHtml:
        'Este site não usa cookies, análises nem rastreadores, e suas fontes são servidas do mesmo lugar que o site. Ele é hospedado no GitHub Pages, e os botões de download consultam o GitHub, pelo seu navegador, sobre a versão mais recente. O GitHub pode tratar seu endereço IP nos registros do servidor por segurança e para entregar o site, conforme descrito na <a href="{githubPrivacy}">Declaração Geral de Privacidade do GitHub</a>.',
    },
    rights: {
      title: 'Seus direitos',
      bodyHtml:
        'Segundo o GDPR, você pode solicitar acesso, correção ou exclusão dos dados pessoais que tenhamos sobre você; como o Glide não nos envia nenhum, normalmente não temos nenhum. Você também pode apresentar uma reclamação à autoridade espanhola de proteção de dados, a <a href="{aepd}">Agencia Española de Protección de Datos</a>.',
    },
  },
};
