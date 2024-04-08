import type { LayoutTheme } from "$lib/models/LayoutConf";
import { vj2023 } from "./vj2023";
import { vj2024 } from "./vj2024";

export const themes: {[key: string]: LayoutTheme} = {
    vj2023,
    vj2024
};

export const defaultTheme = vj2024;
