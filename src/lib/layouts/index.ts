import { sixteen_nine_divided, type LayoutGenerator, sixteen_nine_bigcam } from "./LayoutGenerator"
import { sixteen_nine } from "./LayoutGenerator";
import { poehina } from "./poehina";

export const layouts: {[key: string]: LayoutGenerator} = {
    sixteen_nine: sixteen_nine,
    sixteen_nine_divided: sixteen_nine_divided,
    sixteen_nine_bigcam: sixteen_nine_bigcam,
}
