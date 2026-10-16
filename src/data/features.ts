// What Glide does on each platform: the one place to track parity between the macOS and Windows
// apps. The home page renders it as the "Mac & Windows" table.
//
// This file holds the ids and the statuses. The visible text (group names, feature names and
// notes) lives in the message files, src/i18n/<lang>.ts, under `features.groups`,
// `features.names` and `features.notes`, keyed by the ids below.
//
// When a feature lands on one platform, add it here (as 'planned' on the other if it should
// follow), then add its name to src/i18n/en.ts (and a note, if `note: true`). The other
// languages won't type-check until they have the new key too. When it lands on the other
// platform, flip it to 'yes'.

/**
 * yes: works. partial: works with a difference worth reading the note for.
 * planned: missing for now, meant to come. na: doesn't apply to that platform.
 */
export type Status = 'yes' | 'partial' | 'planned' | 'na';

interface FeatureDef {
  id: string;
  mac: Status;
  windows: Status;
  /** The feature has a note in the message files (`features.notes[id]`). */
  note?: true;
}

interface GroupDef {
  id: string;
  features: readonly FeatureDef[];
}

export const groups = [
  {
    id: 'tiling',
    features: [
      { id: 'columns', mac: 'yes', windows: 'yes' },
      { id: 'stacks', mac: 'yes', windows: 'yes' },
      { id: 'tabs', mac: 'yes', windows: 'yes' },
      { id: 'widths', mac: 'yes', windows: 'yes' },
      { id: 'resize', mac: 'yes', windows: 'yes' },
      { id: 'floating', mac: 'yes', windows: 'yes' },
      { id: 'slideAnimation', mac: 'yes', windows: 'yes' },
      { id: 'dragWindow', mac: 'yes', windows: 'yes' },
    ],
  },
  {
    id: 'workspaces',
    features: [
      { id: 'nineWorkspaces', mac: 'yes', windows: 'yes' },
      { id: 'everyMonitor', mac: 'yes', windows: 'yes' },
      { id: 'workspacesInUse', mac: 'yes', windows: 'yes', note: true },
      { id: 'workspaceNumbers', mac: 'yes', windows: 'yes' },
      { id: 'overview', mac: 'yes', windows: 'yes' },
      { id: 'livePreviews', mac: 'partial', windows: 'yes', note: true },
    ],
  },
  {
    id: 'input',
    features: [
      { id: 'shortcuts', mac: 'yes', windows: 'yes' },
      { id: 'clashWarnings', mac: 'yes', windows: 'yes' },
      { id: 'swipe', mac: 'yes', windows: 'yes' },
      { id: 'mouseWheel', mac: 'yes', windows: 'yes' },
      { id: 'systemShortcuts', mac: 'na', windows: 'yes', note: true },
    ],
  },
  {
    id: 'appearance',
    features: [
      { id: 'gap', mac: 'yes', windows: 'yes' },
      { id: 'focusRingColor', mac: 'yes', windows: 'yes' },
      { id: 'focusRingThickness', mac: 'yes', windows: 'yes' },
      { id: 'dimUnfocused', mac: 'yes', windows: 'yes' },
    ],
  },
  {
    id: 'behavior',
    features: [
      { id: 'appRules', mac: 'yes', windows: 'yes' },
      { id: 'reopenApps', mac: 'yes', windows: 'yes' },
      { id: 'restoreWindows', mac: 'yes', windows: 'yes' },
      { id: 'watchdog', mac: 'yes', windows: 'yes' },
      { id: 'startAtLogin', mac: 'yes', windows: 'yes' },
      { id: 'autoUpdates', mac: 'yes', windows: 'yes' },
      { id: 'runAsAdmin', mac: 'na', windows: 'yes', note: true },
    ],
  },
] as const satisfies readonly GroupDef[];

type AnyFeature = (typeof groups)[number]['features'][number];

export type GroupId = (typeof groups)[number]['id'];
export type FeatureId = AnyFeature['id'];
/** Features that carry a note. */
export type NotedFeatureId = Extract<AnyFeature, { note: true }>['id'];
