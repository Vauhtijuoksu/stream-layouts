import type { LayoutTheme } from "$lib/models/LayoutConf";
import { writable, type Writable } from "svelte/store";

export let themestore: Writable<LayoutTheme> = writable({});
