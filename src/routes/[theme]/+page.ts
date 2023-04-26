import { layouts, components } from "$lib/layouts";
import { themes } from "$lib/themes";

export function load({ params }) {
  return {
    layoutNames: Object.keys(layouts).concat(Object.keys(components)),
    theme: themes[params.theme],
    themeName: params.theme,
  }
}
