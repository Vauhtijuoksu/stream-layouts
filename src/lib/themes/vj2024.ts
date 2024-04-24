import type { LayoutTheme } from "$lib/models/LayoutConf";
import type { Breakpoint } from "$lib/utils/theme";
import { ThemeInterpolator } from "./ThemeInterpolator";

const vj2024base: LayoutTheme = {
  name: 'vj2024',
  sponsors: [
    {name: 'Codemate', img_url: '/sponsors/2023/Codemate-black.png'},
    {name: 'Fingersoft', img_url: '/sponsors/2023/Fingersoft-black.png'},
    {name: 'Pullapirtti', img_url: '/sponsors/2023/Pullapirtti-red.png'},
    {name: 'RattoRadio', img_url: '/sponsors/2023/RR-orange.png'},
    {name: 'Teekkarilupi', img_url: '/sponsors/2023/Lupi-dark.png'},
    {name: 'TEK', img_url: '/sponsors/2023/TEK-black.png'},
    {name: 'Vectorama', img_url: '/sponsors/2023/Vectorama-black.png'},
    {name: 'WishlistEMUUROM', img_url: '/sponsors/2023/WLE.png'},
  ],
  fonts: [
    {
      family: 'Solway',
      url: '/fonts/Solway-Regular.ttf',
    },
    {
      family: 'Amarante',
      url: '/fonts/Amarante-Regular.ttf',
    }
  ],
  borderWidth: 3,
  borderRadius: 20,
  imageFolder: 'vj2024',
  images: {
    logo: '/logos/vj2024/wide.png',
    logo169: '/logos/vj2024/169.png',
    logo43: '/logos/vj2024/43.png',
    logoExtraWide: '/logos/vj2024/wide.png',
    logoSetupTime: '/logos/vj2024/setuptime.png',
    logoSmall: '/logos/vj2024/triangle.png',
    logoWide: '/logos/vj2024/wide.png',
    defaultConsole: '/consoles/2024/default.png',
    timer: '/images/2024/timer.png',
    counter: [
      '/images/2024/skull.png',
      '/images/2024/star.png',
      '/images/2024/grave2.png',
      '/images/2024/coin.png',
      '/images/2024/heart.png',
    ],
    dividers: [
      '/images/2024/divider.png',
      '/images/2024/divider2.png',
      '/images/2024/divider3.png',
    ],
    divider: '/images/2024/divider.png',
    heart: '/images/2024/heartrate.png',
    pohinaDay: '/images/2024/pohinapaiva.png',
    pohinaNight: '/images/2024/pohinayo.png',
    DoublePoehina: '/images/2024/viuhtiPohina2.png',
    endOfIncentives: '/images/2024/viuhtiEnd.png',
  },
  style: `
    --darkblue: #152937;
    --darkgreen: #0b2d24;
    --darkred: #382218;
    --blue: #235576;
    --yellow: #f1d590;
    --grey: #718079;
    --naturalwhite: #d8ccaf;
    --green: #347868;
    --greyblue: #60838a;
    --orange: #de9b39;
    --blueishgrey: #abbdca;
    --white: #ebebdc;
    --lightgreen: #a1c665;
    --lightblue: #abcbbe;
    --red: #c2473b;
    
    
    --dayonly: default;
    --nightonly: none;
    
    --font-family: Solway;
    --font-color: var(--darkred);
    --text-shadow: 0px 0px 20px rgba(171, 189, 202, 0.50);
    --letter-spacing: -1.3px;
    --padding: 10px;
    --border-style: solid;
    --border-color: var(--darkred);
    --border-width: 3px;
    --border-radius: 16px;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --background-color: var(--naturalwhite);
    --background-color-2: var(--blueishgrey);
    --background: var(--background-color) url('/images/2024/daybg.png') repeat fixed top left;
    --background-2: var(--background-color-2) url('/images/2024/daybg.png') repeat fixed top left;
    --setuptime-background: url('#vj2024d');
    --font-size-lg: 32px;
    --font-size-md: 24px;
    --font-size-sm: 20px;
    --font-size-xs: 16px;
    --sponsors-font-size: 24px;
    --donation-bar-font-color: var(--font-color);
    --donation-bar-padding: 0 0;
    --donation-bar-background: var(--greyblue) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-border-style: var(--border-style);
    --donation-bar-border-color: var(--border-color);
    --donation-bar-border-width: var(--border-width);
    --donation-bar-border-radius: 20px;
    --donation-bar-font-size: 32px;
    --donation-bar-fill: var(--lightblue) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-current-bg: var(--yellow) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-current-font-color: var(--font-color);
    --donation-bar-goal-bg: var(--yellow) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-goal-font-color: var(--font-color);
    --donation-bar-info-font-size: 28px;
    --playername-background: var(--blue) url('/images/2024/boxbg.png') repeat fixed top left;
    --playername-font-size: 32px;
    --playername-font-color: var(--yellow);
    --playername-box-text-shadow: none;
    --hole-border-stroke: #080808;
    --hole-border-stroke-width: 4;
    --timer-font-size: 54px;
    --timer-estimate-font-size: 24px;
    --timer-millis-font-size: 32px;
    --stopped-screen-timer-color: var(--darkgreen);
    --stopped-timer-color: var(--darkgreen);
    --screen-overlay-item-stroke-color: #edf0ea;
    --counter-font-size: var(--timer-font-size);
    --pill-background-1: var(--naturalwhite);
    --pill-font-color-1: var(--font-color);
    --pill-background-2: var(--naturalwhite);
    --pill-font-color-2: #var(--font-color);
    --pill-fancy-background-1: conic-gradient(blue, turquoise, green, yellow, red, purple);
    --pill-fancy-background-2: conic-gradient(red, orange, yellow, violet, purple);
    --screen-overlay-item-text-shadow:
      -3px -3px 0 var(--screen-overlay-item-stroke-color),
      3px -3px 0 var(--screen-overlay-item-stroke-color),
      -3px 3px 0 var(--screen-overlay-item-stroke-color),
      3px 3px 0 var(--screen-overlay-item-stroke-color),
      -3px 0px 0 var(--screen-overlay-item-stroke-color),
      3px 0px 0 var(--screen-overlay-item-stroke-color),
      0px 3px 0 var(--screen-overlay-item-stroke-color),
      0px -3px 0 var(--screen-overlay-item-stroke-color);
    --screen-player-name-text-shadow: 
      -2px -2px 0 var(--screen-overlay-item-stroke-color),
      2px -2px 0 var(--screen-overlay-item-stroke-color),
      -2px 2px 0 var(--screen-overlay-item-stroke-color),
      2px 2px 0 var(--screen-overlay-item-stroke-color),
      -2px 0px 0 var(--screen-overlay-item-stroke-color),
      2px 0px 0 var(--screen-overlay-item-stroke-color),
      0px 2px 0 var(--screen-overlay-item-stroke-color),
      0px -2px 0 var(--screen-overlay-item-stroke-color);
    --screen-player-name-font-color: var(--screen-timer-color);
    --screen-player-name-font-size: var(--font-size-md);
    --donation-bar-text-shadow-color: var(--lightblue);
    --donation-bar-text-shadow: 
      -1px -1px 3px var(--donation-bar-text-shadow-color),
      1px -1px 3px var(--donation-bar-text-shadow-color),
      -1px 1px 3px var(--donation-bar-text-shadow-color),
      1px 1px 3px var(--donation-bar-text-shadow-color);
    --game-icon-filter: drop-shadow(1px 0px 0 #382218)
      drop-shadow(0px -1px 0 #382218)
      drop-shadow(-1px 0px 0 #382218)
      drop-shadow(0px 1px 0 #382218);
    --console-icon-filter: var(--game-icon-filter);
    --clock-icon-filter: var(--game-icon-filter);
    --counter-icon-filter: var(--game-icon-filter);
    --divider-filter: var(--game-icon-filter);
    --heartrate-icon-filter: var(--game-icon-filter);
    --heart-rate-font-color: var(--darkred);
    --heart-rate-text-shadow: 
      -1px -1px 0 var(--white),
      1px -1px 0 var(--white),
      -1px 1px 0 var(--white),
      1px 1px 0 var(--white),
      -1px 0px 0 var(--white),
      1px 0px 0 var(--white),
      0px 1px 0 var(--white),
      0px -1px 0 var(--white);
    --pohina-sponsor-right: 20px;
    --pohina-sponsor-bottom: 108px;
    --pohina-sponsor-width: 370px;
    --pohina-sponsor-height: 370px;
    --pohina-sponsor-border-radius: 185px;
    --pohina-sponsor-padding: 40px;
    --fourthree-gameicon-margin-left: -20px;
    --fourthree-gameicon-margin-right: 0px;
    --fourthree-gameicon-margin-bottom: 200px;
    --setup-time-game-icon-scale: 0.8;
    --divider-size: 40px;
  `
}

