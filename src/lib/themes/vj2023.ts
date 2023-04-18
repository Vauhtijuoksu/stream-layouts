import type { LayoutTheme } from "$lib/models/LayoutConf";

export const vj2023: LayoutTheme =
{
    fonts: [
        {
            family: 'UbuntuTitling',
            url: '/fonts/UbuntuTitling-Bold.ttf',
        }
    ],
    style: `
        --font-family: UbuntuTitling;
        --font-color: white;
        --donation-bar-padding: 0 10px;
        --donation-bar-background: black;
        --donation-bar-fill: green;
        --background-color: blue;
        --hole-border-stroke: orange;
        --hole-border-stroke-width: 2;
    `
}
