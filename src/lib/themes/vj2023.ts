import type { LayoutTheme } from "$lib/models/LayoutConf";

export const vj2023: LayoutTheme =
{
  name: 'vj2023',
  fonts: [
    {
      family: 'UbuntuTitling',
      url: '/fonts/UbuntuTitling-Bold.ttf',
    }
  ],
  borderRadius: 20,
  style: `
    --font-family: UbuntuTitling;
    --font-color: black;
    --padding: 10px;
    --border-style: solid;
    --border-color: #080808;
    --border-width: 4px;
    --border-radius: 20px;
    --donation-bar-font-color: white;
    --donation-bar-padding: 0 0;
    --donation-bar-background: white;
    --donation-bar-border-style: var(--border-style);
    --donation-bar-border-color: var(--border-color);
    --donation-bar-border-width: var(--border-width);
    --donation-bar-border-radius: 15px;
    --donation-bar-font-size: 32px;
    --donation-bar-fill: #1b92b3;
    --donation-bar-current-bg: #ecff6e;
    --donation-bar-current-font-color: var(--font-color);
    --donation-bar-goal-bg: #ed87a6;
    --donation-bar-goal-font-color: var(--font-color);
    --background-color: url(#vj2023);
    --playername-background: #f3eded;
    --playername-font-size: 32px;
    --hole-border-stroke: #080808;
    --hole-border-stroke-width: 4;
  `
}