const vj2024light: LayoutTheme = {
  name: 'vj2024light',
  style: `
  `
}

const vj2024dark: LayoutTheme = {
  name: 'vj2024dark',
  sponsors: [
    {name: 'Codemate', img_url: '/sponsors/2023/Codemate-white.png'},
    {name: 'Fingersoft', img_url: '/sponsors/2023/Fingersoft-white.png'},
    {name: 'Pullapirtti', img_url: '/sponsors/2023/Pullapirtti-red.png'},
    {name: 'RattoRadio', img_url: '/sponsors/2023/RR-white.png'},
    {name: 'Teekkarilupi', img_url: '/sponsors/2023/Lupi-dark.png'},
    {name: 'TEK', img_url: '/sponsors/2023/TEK-white.png'},
    {name: 'Vectorama', img_url: '/sponsors/2023/Vectorama-white.png'},
    {name: 'WishlistEMUUROM', img_url: '/sponsors/2023/WLE-light.png'},
  ],
  style: `
    --dayonly: none;
    --nightonly: default;
  
    --setuptime-background: url('#vj2024n');
    --font-color: var(--orange);
    --text-shadow: 0px 0px 15px var(--darkblue);
    --playername-font-color: var(--orange);
    --donation-bar-text-shadow-color: var(--blue);
    --donation-bar-font-color: var(--naturalwhite);
    --donation-bar-goal-font-color: var(--yellow);
    --donation-bar-current-font-color: var(--yellow);
    --playername-background: var(--darkblue) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-current-bg: var(--red) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-goal-bg: var(--red) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-fill: var(--blue) url('/images/2024/boxbg.png') repeat fixed top left;
    --donation-bar-background: var(--darkblue) url('/images/2024/boxbg.png') repeat fixed top left;
    --background: var(--background-color) url('/images/2024/nightbg.png') repeat fixed top left;
    --background-2: var(--background-color-2) url('/images/2024/nightbg.png') repeat fixed top left;
    --stopped-screen-timer-color: var(--yellow);
    --stopped-timer-color: var(--yellow);
    --pill-background-1: var(--red);
    --pill-background-2: var(--greyblue);
  `
}

const breakpoints: Breakpoint<LayoutTheme>[] = [
  {
    key: 0,
    value: vj2024dark,
  },
  {
    key: 7,
    value: vj2024dark,
  },
  {
    key: 8,
    value: vj2024light, // day
  },
  {
    key: 20,
    value: vj2024light, // day
  },
  {
    key: 22,
    value: vj2024dark,
  }
];

const keyGenSeconds = () => {
  const d = Date.now();
  return (d / 1000) % 24;
}

const keyGenHours = () => {
  const d = new Date();
  return d.getHours();
}

export const vj2024 = new ThemeInterpolator(
  'vj2024',
  vj2024base,
  breakpoints,
  // keyGenSeconds, // use this to see theme changes in action
  keyGenHours,
);