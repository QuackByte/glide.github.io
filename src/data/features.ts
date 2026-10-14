// What Glide does on each platform: the one place to track parity between the macOS and Windows
// apps. The home page renders it as the "Mac & Windows" table.
//
// When a feature lands on one platform, add it here (as 'planned' on the other if it should
// follow). When it lands on the other, flip it to 'yes'.

/**
 * yes: works. partial: works with a difference worth reading the note for.
 * planned: missing for now, meant to come. na: doesn't apply to that platform.
 */
export type Status = 'yes' | 'partial' | 'planned' | 'na';

type Text = { en: string; es: string };

export interface Feature {
  name: Text;
  mac: Status;
  windows: Status;
  note?: Text;
}

export interface Group {
  name: Text;
  features: Feature[];
}

export const groups: Group[] = [
  {
    name: { en: 'Tiling', es: 'Mosaico' },
    features: [
      { name: { en: 'Columns on an endless horizontal strip', es: 'Columnas en una tira horizontal sin fin' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Stacks: several windows in one column', es: 'Pilas: varias ventanas en una columna' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Tabbed columns', es: 'Columnas con pestañas' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Width presets, full width and centering', es: 'Anchos predefinidos, ancho completo y centrado' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Resize a column by dragging its edge', es: 'Cambiar el ancho arrastrando el borde' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Floating windows', es: 'Ventanas flotantes' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Slide animation', es: 'Animación de deslizamiento' }, mac: 'yes', windows: 'yes' },
      {
        name: { en: 'Drag a window into a stack, tabs or another monitor', es: 'Arrastrar una ventana a una pila, a pestañas o a otro monitor' },
        mac: 'planned', windows: 'yes',
      },
    ],
  },
  {
    name: { en: 'Workspaces and monitors', es: 'Escritorios y monitores' },
    features: [
      { name: { en: 'Nine workspaces', es: 'Nueve escritorios' }, mac: 'yes', windows: 'yes' },
      {
        name: { en: 'Every monitor tiled, with its own workspaces', es: 'Mosaico en cada monitor, con sus propios escritorios' },
        mac: 'planned', windows: 'yes',
        note: { en: 'Glide for Mac tiles the main display only.', es: 'Glide para Mac solo organiza la pantalla principal.' },
      },
      {
        name: { en: 'Workspaces in use, in the menu bar or tray', es: 'Escritorios en uso, en la barra de menús o la bandeja' },
        mac: 'yes', windows: 'partial',
        note: { en: 'The Windows tray icon shows the active workspace only.', es: 'El icono de la bandeja de Windows solo muestra el escritorio activo.' },
      },
      {
        name: { en: 'Workspace numbers on screen when switching', es: 'Números de escritorio en pantalla al cambiar' },
        mac: 'yes', windows: 'partial',
        note: { en: 'Can’t be turned off on Windows yet.', es: 'Aún no se puede desactivar en Windows.' },
      },
      { name: { en: 'Overview of every workspace, filtered by typing', es: 'Vista general de todos los escritorios, filtrable al escribir' }, mac: 'yes', windows: 'yes' },
      {
        name: { en: 'Live window previews in the overview', es: 'Vistas previas en directo en la vista general' },
        mac: 'partial', windows: 'yes',
        note: { en: 'On Mac, with the Screen Recording permission; app icons without it.', es: 'En Mac, con el permiso de Grabación de pantalla; iconos de app sin él.' },
      },
    ],
  },
  {
    name: { en: 'Input', es: 'Entrada' },
    features: [
      { name: { en: 'A shortcut for every action, all rebindable', es: 'Un atajo para cada acción, todos reasignables' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Warnings for shortcuts that clash', es: 'Avisos de atajos que chocan' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Three-finger swipe along the strip', es: 'Deslizar con tres dedos por la tira' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Mouse wheel along the strip', es: 'Rueda del ratón por la tira' }, mac: 'planned', windows: 'yes' },
      {
        name: { en: 'Take over the system’s window shortcuts', es: 'Sustituir los atajos de ventanas del sistema' },
        mac: 'na', windows: 'yes',
        note: { en: 'On Mac, Glide’s ⌃⌥ shortcuts don’t clash with macOS.', es: 'En Mac, los atajos ⌃⌥ de Glide no chocan con macOS.' },
      },
    ],
  },
  {
    name: { en: 'Appearance', es: 'Apariencia' },
    features: [
      { name: { en: 'Gap between windows', es: 'Separación entre ventanas' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Focus ring in any color', es: 'Borde de foco de cualquier color' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Focus ring thickness', es: 'Grosor del borde de foco' }, mac: 'planned', windows: 'yes' },
      { name: { en: 'Dim unfocused windows', es: 'Atenuar las ventanas sin foco' }, mac: 'yes', windows: 'planned' },
    ],
  },
  {
    name: { en: 'Behavior', es: 'Comportamiento' },
    features: [
      { name: { en: 'Per-app rules: float, tile, width, workspace', es: 'Reglas por app: flotar, mosaico, ancho, escritorio' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Apps reopen where you keep them', es: 'Las apps se reabren donde las tienes' }, mac: 'planned', windows: 'yes' },
      { name: { en: 'Windows put back when tiling stops or Glide quits', es: 'Ventanas devueltas al parar el mosaico o salir' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Crash watchdog that puts windows back', es: 'Vigilante que recoloca las ventanas si Glide falla' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Start at login', es: 'Abrir al iniciar sesión' }, mac: 'yes', windows: 'yes' },
      { name: { en: 'Automatic updates', es: 'Actualizaciones automáticas' }, mac: 'yes', windows: 'yes' },
      {
        name: { en: 'Manage apps running as administrator', es: 'Gestionar apps que se ejecutan como administrador' },
        mac: 'na', windows: 'yes',
        note: { en: 'Windows only: restart Glide as administrator.', es: 'Solo Windows: reinicia Glide como administrador.' },
      },
    ],
  },
];
