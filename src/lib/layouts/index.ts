import type { LayoutConf, LayoutTheme } from "$lib/models/LayoutConf";
import { four_three } from "./four_three";
import { poehina } from "./poehina";
import { setuptime } from "./setuptime";
import { sixteen_nine, sixteen_nine_bigcam, sixteen_nine_divided, sixteen_nine_race } from "./sixteen_nine";

export type LayoutGenerator = (theme: LayoutTheme) => LayoutConf;

export const layouts: {[key: string]: LayoutGenerator} = {
    four_three: four_three,
    sixteen_nine: sixteen_nine,
    sixteen_nine_divided: sixteen_nine_divided,
    sixteen_nine_bigcam: sixteen_nine_bigcam,
    sixteen_nine_race: sixteen_nine_race,
    setuptime: setuptime,
    poehina: poehina,
}

  /* TODO: 4:3 x2 co-op  playernames x8 */
  /* TODO: 4:3 x2 race */

  /* TODO: Pokemoncustomlayout 1 */
  /* TODO: Pokemoncustomlayout 2 */
