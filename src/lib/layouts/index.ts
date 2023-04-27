import type { LayoutConf, LayoutTheme } from "$lib/models/LayoutConf";
import type { ComponentType } from "svelte";
import { four_three, four_three_race } from "./four_three";
import { poehina } from "./poehina";
import { setuptime } from "./setuptime";
import { sixteen_nine, sixteen_nine_bigcam, sixteen_nine_divided, sixteen_nine_race } from "./sixteen_nine";

import SixteenNine from '$lib/layouts/SixteenNine.svelte';
import SixteenNine4Way from '$lib/layouts/SixteenNine4Way.svelte';

export type LayoutGenerator = (theme: LayoutTheme) => LayoutConf;

export const layouts: {[key: string]: LayoutGenerator} = {
    four_three: four_three,
    four_three_race: four_three_race,
    sixteen_nine: sixteen_nine,
    sixteen_nine_divided: sixteen_nine_divided,
    sixteen_nine_bigcam: sixteen_nine_bigcam,
    sixteen_nine_race: sixteen_nine_race,
    setuptime: setuptime,
    poehina: poehina,
}

export const components: {[key: string]: ComponentType} = {
  SixteenNine,
  SixteenNine4Way,
}

  /* TODO: 4:3 x2 co-op  playernames x8 */
  /* TODO: 4:3 x2 race */

  /* TODO: Pokemoncustomlayout 1 */
  /* TODO: Pokemoncustomlayout 2 */
