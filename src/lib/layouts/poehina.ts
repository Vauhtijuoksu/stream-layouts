import type { LayoutConf, LayoutField } from "$lib/models/LayoutConf";

let leftCol: LayoutField[] = [
  {
    component: 'h1',
    params: {
      style: 'align-self: flex-start;'
    },
    contents: [
      {
        component: 'raw',
        raw: 'VAUHTIJUOKSU'
      }
    ]
  },
  {
    component: 'clock',
    name: 'clock',
    params: {
      displaySeconds: true
    },
  },
  {
    component: 'upcoming',
    params: {
      n: 6,
    },
  },
  {
    component: 'incentives',
    params: {
      n: 3,
      style: 'align-self: flex-end;',
    },
  },
];

export let poehina: LayoutConf = {
  name: 'poehina',
  width: 1920,
  height: 1080,
  contents: [
    {
      component: 'div',
      params: {
        class: 'row',
        style: 'height: 1050px',
      },
      contents: [
        {
          component: 'div',
          params: {
            class: "col",
            style: `
              width: 960px;
              padding-left: 15px;
              padding-right: 15px;
            `
          },
          contents: leftCol
        },
        {
          component: 'div',
          params: {
            class: 'col',
            style: 'width: 960px;',
          },
          contents: [
            {
              component: 'div',
              params: {
                class: 'row',
                style: 'height: 540px;',
              }
            },
            {
              component: 'div',
              params: {
                class: 'row',
                style: 'height: 510px;',
              }
            }
          ]
        }
      ]
    },
    {
      component: 'div',
      params: {
        class: 'row',
        style: 'height: 30px;',
      },
      contents: [
        {
          component: 'donation_bar',
        }
      ]
    }
  ],
  background: {
    holes: [
        {
          name: 'webcam',
          layout: {
            x: 960,
            y: 0,
            width: 960,
            height: 540,
          },
          borders: {
            left: true,
            bottom: true
          }
      },
    ]
  }
}
