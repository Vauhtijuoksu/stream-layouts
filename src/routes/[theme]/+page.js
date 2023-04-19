import { layouts } from "$lib/layouts";
import { themes } from "$lib/themes";

export function load({ params }) {
  return {
    layoutNames: Object.keys(layouts),
    theme: themes[params.theme],
    themeName: params.theme,
  }
}
