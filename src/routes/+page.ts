import { themes } from "$lib/themes";

export function load() {
  return {
    themeNames: Object.keys(themes),
  }
}
