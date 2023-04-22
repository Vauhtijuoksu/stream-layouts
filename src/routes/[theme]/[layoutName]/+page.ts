import { layouts } from "$lib/layouts";
import { theme } from "$lib/stores/ThemeStore";
import { themes } from "$lib/themes";

export function load({ params }) {
  let layoutGen = layouts[params.layoutName];
  let themeName: string = params.theme;
  let theme = themes[themeName];
  let layout = layoutGen(theme);

  return {
    layout,
    theme,
    layoutName: params.layoutName,
    themeName: params.theme,
  }
}
