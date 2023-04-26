import { layouts } from "$lib/layouts";
import { themes } from "$lib/themes";
import { themestore } from "$lib/stores/ThemeStore";

export function load({ params }) {
  let layoutGen = layouts[params.layoutName];
  let themeName: string = params.theme;
  let theme = themes[themeName];
  let layout = layoutGen(theme);
  themestore.set(theme);

  return {
    layout,
    theme,
    layoutName: params.layoutName,
    themeName: params.theme,
  }
}
