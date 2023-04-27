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
    --font-color: black;
    --padding: 10px;
    --border-style: solid;
    --border-color: #080808;
    --border-width: 4px;
    --border-radius: 20px;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --background: #080808 url('/images/vj2023bg.png') repeat 500px fixed;
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
    --donation-bar-fill: #1b92b3;
    --donation-bar-current-bg: #ecff6e;
    --donation-bar-current-font-color: var(--font-color);
    --donation-bar-goal-bg: #ed87a6;
    --donation-bar-goal-font-color: var(--font-color);
    --playername-background: #f3eded;
    --playername-font-size: 32px;
    --hole-border-stroke: #080808;
    --hole-border-stroke-width: 4;
    --timer-font-size: 54px;
    --timer-estimate-font-size: 24px;
    --timer-millis-font-size: 32px;
    --counter-font-size: var(--timer-font-size);
  `
}
