import { layouts } from "$lib/config";

export function load({ params, url }) {
    let layoutName = params.layoutname;
    let layout = layouts[layoutName];
    return {
        layoutName,
        layout
    }
}