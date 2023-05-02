import type { LayoutTheme } from "$lib/models/LayoutConf";
import type { Breakpoint } from "$lib/utils/theme";
import { ThemeInterpolator } from "./ThemeInterpolator";

const vj2023base: LayoutTheme = {
  name: 'vj2023',
  sponsors: [
    {name: 'Bittium', img_url: '/sponsors/2023/Bittium-blue.jpg'},
    {name: 'Buutti', img_url: '/sponsors/2023/Buutti-dark.png'},
    {name: 'Codemate', img_url: '/sponsors/2023/Codemate-black.png'},
    {name: 'Digious', img_url: '/sponsors/2023/Digious-black.png'},
    {name: 'Fingersoft', img_url: '/sponsors/2023/Fingersoft-black.png'},
    {name: 'Jimms', img_url: '/sponsors/2023/Jimms-black.png'},
    {name: 'Mallaskellari', img_url: '/sponsors/2023/Make-black.png'},
    {name: 'Pullapirtti', img_url: '/sponsors/2023/Pullapirtti-red.png'},
    {name: 'RattoRadio', img_url: '/sponsors/2023/RR-orange.png'},
    {name: 'Saagasi', img_url: '/sponsors/2023/Saagasi-orange.png'},
    {name: 'Teekkarilupi', img_url: '/sponsors/2023/Lupi-dark.png'},
    {name: 'TEK', img_url: '/sponsors/2023/TEK-black.png'},
    {name: 'Vectorama', img_url: '/sponsors/2023/Vectorama-black.png'},
    {name: 'WishlistEMUUROM', img_url: '/sponsors/2023/WLE.png'},
  ],
  fonts: [
    {
      family: 'UbuntuTitling',
      url: '/fonts/UbuntuTitling-Bold.ttf',
    }
  ],
  borderWidth: 3,
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
    --font-color: #212126;
    --padding: 10px;
    --border-style: solid;
    --border-color: #212126;
    --border-width: 3px;
    --border-radius: 20px;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --background-color: #f1eeea;
    --background-color-2: #7acfd8;
    --background: var(--background-color) url('/images/vj2023bg.png') repeat fixed top left;
    --background-2: var(--background-color-2) url('/images/vj2023bg.png') repeat fixed top left;
    --setuptime-background: url('#vj2023');
    --font-size-lg: 32px;
    --font-size-md: 24px;
    --font-size-sm: 20px;
    --font-size-xs: 16px;
    --sponsors-font-size: 24px;
    --donation-bar-font-color: white;
    --donation-bar-padding: 0 0;
    --donation-bar-background: white;
    --donation-bar-border-style: var(--border-style);
    --donation-bar-border-color: var(--border-color);
    --donation-bar-border-width: var(--border-width);
    --donation-bar-border-radius: 20px;
    --donation-bar-font-size: 32px;
    --donation-bar-fill: #d4fffd;
    --donation-bar-current-bg: #eaff66;
    --donation-bar-current-font-color: var(--font-color);
    --donation-bar-goal-bg: #a5b624;
    --donation-bar-goal-font-color: var(--font-color);
    --donation-bar-info-font-size: 28px;
    --playername-background: #e6f5d8;
    --playername-font-size: 32px;
    --hole-border-stroke: #080808;
    --hole-border-stroke-width: 4;
    --timer-font-size: 54px;
    --timer-estimate-font-size: 24px;
    --timer-millis-font-size: 32px;
    --stopped-screen-timer-color: #2b84a5;
    --stopped-timer-color: #121b2c;
    --screen-overlay-item-stroke-color: #edf0ea;
    --counter-font-size: var(--timer-font-size);
    --pill-background-1: #fdc5d6;
    --pill-font-color-1: var(--font-color);
    --pill-background-2: #ffce8d;
    --pill-font-color-2: #var(--font-color);
    --pill-fancy-background-1: conic-gradient(blue, turquoise, green, yellow, red, purple);
    --pill-fancy-background-2: conic-gradient(red, orange, yellow, violet, purple);
    --heart-rate-font-color: #ffffff;
    --screen-overlay-item-text-shadow:
      -3px -3px 0 var(--screen-overlay-item-stroke-color),
      3px -3px 0 var(--screen-overlay-item-stroke-color),
      -3px 3px 0 var(--screen-overlay-item-stroke-color),
      3px 3px 0 var(--screen-overlay-item-stroke-color),
      -3px 0px 0 var(--screen-overlay-item-stroke-color),
      3px 0px 0 var(--screen-overlay-item-stroke-color),
      0px 3px 0 var(--screen-overlay-item-stroke-color),
      0px 3px 0 var(--screen-overlay-item-stroke-color);
    --screen-player-name-text-shadow: var(--screen-overlay-item-text-shadow);
    --screen-player-name-font-color: var(--screen-timer-color);
    --screen-player-name-font-size: var(--font-size-md);
  `
}

const vj2023light: LayoutTheme = {
  name: 'vj2023light',
  style: `
  `
}

const vj2023dark: LayoutTheme = {
  name: 'vj2023dark',
  style: `
    --background-color: #789daa;
    --background-color-2: #3ea0c5;
    --playername-background: #c1cdb6;
    --donation-bar-fill: #00a6c3;
    --donation-bar-background: #d2d4cf;
    --donation-bar-current-bg: #a5b624;
    --donation-bar-goal-bg: #727e15;
    --pill-background-1: #df5e6d;
    --pill-background-2: #ef9a2b;
  `
}

const breakpoints: Breakpoint<LayoutTheme>[] = [
  {
    key: 0,
    value: vj2023dark,
  },
  {
    key: 7,
    value: vj2023dark,
  },
  {
    key: 9,
    value: vj2023light,
  },
  {
    key: 20,
    value: vj2023light,
  },
  {
    key: 22,
    value: vj2023dark,
  }
];

const keyGenSeconds = () => {
  const d = new Date();
  return d.getSeconds() % 24;
}

const keyGenHours = () => {
  const d = new Date();
  return d.getHours();
}

export const vj2023 = new ThemeInterpolator(
  'vj2023',
  vj2023base,
  breakpoints,
  // keyGenSeconds, // use this to see theme changes in action
  keyGenHours,
);