import { layouts } from "$lib/layouts";

export function load() {
    return {
        layoutNames: Object.keys(layouts)
    }
}