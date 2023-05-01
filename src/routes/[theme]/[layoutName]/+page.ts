import { layouts, components } from "$lib/layouts";
import { defaultTheme, themes } from "$lib/themes";
import { themestore } from "$lib/stores/ThemeStore";

export function load({ params }) {
  let layoutGen = layouts[params.layoutName];
  let component = components[params.layoutName];
  let themeName: string = params.theme;
  let theme = themes[themeName] ?? defaultTheme;
  let layout;
  if (layoutGen) {
    layout = layoutGen(theme);
  }
  themestore.set(theme);

  return {
    component,
    layout,
    layoutName: params.layoutName,
  }
}
