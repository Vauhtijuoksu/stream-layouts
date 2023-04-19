import { layouts } from "$lib/layouts";
import { themes } from "$lib/themes";

export function load({ params }) {
  let layout = layouts[params.layoutName];
  let theme = themes[params.theme];

  return {
    layout,
    theme,
    layoutName: params.layoutName,
    themeName: params.theme,
  }
}
