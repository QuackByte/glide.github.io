// Simplified Chinese (mainland China) copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { Messages } from './en';

export const zh: Messages = {
  site: {
    skip: '跳到内容',
  },
  header: {
    mainNav: '主导航',
    download: '下载',
    platforms: 'Mac 和 Windows',
    source: '源代码',
    // Label of the language picker; the language names themselves are never translated.
    language: '语言',
  },
  footer: {
    madeBy: 'Quackbyte 出品的 App。',
    license: '开源，MIT 许可证',
    privacy: '隐私政策',
  },

  home: {
    title: 'Glide：适用于 Mac 和 Windows 的滚动式窗口管理器',
    description:
      'Glide 把窗口排成一条无限延伸的横向条带上的多个列，用键盘就能在其中滑动穿梭。免费且开源。',
    hero: {
      title: '窗口排成一行，轻松滑动。Glide。',
      lede: 'Glide 把每个窗口放进无限延伸的横向条带上的一列，让你用键盘或触控板在窗口间穿梭。再也没有窗口层层堆叠的烦恼。适用于 Mac 和 Windows。',
      download: '免费下载',
      meta: '开源，MIT 许可证。灵感来自 niri 和 PaperWM。',
    },
    how: {
      title: '工作原理',
      steps: [
        {
          title: '每个窗口都是一列',
          body: '新窗口会在你正在使用的窗口右侧打开。每一列都与屏幕等高，宽度可选固定值：⅓、½、⅔ 或全宽。',
        },
        {
          title: '沿着条带滑动',
          body: '用方向键在各列之间切换，条带只会滚动到刚好显示出聚焦的那一列。',
        },
        {
          title: '无需拖动即可整理',
          body: '加按 Shift 就能带着窗口一起移动。你可以把多个窗口堆叠在一列中、变成标签页，或发送到另一个工作区。',
        },
      ],
    },
    keyboard: {
      title: '为键盘而生',
      points: [
        {
          title: '一组按键，掌控一切',
          bodyHtml: '在 Mac 上以 <kbd>{macMod}</kbd> 开头，在 Windows 上以 <kbd>{winKey}</kbd> 开头。所有快捷键都可以更改。',
        },
        {
          title: '九个工作区和一个概览',
          bodyHtml:
            '每个工作区都有自己的条带。按 <kbd>{macOverview}</kbd> 或 <kbd>{winOverview}</kbd> 即可查看全部，输入文字就能找到窗口。',
        },
        {
          title: '窗口绝不丢失',
          bodyHtml: '关闭或退出 Glide 后，所有窗口都会回到屏幕上。即使 Glide 崩溃，看门狗程序也会做同样的事。',
        },
      ],
    },
    downloadTitle: '下载',
    platformsTitle: 'Mac 和 Windows',
    open: {
      title: '开源',
      points: [
        {
          title: '随意阅读，随意修改',
          bodyHtml:
            'Glide 免费，采用 MIT 许可证。代码托管在 GitHub 上：<a href="{mac}">Mac</a> 版（Swift）和 <a href="{windows}">Windows</a> 版（C#）。',
        },
        {
          title: '出了问题请告诉我们',
          bodyHtml:
            '请在对应平台的仓库中提交 issue：<a href="{macIssues}">Mac</a> 或 <a href="{windowsIssues}">Windows</a>。',
        },
        {
          title: '数据不会离开你的电脑',
          bodyHtml:
            '没有账户、数据分析或跟踪。Glide 只会向 GitHub 查询是否有新版本。<a href="{privacy}">隐私政策</a>',
        },
      ],
    },
  },

  strip: {
    label: '横向条带上的窗口列，在屏幕下方滑动',
    swipe: '或用三指轻扫',
  },

  downloads: {
    macNote: 'macOS 27 或更高版本，Apple 芯片。已由 Apple 签名并公证。',
    macButton: '下载 Mac 版',
    windowsNote: 'Windows 11，x64 或 Arm。无需管理员权限即可安装。',
    windowsWarning: '尚未进行代码签名，因此首次运行时 Windows SmartScreen 可能会发出警告：请选择“更多信息”›“仍要运行”。',
    windowsX64: '下载（x64）',
    windowsArm: '下载（Arm）',
    source: '源代码',
    releasesHtml:
      '两个版本都会自动保持最新。每个版本的更新说明和校验和都发布在 GitHub 上：<a href="{macReleases}">Mac</a>、<a href="{windowsReleases}">Windows</a>。',
  },

  parity: {
    caption:
      'Mac 版和 Windows 版 Glide 共用同一个引擎和同样的快捷键（Mac 上是 {macMod}，Windows 上是 {winKey}）。下表列出了两者目前各自支持的功能。',
    feature: '功能',
    status: {
      yes: '支持',
      partial: '部分支持',
      planned: '计划中',
      na: '无需支持',
    },
  },

  features: {
    groups: {
      tiling: '平铺',
      workspaces: '工作区和显示器',
      input: '输入',
      appearance: '外观',
      behavior: '行为',
    },
    names: {
      columns: '无限延伸的横向条带上的列',
      stacks: '堆叠：多个窗口放在同一列',
      tabs: '标签页列',
      widths: '预设宽度、全宽和居中',
      resize: '拖动列的边缘来调整大小',
      floating: '浮动窗口',
      slideAnimation: '滑动动画',
      dragWindow: '将窗口拖入堆叠、标签页或另一个显示器',
      nineWorkspaces: '九个工作区',
      everyMonitor: '每个显示器都有平铺和各自的工作区',
      workspacesInUse: '在菜单栏或通知区域中显示正在使用的工作区',
      workspaceNumbers: '切换时在屏幕上显示工作区编号',
      overview: '所有工作区的概览，输入文字即可筛选',
      livePreviews: '概览中的实时窗口预览',
      shortcuts: '每个操作都有快捷键，且均可重新设定',
      clashWarnings: '快捷键冲突提示',
      swipe: '三指轻扫沿条带滑动',
      mouseWheel: '用鼠标滚轮沿条带滑动',
      systemShortcuts: '接管系统的窗口快捷键',
      gap: '窗口间距',
      focusRingColor: '任意颜色的焦点环',
      focusRingThickness: '焦点环粗细',
      dimUnfocused: '调暗未聚焦的窗口',
      appRules: '按 App 设置规则：浮动、平铺、宽度、工作区',
      reopenApps: 'App 在你放置的位置重新打开',
      restoreWindows: '停止平铺或退出 Glide 时窗口复位',
      watchdog: '崩溃看门狗，让窗口复位',
      startAtLogin: '登录时启动',
      autoUpdates: '自动更新',
      runAsAdmin: '管理以管理员身份运行的 App',
    },
    notes: {
      workspacesInUse:
        '在 Windows 上，通知区域图标会以 3×3 网格显示九个工作区，正在使用的会亮起。Mac 版 Glide 则在菜单栏中显示它们的编号。',
      livePreviews: '在 Mac 上需要屏幕录制权限；没有该权限时显示 App 图标。',
      systemShortcuts: '在 Mac 上，Glide 的 ⌃⌥ 快捷键不会与 macOS 冲突。',
      runAsAdmin: '仅限 Windows：以管理员身份重新启动 Glide。',
    },
  },

  privacy: {
    title: '隐私政策 | Glide',
    description: 'Glide 和本网站如何处理你的数据：Glide 不收集任何数据。',
    heading: '隐私政策',
    updated: '最后更新于 {date}',
    intro:
      'Glide 不会收集、存储或分享任何个人数据。你的布局、快捷键和设置都保存在你的电脑上。',
    responsible: {
      title: '责任主体',
      bodyHtml:
        'Glide 是由 <a href="{maintainerUrl}">{maintainer}</a> 以 {brand} 名义开发的开源软件。如有任何隐私方面的问题，请在 <a href="{macIssues}">GitHub</a> 上提交 issue。',
    },
    apps: {
      title: 'Glide App',
      stores: {
        title: '它们存储什么',
        bodyHtml:
          '你的设置、快捷键、App 规则和窗口布局只保存在你的电脑上：Mac 版 Glide 保存在 macOS 的偏好设置中，Windows 版保存在 <span class="path">{appData}</span> 中。Windows 版 Glide 还会在 <span class="path">{localAppData}</span> 中保存一份日志，该日志只保留在你的电脑上。',
      },
      updates: {
        title: '更新检查',
        bodyHtml:
          '为保持自身为最新版本，Glide 大约每天向 GitHub 查询一次是否有新版本，并在你安装时从 GitHub 下载。该请求包含 Glide 的版本号，并且与任何请求一样会带有你的 IP 地址，除此之外不会发送任何其他内容，我们也不会收到这些信息。GitHub 会按照<a href="{githubPrivacy}">《GitHub 通用隐私声明》</a>处理该请求。你可以在 Glide 的“设置”中的“更新”下关闭此检查。',
      },
      doesNot: {
        title: '这些 App 不会做什么',
        items: [
          '它们不会收集个人数据、使用数据或标识符。',
          '它们不包含任何形式的数据分析、广告或跟踪。',
          '它们不会读取你窗口中的内容或你输入的内容。Glide 只监听自己的快捷键。',
        ],
      },
      permissions: {
        title: 'Mac 上的权限',
        body: 'Glide 需要辅助功能权限，以读取窗口位置，并移动窗口、调整窗口大小和让窗口获得焦点。屏幕录制权限是可选的，仅用于在概览中绘制窗口预览；这些图像不会离开你的 Mac。',
      },
    },
    website: {
      title: '本网站',
      bodyHtml:
        '本网站不使用 Cookie、数据分析或跟踪器，其字体也由网站自身提供。网站托管在 GitHub Pages 上，下载按钮会通过你的浏览器向 GitHub 请求最新版本。GitHub 可能会出于安全考虑并为了提供网站服务，在服务器日志中处理你的 IP 地址，详见<a href="{githubPrivacy}">《GitHub 通用隐私声明》</a>。',
    },
    rights: {
      title: '你的权利',
      bodyHtml:
        '根据 GDPR，你可以要求访问、更正或删除我们持有的关于你的个人数据；由于 Glide 不会向我们发送任何数据，我们通常不持有任何数据。你也可以向西班牙数据保护机构 <a href="{aepd}">Agencia Española de Protección de Datos</a> 投诉。',
    },
  },
};
