import type { LayoutConf, LayoutField } from "$lib/models/LayoutConf";

let width = 1920;
let height = 1080;
let gameWidth = 1520;
let gameHeight = 855;
let donationBarHeight = 25;
let leftColWidth = width - gameWidth;
let bottomHeight = height - gameHeight;
let bottomRowHeight = bottomHeight - donationBarHeight;

let leftCol: LayoutField[] = [
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
    component: 'timer',
    params: {
      index: 0
    }
  }
]

let bottomRow: LayoutField[] = [
  {
    component: 'playername',
    params: {
      index: 0,
    }
  },
  {
    component: 'gamedata',
  }
]

export let sixteen_nine: LayoutConf = {
  name: 'sixteen_nine',
  width,
  height,
  contents: [
    {
      component: 'row',
      contents: [
        {
          component: 'col',
          params: {
            width: `${leftColWidth}px`,
            style: `
              padding-left: 5px;
              padding-right: 5px;
            `
          },
          contents: leftCol
        },
        {
          component: 'col',
          contents: [
            {
              component: 'row',
              params: { height: `${gameHeight}px` }
            },
            {
              component: 'row',
              params: {
                height: `${bottomRowHeight}px`,
              },
              contents: bottomRow
            }
          ]
        }
      ]
    }
  ],
  background: {
    holes: [
      {
        name: 'game',
        layout: {
          x: width - gameWidth,
          y: 0,
          width: gameWidth,
          height: gameHeight,
        },
        borders: {
          left: true,
          bottom: true,
        }
      },
      {
        name: 'webcam',
        layout: {
          x: 3,
          y: 800,
          width: leftColWidth - 3,
          height: 255,
        },
        borders: {
          top: true,
          right: true,
          bottom: true,
        }
      }
    ]
  }
};