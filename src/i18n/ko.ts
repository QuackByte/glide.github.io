// Korean copy. See en.ts for how the strings, `Html` keys and {tokens} work.

import type { FeatureId, GroupId, NotedFeatureId, Status } from '../data/features';
import type { Messages } from './en';

export const ko: Messages = {
  site: {
    skip: '본문으로 건너뛰기',
  },
  header: {
    mainNav: '메인',
    download: '다운로드',
    platforms: 'Mac 및 Windows',
    source: '소스',
    language: '언어',
  },
  footer: {
    madeBy: 'Quackbyte의 앱입니다.',
    license: '오픈 소스, MIT 라이선스',
    privacy: '개인정보 처리방침',
  },

  home: {
    title: 'Glide: Mac과 Windows를 위한 스크롤형 창 관리자',
    description:
      'Glide는 창을 끝없이 이어진 가로 스트립 위에 열로 배치하고, 키보드로 그 사이를 미끄러지듯 이동하게 해 주고, 원한다면 한 화면에 모두 타일로 배치합니다. 무료 오픈 소스입니다.',
    hero: {
      title: '창을 한 줄로. Glide.',
      lede: 'Glide는 모든 창을 끝없이 이어진 가로 스트립의 열에 놓고, 키보드나 트랙패드로 창 사이를 이동하게 해 줍니다. 창 위에 창이 겹쳐 쌓일 일이 없습니다. Mac과 Windows에서 사용할 수 있습니다.',
      download: '무료 다운로드',
      meta: '오픈 소스, MIT 라이선스. niri와 PaperWM 스타일.',
    },
    how: {
      title: '작동 방식',
      steps: [
        {
          title: '모든 창이 하나의 열',
          body: '새 창은 지금 사용 중인 창의 오른쪽에 열립니다. 열은 화면 높이를 가득 채우며 너비는 ⅓, ½, ⅔ 또는 전체 중에서 정할 수 있습니다.',
        },
        {
          title: '스트립을 따라 이동',
          body: '방향키로 열에서 열로 이동하면, 포커스가 있는 열이 보일 만큼만 스트립이 스크롤됩니다.',
        },
        {
          title: '드래그 없이 정리',
          body: 'Shift를 함께 누르면 창도 같이 이동합니다. 한 열에 창을 쌓거나, 탭으로 바꾸거나, 다른 워크스페이스로 보낼 수 있습니다.',
        },
      ],
    },
    keyboard: {
      title: '키보드를 위해 만들었습니다',
      points: [
        {
          title: '모든 것을 하나의 조합키로',
          bodyHtml: 'Mac에서는 <kbd>{macMod}</kbd>, Windows에서는 <kbd>{winKey}</kbd>로 모든 동작이 시작됩니다. 모든 단축키를 변경할 수 있습니다.',
        },
        {
          title: '워크스페이스 아홉 개와 개요',
          bodyHtml:
            '각 워크스페이스는 저마다의 스트립입니다. <kbd>{macOverview}</kbd> 또는 <kbd>{winOverview}</kbd>로 모두 한눈에 보고, 입력하여 창을 찾을 수 있습니다.',
        },
        {
          title: '창을 잃어버릴 일 없음',
          bodyHtml: 'Glide를 끄거나 종료하면 모든 창이 화면으로 돌아옵니다. Glide가 비정상 종료되어도 감시 프로그램이 똑같이 처리합니다.',
        },
      ],
    },
    downloadTitle: '다운로드',
    platformsTitle: 'Mac과 Windows',
    open: {
      title: '오픈 소스',
      points: [
        {
          title: '직접 읽고, 직접 고치세요',
          bodyHtml:
            'Glide는 무료이며 MIT 라이선스로 배포됩니다. 코드는 GitHub에 있습니다: <a href="{mac}">Mac</a>(Swift), <a href="{windows}">Windows</a>(C#).',
        },
        {
          title: '문제가 생기면 알려 주세요',
          bodyHtml:
            '사용하는 플랫폼의 저장소에 이슈를 등록해 주세요: <a href="{macIssues}">Mac</a> 또는 <a href="{windowsIssues}">Windows</a>.',
        },
        {
          title: '컴퓨터 밖으로 나가는 정보는 없습니다',
          bodyHtml:
            '계정도, 분석도, 추적도 없습니다. Glide는 GitHub에 새 버전이 있는지만 확인합니다. <a href="{privacy}">개인정보 처리방침</a>',
        },
      ],
    },
  },

  strip: {
    label: '화면 아래로 미끄러지듯 이동하는 가로 스트립 위의 창 열',
    swipe: '또는 세 손가락으로 쓸어넘기기',
  },

  downloads: {
    macNote: 'macOS 27 이상, Apple 실리콘. Apple의 서명 및 공증을 받았습니다.',
    macButton: 'Mac용 다운로드',
    windowsNote: 'Windows 11, x64 또는 Arm. 관리자 권한 없이 설치됩니다.',
    windowsWarning: '아직 코드 서명이 되어 있지 않아 처음에는 Windows SmartScreen이 경고할 수 있습니다. 추가 정보 › 실행을 선택하세요.',
    windowsX64: '다운로드(x64)',
    windowsArm: '다운로드(Arm)',
    source: '소스 코드',
    releasesHtml:
      '둘 다 스스로 최신 상태를 유지합니다. 릴리스 노트와 체크섬이 포함된 모든 릴리스는 GitHub에서 확인할 수 있습니다: <a href="{macReleases}">Mac</a>, <a href="{windowsReleases}">Windows</a>.',
  },

  parity: {
    caption:
      'Mac용 Glide와 Windows용 Glide는 같은 엔진과 같은 단축키를 사용합니다(Mac은 {macMod}, Windows는 {winKey}). 현재 각 버전이 지원하는 기능은 다음과 같습니다.',
    feature: '기능',
    status: {
      yes: '지원',
      partial: '일부 지원',
      planned: '예정',
      na: '필요 없음',
    } satisfies Record<Status, string>,
  },

  features: {
    groups: {
      tiling: '타일링',
      workspaces: '워크스페이스 및 모니터',
      input: '입력',
      appearance: '모양',
      behavior: '동작',
    } satisfies Record<GroupId, string>,
    names: {
      columns: '끝없는 가로 스트립 위의 열',
      stacks: '스택: 한 열에 여러 창',
      tabs: '탭 열',
      widths: '너비 프리셋, 전체 너비, 가운데 맞춤',
      tiledLayout: '타일 레이아웃 또는 스크롤 스트립, 워크스페이스별',
      resize: '가장자리를 드래그하여 열 크기 조절',
      floating: '플로팅 창',
      slideAnimation: '슬라이드 애니메이션',
      dragWindow: '창을 드래그하여 스택, 탭 또는 다른 모니터로 이동',
      nineWorkspaces: '워크스페이스 아홉 개',
      everyMonitor: '모든 모니터를 타일링하며 모니터마다 별도의 워크스페이스',
      workspacesInUse: '메뉴 막대 또는 알림 영역에 사용 중인 워크스페이스 표시',
      workspaceNumbers: '전환할 때 화면에 워크스페이스 번호 표시',
      overview: '모든 워크스페이스의 개요, 입력하여 필터링',
      livePreviews: '개요에서 실시간 창 미리보기',
      shortcuts: '모든 동작에 단축키 제공, 전부 변경 가능',
      clashWarnings: '충돌하는 단축키 경고',
      swipe: '세 손가락 쓸어넘기기로 스트립 이동',
      mouseWheel: '마우스 휠로 스트립 이동',
      systemShortcuts: '시스템의 창 단축키 대체',
      gap: '창 사이 간격',
      focusRingColor: '원하는 색상의 포커스 링',
      focusRingThickness: '포커스 링 두께',
      dimUnfocused: '포커스가 없는 창 흐리게',
      appRules: '앱별 규칙: 플로팅, 타일링, 너비, 워크스페이스',
      reopenApps: '앱이 놓아 둔 위치에서 다시 열림',
      restoreWindows: '타일링을 멈추거나 Glide를 종료하면 창을 원래대로 복원',
      watchdog: '비정상 종료 시 창을 복원하는 감시 프로그램',
      startAtLogin: '로그인 시 시작',
      autoUpdates: '자동 업데이트',
      runAsAdmin: '관리자 권한으로 실행되는 앱 관리',
    } satisfies Record<FeatureId, string>,
    notes: {
      tiledLayout:
        'Windows에서는 Win+Ctrl+T, Mac에서는 ⌃⌥T로 워크스페이스를 전환합니다. 타일 레이아웃에서는 모든 열이 화면을 나눠 쓰므로 스크롤이 필요 없습니다. 각 워크스페이스는 자신의 레이아웃을 유지하며, 설정 › 일반 › 레이아웃에서 새 워크스페이스의 시작 레이아웃을 고릅니다.',
      workspacesInUse:
        'Windows에서는 알림 영역 아이콘에 워크스페이스 아홉 개가 3×3 격자로 표시되며 사용 중인 워크스페이스에 불이 켜집니다. Mac용 Glide는 메뉴 막대에 워크스페이스 번호를 표시합니다.',
      livePreviews: 'Mac에서는 화면 기록 권한이 있을 때만 제공되며, 권한이 없으면 앱 아이콘이 표시됩니다.',
      systemShortcuts: 'Mac에서는 Glide의 ⌃⌥ 단축키가 macOS와 충돌하지 않습니다.',
      runAsAdmin: 'Windows 전용: Glide를 관리자 권한으로 다시 시작하세요.',
    } satisfies Record<NotedFeatureId, string>,
  },

  privacy: {
    title: '개인정보 처리방침 | Glide',
    description: 'Glide와 이 웹사이트가 데이터를 처리하는 방식: Glide는 아무것도 수집하지 않습니다.',
    heading: '개인정보 처리방침',
    updated: '최종 업데이트: {date}',
    intro:
      'Glide는 어떠한 개인 데이터도 수집, 저장 또는 공유하지 않습니다. 레이아웃, 단축키, 설정은 사용자의 컴퓨터에만 보관됩니다.',
    responsible: {
      title: '책임자',
      bodyHtml:
        'Glide는 <a href="{maintainerUrl}">{maintainer}</a>이(가) {brand}(으)로 만든 오픈 소스 소프트웨어입니다. 개인정보에 관한 문의는 <a href="{macIssues}">GitHub</a>에 이슈를 등록해 주세요.',
    },
    apps: {
      title: 'Glide 앱',
      stores: {
        title: '저장하는 정보',
        bodyHtml:
          '설정, 단축키, 앱 규칙, 창 배치는 사용자의 컴퓨터에만 저장됩니다. Mac용 Glide는 macOS의 환경설정에, Windows에서는 <span class="path">{appData}</span>에 저장됩니다. Windows용 Glide는 <span class="path">{localAppData}</span>에도 로그를 기록하며, 이 로그는 사용자의 PC에만 보관됩니다.',
      },
      updates: {
        title: '업데이트 확인',
        bodyHtml:
          'Glide는 최신 상태를 유지하기 위해 하루에 한 번 정도 GitHub에 새 릴리스가 있는지 문의하고, 설치할 때 GitHub에서 다운로드합니다. 이 요청에는 Glide의 버전과, 모든 요청에 포함되는 IP 주소만 담기며 그 밖의 정보는 전송되지 않고, 저희도 이를 받지 않습니다. GitHub는 <a href="{githubPrivacy}">GitHub 일반 개인정보 보호정책</a>에 따라 이를 처리합니다. 업데이트 확인은 Glide 설정의 업데이트에서 끌 수 있습니다.',
      },
      doesNot: {
        title: '앱이 하지 않는 일',
        items: [
          '개인 데이터, 사용 데이터, 식별자를 수집하지 않습니다.',
          '분석, 광고, 추적 기능이 어떤 형태로도 포함되어 있지 않습니다.',
          '창의 내용이나 입력하는 내용을 읽지 않습니다. Glide는 자체 단축키만 감지합니다.',
        ],
      },
      permissions: {
        title: 'Mac에서의 권한',
        body: 'Glide가 창 위치를 읽고, 창을 이동하고 크기를 조절하고 포커스를 맞추려면 손쉬운 사용 권한이 필요합니다. 화면 기록은 선택 사항이며 개요에서 창 미리보기를 그리는 데에만 사용됩니다. 이미지는 Mac 밖으로 나가지 않습니다.',
      },
    },
    website: {
      title: '이 웹사이트',
      bodyHtml:
        '이 웹사이트는 쿠키, 분석 도구, 추적기를 사용하지 않으며 글꼴도 사이트와 같은 곳에서 제공됩니다. GitHub Pages에서 호스팅되고, 다운로드 버튼은 사용자의 브라우저에서 GitHub에 최신 릴리스를 요청합니다. GitHub는 <a href="{githubPrivacy}">GitHub 일반 개인정보 보호정책</a>에 설명된 대로 보안과 사이트 제공을 위해 서버 로그에서 IP 주소를 처리할 수 있습니다.',
    },
    rights: {
      title: '사용자의 권리',
      bodyHtml:
        'GDPR에 따라 저희가 보유한 본인의 개인 데이터에 대해 열람, 정정 또는 삭제를 요청할 수 있습니다. Glide는 저희에게 아무것도 전송하지 않으므로 보유한 데이터는 일반적으로 없습니다. 스페인 개인정보 보호 당국인 <a href="{aepd}">Agencia Española de Protección de Datos</a>에 민원을 제기할 수도 있습니다.',
    },
  },
};
