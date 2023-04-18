import { themes } from "$lib/themes";

export function load({ params }) {
    return {
        themeNames: Object.keys(themes),
        layoutName: params.layoutname,
    }
}