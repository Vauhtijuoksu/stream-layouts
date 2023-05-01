import type { LayoutTheme } from "$lib/models/LayoutConf";

export const vj2023: LayoutTheme =
{
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
    --background-color: #ebebeb;
    --background: var(--background-color) url('/images/vj2023bg.png') repeat fixed top left;
    --background-secondary: #94dfe7 url('/images/vj2023bg.png') repeat fixed top left;
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
    --pill-background-1: #ffaa88;
    --pill-font-color-1: #004477;
    --pill-background-2: #88ffaa;
    --pill-font-color-2: #770044;
    --pill-fancy-background-1: conic-gradient(blue, turquoise, green, yellow, red, purple);
    --pill-fancy-background-2: conic-gradient(red, orange, yellow, violet, purple);
    --heart-rate-font-color: #ffffff;
  `
}
