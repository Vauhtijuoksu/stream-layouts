export let sixteen_nine = {
    name: 'sixteen_nine',
    width: 1920,
    height: 1080,
    fields: [
        {
            component: "Clock",
            name: "sponsors",
            x: 3,
            y: 320,
            width: 314,
            height: 175,
        },
    ],
    holes: [
        {
            name: "webcam",
            x: 3,
            y: 3,
            width: 314,
            height: 175,
            border: {
                stroke: "red",
                strokeWidth: "24px",
            }
        },
        {
            name: "game1",
            x: 320,
            y: 0,
            width: 1600,
            height: 900,
        },
    ],
}
