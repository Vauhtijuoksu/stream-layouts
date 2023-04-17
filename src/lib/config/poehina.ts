import type { LayoutConf } from "$lib/models/LayoutConf";

export let poehina: LayoutConf = {
    name: 'poehina',
    width: 1920,
    height: 1080,
    fields: [
        {
            component: "clock",
            name: "clock",
            layout: {
                x: 3,
                y: 320,
                width: 314,
                height: 175,
            }
        },
        {
            component: "upcoming",
            data: {
                n: 6,
            },
            layout: {
                x: 3, 
                y: 123,
                width: 320,
                height: 120,
            }
        },
        {
            component: "donation_bar",
            layout: {
                x: 0,
                y: 1900,
                width: '1080px',
                height: '20px',
            }
        }
    ],
    holes: [
        {
            name: "webcam",
            layout: {
                x: 964,
                y: 4,
                width: 952,
                height: 532,
            },
            border: {
                stroke: "red",
                strokeWidth: "24px",
            }
        },
    ],
}
