// Japanese copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { Messages } from './en';

export const ja: Messages = {
  site: {
    skip: 'コンテンツへスキップ',
  },
  header: {
    mainNav: 'メイン',
    download: 'ダウンロード',
    platforms: 'MacとWindows',
    source: 'ソース',
    // Label of the language picker; the language names themselves are never translated.
    language: '言語',
  },
  footer: {
    madeBy: 'Quackbyteのアプリ',
    license: 'オープンソース、MITライセンス',
    privacy: 'プライバシーポリシー',
  },

  home: {
    title: 'Glide：MacとWindows向けのスクロール式ウィンドウマネージャー',
    description:
      'Glideは、ウィンドウを果てしなく続く横長のストリップ上に列として並べ、キーボードですべるように移動できるようにします。無料のオープンソースです。',
    hero: {
      title: 'ウィンドウを、一列に。Glide。',
      lede: 'Glideは、すべてのウィンドウを果てしなく続く横長のストリップ上の列に並べ、キーボードやトラックパッドで行き来できるようにします。ウィンドウが重なり合うことはもうありません。MacとWindowsに対応。',
      download: '無料でダウンロード',
      meta: 'オープンソース、MITライセンス。niriとPaperWMのスタイルを踏襲しています。',
    },
    how: {
      title: '仕組み',
      steps: [
        {
          title: 'ウィンドウごとに1列',
          body: '新しいウィンドウは、使っているウィンドウの右側に開きます。列は画面の高さいっぱいに広がり、幅は⅓、½、⅔、全幅から選べます。',
        },
        {
          title: 'ストリップをすべるように移動',
          body: '矢印キーで列から列へ移動すると、ストリップは、フォーカスのある列が見えるぶんだけスクロールします。',
        },
        {
          title: 'ドラッグせずに整理',
          body: 'Shiftを加えると、ウィンドウを持ったまま移動できます。ウィンドウを1つの列にスタックしたり、タブにしたり、別のワークスペースに送ったりできます。',
        },
      ],
    },
    keyboard: {
      title: 'キーボードのために',
      points: [
        {
          title: 'すべての操作を同じキーから',
          bodyHtml: 'すべての操作は、Macでは<kbd>{macMod}</kbd>、Windowsでは<kbd>{winKey}</kbd>から始まります。ショートカットはすべて変更できます。',
        },
        {
          title: '9つのワークスペースとオーバービュー',
          bodyHtml:
            'ワークスペースはそれぞれが独立したストリップです。<kbd>{macOverview}</kbd>または<kbd>{winOverview}</kbd>ですべてを表示でき、入力してウィンドウを探せます。',
        },
        {
          title: 'ウィンドウを見失いません',
          bodyHtml: 'Glideをオフにするか終了すると、すべてのウィンドウが画面に戻ります。Glideが異常終了した場合も、監視機能が同じように戻します。',
        },
      ],
    },
    downloadTitle: 'ダウンロード',
    platformsTitle: 'MacとWindows',
    open: {
      title: 'オープンソース',
      points: [
        {
          title: '読んで、変えられます',
          bodyHtml:
            'Glideは無料で、MITライセンスです。コードはGitHubで公開しています：<a href="{mac}">Mac</a>（Swift）と<a href="{windows}">Windows</a>（C#）。',
        },
        {
          title: '不具合はお知らせください',
          bodyHtml:
            'お使いのプラットフォームのリポジトリでissueを作成してください：<a href="{macIssues}">Mac</a>または<a href="{windowsIssues}">Windows</a>。',
        },
        {
          title: 'データはコンピューターの外に出ません',
          bodyHtml:
            'アカウント、解析、トラッキングは一切ありません。Glideが行うのは、新しいバージョンがあるかをGitHubに問い合わせることだけです。<a href="{privacy}">プライバシーポリシー</a>',
        },
      ],
    },
  },

  strip: {
    label: '画面の下を横方向にスライドする、ストリップ上に並んだウィンドウの列',
    swipe: 'または3本指でスワイプ',
  },

  downloads: {
    macNote: 'macOS 27以降、Apple silicon。Appleによる署名と公証済み。',
    macButton: 'Mac版をダウンロード',
    windowsNote: 'Windows 11、x64またはArm。管理者権限なしでインストールできます。',
    windowsWarning:
      'まだコード署名されていないため、初回はWindows SmartScreenが警告を表示することがあります。その場合は、「詳細情報」›「実行」を選択してください。',
    windowsX64: 'ダウンロード（x64）',
    windowsArm: 'ダウンロード（Arm）',
    source: 'ソースコード',
    releasesHtml:
      'どちらも自動的に最新の状態に保たれます。リリースノートとチェックサムを含む全リリースは、GitHubで公開しています：<a href="{macReleases}">Mac</a>、<a href="{windowsReleases}">Windows</a>。',
  },

  parity: {
    caption:
      'Mac版GlideとWindows版Glideは、同じエンジンと同じショートカット（Macでは{macMod}、Windowsでは{winKey}）を共有しています。ここでは、それぞれの現在の対応状況を示します。',
    feature: '機能',
    status: {
      yes: '対応',
      partial: '一部対応',
      planned: '予定',
      na: '不要',
    },
  },

  features: {
    groups: {
      tiling: 'タイル表示',
      workspaces: 'ワークスペースとモニター',
      input: '入力',
      appearance: '外観',
      behavior: '動作',
    },
    names: {
      columns: '果てしなく続く横長のストリップ上の列',
      stacks: 'スタック：1つの列に複数のウィンドウ',
      tabs: 'タブ付きの列',
      widths: '幅のプリセット、全幅、中央配置',
      resize: '端をドラッグして列の幅を変更',
      floating: 'フローティングウィンドウ',
      slideAnimation: 'スライドアニメーション',
      dragWindow: 'ウィンドウをドラッグしてスタック、タブ、別のモニターへ',
      nineWorkspaces: '9つのワークスペース',
      everyMonitor: 'すべてのモニターでタイル表示、ワークスペースもモニターごと',
      workspacesInUse: '使用中のワークスペースをメニューバーや通知領域に表示',
      workspaceNumbers: '切り替え時にワークスペース番号を画面に表示',
      overview: 'すべてのワークスペースのオーバービュー、入力で絞り込み',
      livePreviews: 'オーバービューでウィンドウのライブプレビュー',
      shortcuts: 'すべての操作にショートカット、すべて再割り当て可能',
      clashWarnings: 'ショートカットの競合を警告',
      swipe: '3本指のスワイプでストリップを移動',
      mouseWheel: 'マウスホイールでストリップを移動',
      systemShortcuts: 'システムのウィンドウ用ショートカットを置き換える',
      gap: 'ウィンドウの間隔',
      focusRingColor: '好きな色のフォーカスリング',
      focusRingThickness: 'フォーカスリングの太さ',
      dimUnfocused: 'フォーカスのないウィンドウを暗くする',
      appRules: 'アプリごとのルール：フローティング、タイル表示、幅、ワークスペース',
      reopenApps: 'アプリを前回の場所で再び開く',
      restoreWindows: 'タイル表示の停止時やGlideの終了時にウィンドウを元に戻す',
      watchdog: '異常終了時にウィンドウを元に戻す監視機能',
      startAtLogin: 'ログイン時に開く',
      autoUpdates: '自動アップデート',
      runAsAdmin: '管理者として実行中のアプリを管理',
    },
    notes: {
      workspacesInUse:
        'Windowsでは、通知領域のアイコンに9つのワークスペースを3×3のグリッドで表示し、使用中のものが点灯します。Mac版Glideでは、メニューバーに番号を表示します。',
      livePreviews: 'Macでは画面収録の許可が必要です。許可がない場合は、アプリのアイコンを表示します。',
      systemShortcuts: 'Macでは、Glideの⌃⌥ショートカットはmacOSと競合しません。',
      runAsAdmin: 'Windowsのみ：Glideを管理者として再起動してください。',
    },
  },

  privacy: {
    title: 'プライバシーポリシー | Glide',
    description: 'GlideとこのWebサイトによるデータの取り扱いについて：Glideはデータを一切収集しません。',
    heading: 'プライバシーポリシー',
    updated: '最終更新日：{date}',
    intro:
      'Glideは、個人データを収集、保存、共有することはありません。レイアウト、ショートカット、設定は、お使いのコンピューター上にとどまります。',
    responsible: {
      title: '責任者',
      bodyHtml:
        'Glideは、<a href="{maintainerUrl}">{maintainer}</a>が{brand}として開発したオープンソースソフトウェアです。プライバシーに関するご質問は、<a href="{macIssues}">GitHub</a>でissueを作成してください。',
    },
    apps: {
      title: 'Glideアプリ',
      stores: {
        title: '保存するデータ',
        bodyHtml:
          '設定、ショートカット、アプリのルール、ウィンドウのレイアウトは、お使いのコンピューター上にのみ保存されます。Mac版ではGlideのmacOS環境設定に、Windows版では<span class="path">{appData}</span>に保存されます。Windows版Glideは<span class="path">{localAppData}</span>にもログを保存しますが、これはお使いのPC上にとどまります。',
      },
      updates: {
        title: '更新の確認',
        bodyHtml:
          'Glideは最新の状態を保つため、1日に1回程度、新しいリリースがあるかどうかをGitHubに問い合わせ、インストール時にGitHubからダウンロードします。このリクエストには、Glideのバージョンと、通常のリクエストと同様にIPアドレスが含まれ、それ以外は送信されません。また、私たちがこれを受け取ることはありません。GitHubは、<a href="{githubPrivacy}">GitHub一般プライバシーに関する声明</a>に従ってこれを取り扱います。更新の確認は、Glideの設定の「アップデート」からオフにできます。',
      },
      doesNot: {
        title: 'アプリが行わないこと',
        items: [
          '個人データ、使用状況データ、識別子を収集しません。',
          '解析、広告、あらゆる種類のトラッキングを含みません。',
          'ウィンドウの内容や入力内容を読み取りません。Glideが監視するのは、自身のショートカットだけです。',
        ],
      },
      permissions: {
        title: 'Macでの許可',
        body: 'Glideは、ウィンドウの位置の取得と、ウィンドウの移動、サイズ変更、フォーカスのために、アクセシビリティの許可を必要とします。画面収録の許可は任意で、オーバービューのウィンドウプレビューを描画するためだけに使われます。画像がMacの外に出ることはありません。',
      },
    },
    website: {
      title: 'このWebサイト',
      bodyHtml:
        'このWebサイトは、Cookie、解析、トラッカーを使用しておらず、フォントもサイトと同じ場所から配信しています。サイトはGitHub Pagesでホストされており、ダウンロードボタンは、ブラウザーからGitHubに最新リリースを問い合わせます。GitHubは、セキュリティとサイトの配信のために、サーバーログでIPアドレスを処理することがあります。詳しくは<a href="{githubPrivacy}">GitHub一般プライバシーに関する声明</a>をご覧ください。',
    },
    rights: {
      title: 'お客様の権利',
      bodyHtml:
        'GDPRに基づき、私たちが保有するお客様の個人データについて、開示、訂正、削除を求めることができます。Glideは個人データを一切送信しないため、通常、私たちは何も保有していません。また、スペインのデータ保護機関である<a href="{aepd}">Agencia Española de Protección de Datos</a>に苦情を申し立てることもできます。',
    },
  },
};
