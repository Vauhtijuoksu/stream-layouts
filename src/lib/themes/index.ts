import type { LayoutTheme } from "$lib/models/LayoutConf";
import { vj2023 } from "./vj2023";
import { vj2024 } from "./vj2024";
import { vj2025 } from "./vj2025";

export const themes: {[key: string]: LayoutTheme} = {
    vj2023,
    vj2024,
    vj2025
};

export const defaultTheme = vj2023;
