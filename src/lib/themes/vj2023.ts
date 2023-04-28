import type { LayoutTheme } from "$lib/models/LayoutConf";
import type { Breakpoint } from "$lib/utils/theme";
import { ThemeInterpolator } from "./ThemeInterpolator";

const vj2023base: LayoutTheme = {
  name: 'vj2023',
  sponsors: [
    {name: 'Bittium', img_url: '/sponsors/Bittium.png'},
    {name: 'TEK', img_url: '/sponsors/TEK.png'},
  ],
  fonts: [
    {
      family: 'UbuntuTitling',
      url: '/fonts/UbuntuTitling-Bold.ttf',
    }
  ],
  borderWidth: 4,
  borderRadius: 20,
  images:{
    counter: [
      '/images/skull.png',
      '/images/lightning.png',
      '/images/diamond.png',
      '/images/coin.png',
      '/images/heart.png',
    ],
  },
  style: `
    --font-family: UbuntuTitling;
    --padding: 10px;
    --border-style: solid;
    --border-width: 4px;
    --border-radius: 20px;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --background-overlay: rgba(0,0,0,0);
    --background: url('/images/vj2023bg.png') repeat 500px fixed, var(--background-overlay);
    --setuptime-background: url('#vj2023');
    --font-size-lg: 32px;
    --font-size-md: 24px;
    --font-size-sm: 20px;
    --font-size-xs: 16px;
    --sponsors-font-size: 24px;
    --donation-bar-padding: 0 0;
    --donation-bar-border-style: var(--border-style);
    --donation-bar-border-color: var(--border-color);
    --donation-bar-border-width: var(--border-width);
    --donation-bar-border-radius: 20px;
    --donation-bar-font-size: 32px;
    --donation-bar-current-font-color: var(--font-color);
    --donation-bar-goal-font-color: var(--font-color);
    --playername-font-size: 32px;
    --hole-border-stroke-width: 4;
    --timer-font-size: 54px;
    --timer-estimate-font-size: 24px;
    --timer-millis-font-size: 32px;
    --counter-font-size: var(--timer-font-size);
  `
}

const vj2023light: LayoutTheme = {
  style: `
    --font-color: #000000;
    --border-color: #080808;
    --background-overlay: rgba(0, 0, 0, 0);
    --donation-bar-font-color: #000000;
    --donation-bar-background: #ffffff;
    --donation-bar-fill: #1b92b3;
    --donation-bar-current-bg: #ecff6e;
    --donation-bar-goal-bg: #ed87a6;
    --playername-background: #f3eded;
    --hole-border-stroke: #080808;
  `
}

const vj2023dark: LayoutTheme = {
  style: `
    --font-color: #ffffff;
    --border-color: #000000;
    --background-overlay: rgba(0, 0, 0, 128);
    --backdrop-filter: brightness(10%);
    --donation-bar-font-color: #ffffff;
    --donation-bar-background: #ffffff;
    --donation-bar-fill: #1b92b3;
    --donation-bar-current-bg: #421100;
    --donation-bar-goal-bg: #300d1f;
    --playername-background: #f3eded;
    --hole-border-stroke: #080808;
  `
}

const breakpoints: Breakpoint<LayoutTheme>[] = [
  {
    key: 0,
    value: vj2023light,
  },
  {
    key: 5,
    value: vj2023dark,
  }
];

const keyGen = () => {
  const d = new Date();
  return d.getSeconds() % 10;
}

export const vj2023 = new ThemeInterpolator(
  'vj2023',
  vj2023base,
  breakpoints,
  keyGen
);