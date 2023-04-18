import { layouts } from "$lib/layouts";
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