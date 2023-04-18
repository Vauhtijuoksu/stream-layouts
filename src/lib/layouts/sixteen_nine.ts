import type { LayoutConf } from "$lib/models/LayoutConf";

export let sixteen_nine: LayoutConf = {
    name: 'sixteen_nine',
    width: 1920,
    height: 1080,
    fields: [
        {
            component: "clock",
            name: "sponsors",
            layout: {
                x: 3,
                y: 320,
                width: 314,
                height: 175,
            }
        },
        {
            component: "timer",
            name: "timer",
            params: {
                index: 0
            },
            layout: {
                x: 3,
                y: 123,
                width: 314,
                height: 175,
            }
        },
        {
            component: "playername",
            params: {
                index: 0
            },
            layout: {
                x: 3,
                y: 123,
                width: 314,
                height: 175,
            }
        },
        {
            component: "gamedata",
            layout: {
                x: 3, 
                y: 123,
                width: 320,
                height: 120,
            }
        }
    ],
    holes: [
        {
            name: "webcam",
            layout: {
                x: 3,
                y: 3,
                width: 314,
                height: 175,
            },
            border: {
                stroke: "red",
                strokeWidth: "24px",
            }
        },
        {
            name: "game1",
            layout: {
                x: 320,
                y: 0,
                width: 1600,
                height: 900,
            }
        },
    ],
}
