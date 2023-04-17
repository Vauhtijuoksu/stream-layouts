import { layouts } from "$lib/config";

export function load() {
    return {
        layoutNames: Object.keys(layouts)
    }
}