import type { LayoutTheme } from "$lib/models/LayoutConf";
import type { Breakpoint } from "$lib/utils/theme";
import { ThemeInterpolator } from "./ThemeInterpolator";

const vj2025base: LayoutTheme = {
  name: 'vj2025',
  sponsors: [
    {name: 'Mieli', img_url: '/sponsors/2025/mieli.png'},
    {name: 'azsh', img_url: '/sponsors/2025/azsh.png'},
    {name: 'Tiedot', img_url: '/sponsors/2025/tiedot.svg'},
    {name: 'pop', img_url: '/sponsors/2025/pop.png'},
    {name: 'RattoRadio', img_url: '/sponsors/2025/rattoradio.png'},
    {name: 'Vectorama', img_url: '/sponsors/2025/vectorama.png'},
  ],
  fonts: [
    {
      family: 'Berosong',
      url: '/fonts/Berosong-Regular.otf',
    },
    {
      family: 'Jaini',
      url: '/fonts/Jaini-Regular.ttf',
    }
  ],
  borderWidth: 0,
  borderRadius: 0,
  imageFolder: 'vj2025',
  images: {
    logo: '/logos/vj2025/wide.png',
    logo169: '/logos/vj2025/169.png',
    logo43: '/logos/vj2025/43.png',
    logoExtraWide: '/logos/vj2025/wide.png',
    logoSetupTime: '/logos/vj2025/setuptime.png',
    logoSmall: '/logos/vj2025/triangle.png',
    logoWide: '/logos/vj2025/wide.png',
    defaultConsole: '/consoles/2025/default.png',
    timer: '/images/2025/timer.png',
    counter: [
      '/images/2025/skull.png',
      '/images/2025/star.png',
      '/images/2025/coin.png',
      '/images/2025/heart.png',
    ],
    dividers: [
      '/images/2025/divider.png',
      '/images/2025/divider2.png',
      '/images/2025/divider3.png',
    ],
    divider: '/images/2025/divider.png',
    heart: '/images/2025/heartrate.png',
    pohinaDay: '/images/2025/pohinapaiva.png',
    pohinaNight: '/images/2025/pohinayo.png',
    DoublePoehina: '/images/2025/viuhtiPohina2.png',
    endOfIncentives: '/images/2025/viuhtiEnd.png',
  },
  style: `
  
  --black: #000000;
  --blue0: #030712;
  --blue1: #0e223b;
  --green0: #0b1e25;
  --green1: #1f3c42;
  --green2: #5ca6a5;
  --brown0: #937648;
  --brown1: #b3a48a;
  --brown2: #cacca4;
  --red0: #4a0c0d;
  --red1: #af1332;
  --red2: #ea2727;
  --gray0: #3c4652;
  --gray1: #797e94;
  --gray2: #bccdd7;
  --gray3: #e2e1e7;
  --white: #FFFFFF;
  --donabarbg: #270506;
  
    --darkblue: #00FF00;
    --darkgreen: #00FF00;
    --darkred: #00FF00;
    --blue: #00FF00;
    --yellow: #00FF00;
    --grey: #00FF00;
    --naturalwhite: #00FF00;
    --green: #00FF00;
    --greyblue: #00FF00;
    --orange: #00FF00;
    --blueishgrey: #00FF00;
    --lightgreen: #00FF00;
    --lightblue: #00FF00;
    --red: #00FF00;
    --FIXME: #0000FF;
    
    
    --dayonly: default;
    --nightonly: none;
    
    --basic-font: Jaini;
    --header-font: Berosong;
    --font-family: Jaini;
    --font-color: var(--white);
    
    --text-shadow: none;
    --text-shadow2: 0px 0px 20px rgba(171, 189, 202, 0.60);
    --letter-spacing: default;
    --spaced-lettering: default;
    --padding: 10px;
    --border-style: solid;
    --border-color: var(--black);
    --border-width: 0px;
    --border-radius: 0px;
    --camera-game-separation: 3px;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --background-color: var(--black);
    --background-color-2: var(--black);
    --background: var(--black);
    --background-2: var(--black);
    --setuptime-background: var(--black);
    --font-size-lg: 32px;
    --font-size-md: 24px;
    --font-size-sm: 20px;
    --font-size-xs: 16px;
    --sponsors-font-size: 46px;
    --fourthree-sponsors-font-size: 40px;
    --donation-bar-font-color: var(--font-color);
    --donation-bar-padding: 0 0;
    --donation-bar-left-padding-extra: 15px;
    --donation-bar-background: var(--donabarbg);
    --donation-bar-border-style: var(--border-style);
    --donation-bar-border-color: var(--border-color);
    --donation-bar-border-width: var(--border-width);
    --donation-bar-border-radius: 0;
    --donation-bar-font-size: 32px;
    --donation-bar-fill: var(--green1);
    --donation-bar-current-bg: var(--red0);
    --donation-bar-current-font-color: var(--font-color);
    --donation-bar-goal-bg: var(--red0);
    --donation-bar-goal-font-color: var(--font-color);
    --donation-bar-info-font-size: 28px;
    --playername-background: var(--black);
    --playername-font-size: 32px;
    --player-name-header-font-size: 36px;
    --playername-font-color: var(--font-color);
    --playername-box-text-shadow: none;
    --playername-padding: 3px;
    --hole-border-stroke: #080808;
    --hole-border-stroke-width: 4;
    --timer-font-size: 64px;
    --timer-estimate-font-size: 26px;
    --timer-estimate-margin: -12px;
    --timer-millis-font-size: 36px;
    --stopped-screen-timer-color: var(--green2);
    --stopped-timer-color: var(--green2);
    --timer-overtime-color: var(--red2);
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
    --screen-player-name-text-shadow: none;
    --screen-player-name-text-shadow2: 
      -2px -2px 0 var(--screen-overlay-item-stroke-color),
      2px -2px 0 var(--screen-overlay-item-stroke-color),
      -2px 2px 0 var(--screen-overlay-item-stroke-color),
      2px 2px 0 var(--screen-overlay-item-stroke-color),
      -2px 0px 0 var(--screen-overlay-item-stroke-color),
      2px 0px 0 var(--screen-overlay-item-stroke-color),
      0px 2px 0 var(--screen-overlay-item-stroke-color),
      0px -2px 0 var(--screen-overlay-item-stroke-color),
      1px -2px 0 var(--screen-overlay-item-stroke-color),
      -1px -2px 0 var(--screen-overlay-item-stroke-color),
      1px 2px 0 var(--screen-overlay-item-stroke-color),
      -1px 2px 0 var(--screen-overlay-item-stroke-color),
      -2px 1px 0 var(--screen-overlay-item-stroke-color),
      -2px -1px 0 var(--screen-overlay-item-stroke-color),
      2px 1px 0 var(--screen-overlay-item-stroke-color),
      2px -1px 0 var(--screen-overlay-item-stroke-color);
    --screen-player-name-font-color: var(--screen-timer-color);
    --screen-player-name-font-size: var(--font-size-md);
    --donation-bar-text-shadow-color: var(--black);
    --donation-bar-text-shadow: none;
    --donation-bar-text-shadow2: 
      -1px -1px 3px var(--donation-bar-text-shadow-color),
      1px -1px 3px var(--donation-bar-text-shadow-color),
      -1px 1px 3px var(--donation-bar-text-shadow-color),
      1px 1px 3px var(--donation-bar-text-shadow-color);
    --game-icon-filter: none;
    --game-icon-filter2: drop-shadow(1px 0px 0 #382218)
      drop-shadow(0px -1px 0 #382218)
      drop-shadow(-1px 0px 0 #382218)
      drop-shadow(0px 1px 0 #382218);
    --game-icon-max-height: 155px;
    --game-icon-max-width: 200px;
    --game-icon-padding: 10px;
    --console-icon-filter: drop-shadow(0px 0px 6px #4a0c0d) drop-shadow(0px 0px 10px #4a0c0d) drop-shadow(0px 0px 16px #4a0c0d);
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
    --setup-time-game-icon-scale: 80%;
    --divider-size: 40px;
  `
}

const vj2025light: LayoutTheme = {
  name: 'vj2025light',
  style: `
  `
}

const vj2025dark: LayoutTheme = {
  name: 'vj2025dark',
  style: `
    --dayonly: none;
    --nightonly: default;
  
    --setuptime-background: url('#vj2025n');
    --screen-overlay-item-stroke-color: var(--darkred);
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
    value: vj2025dark,
  },
  {
    key: 7,
    value: vj2025dark,
  },
  {
    key: 8,
    value: vj2025light, // day
  },
  {
    key: 20,
    value: vj2025light, // day
  },
  {
    key: 22,
    value: vj2025dark,
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

export const vj2025 = new ThemeInterpolator(
  'vj2025',
  vj2025base,
  breakpoints,
  // keyGenSeconds, // use this to see theme changes in action
  keyGenHours,
);