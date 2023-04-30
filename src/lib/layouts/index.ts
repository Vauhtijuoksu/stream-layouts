import type { LayoutConf, LayoutTheme } from "$lib/models/LayoutConf";
import type { ComponentType } from "svelte";
import { four_three, four_three_race } from "./four_three";
import { sixteen_nine, sixteen_nine_bigcam, sixteen_nine_divided, sixteen_nine_race } from "./sixteen_nine";

import FourThree from './FourThree.svelte';
import Poehina from './Poehina.svelte';
import SetupTime from './SetupTime.svelte';
import SixteenNine from '$lib/layouts/SixteenNine.svelte';
import SixteenNine4Way from '$lib/layouts/SixteenNine4Way.svelte';

export type LayoutGenerator = (theme: LayoutTheme) => LayoutConf;

export const layouts: {[key: string]: LayoutGenerator} = {
    four_three_race: four_three_race,
    sixteen_nine_bigcam: sixteen_nine_bigcam,
    sixteen_nine_race: sixteen_nine_race,
}

export const components: {[key: string]: ComponentType} = {
  FourThree,
  Poehina,
  SetupTime,
  SixteenNine,
  SixteenNine4Way,
}

  /* TODO: 4:3 x2 co-op  playernames x8 */

  /* TODO: Pokemoncustomlayout 1 */
  /* TODO: Pokemoncustomlayout 2 */
