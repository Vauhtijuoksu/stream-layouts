import type { LayoutConf, LayoutField } from "$lib/models/LayoutConf";

let width = 1920;
let height = 1080;
let gameWidth = 1520;
let gameHeight = 855;
let donationBarHeight = 50;
let leftColWidth = width - gameWidth;
let leftColHeight = gameHeight - 52;
let bottomHeight = height - gameHeight;
let bottomRowHeight = bottomHeight - donationBarHeight;

let leftCol: LayoutField = {
  component: 'div',
  name: 'leftCol',
  params: {
    class: 'abs col',
    style: `
      top: 0;
      left: 0;
      height: ${leftColHeight}px;
      width: ${leftColWidth}px;
      --sponsors-height: 200px;
      --sponsors-width: ${leftColWidth};
    `,
  },
  contents: [
    {
      component: 'h1',
      contents: [
        {
          component: 'raw',
          raw: 'Vauhtijuoksu'
        }
      ]
    },
    {
      component: 'div',
      params: {
        style: `
          box-sizing: content-box;
          flex-grow: 1;
        `
      },
      contents: [{
        component: 'sponsors',
        params: {
          sponsors: [
            '/sponsors/TEK.png',
            '/sponsors/Bittium.png'
          ],
        }
      }]
    },
    {
      component: 'div',
      params: {
        style: `
          margin-left: -20px;
          margin-right: -2px;
        `,
      },
      contents: [
        {
          component: 'playername',
          params: {
            index: 0,
          }
        }
      ]
    },
  ]
};

let bottomRow: LayoutField = {
  component: 'div',
  params: {
    class: 'abs row',
    style: `
      top: ${gameHeight}px;
      left: ${leftColWidth}px;
      right: 0;
      bottom: ${donationBarHeight}px;
      padding: 5px;
    `,
  },
  contents: [
    {
      component: 'timer',
      params: {
        index: 0
      }
    },
    {
      component: 'gamedata',
    },
  ]
};

let donationBar: LayoutField = {
  component: 'div',
  params: {
    class: 'abs',
    style: `
      left: 0;
      right: 0;
      bottom: 0;
      height: ${donationBarHeight}px;
    `,
  },
  contents: [
    {
      component: 'donation_bar'
    }
  ]
};

export let sixteen_nine: LayoutConf = {
  name: 'sixteen_nine',
  width,
  height,
  contents: [
    leftCol,
    bottomRow,
    donationBar,
  ],
  background: {
    holes: [
      {
        name: 'game',
        layout: {
          x: width - gameWidth,
          y: -20,
          width: gameWidth + 20,
          height: gameHeight + 20,
        },
      },
      {
        name: 'webcam',
        layout: {
          x: -20,
          y: 800,
          width: leftColWidth + 20,
          height: 232,
        },
      }
    ]
  }
};
