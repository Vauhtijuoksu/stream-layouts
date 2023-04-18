import { layouts } from "$lib/config";
import { themes } from "$lib/themes";

export function load({ params }) {
    let layout = layouts[params.layoutname];
    let theme = themes[params.theme];

    return {
        layout,
        theme,
        layoutName: params.layoutname,
        themeName: params.theme,
    }
}