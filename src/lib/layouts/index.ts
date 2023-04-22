import type { LayoutGenerator } from "./LayoutGenerator"
import { sixteen_nine } from "./LayoutGenerator";
import { poehina } from "./poehina";

export const layouts: {[key: string]: LayoutGenerator} = {
    sixteen_nine: sixteen_nine,
}
