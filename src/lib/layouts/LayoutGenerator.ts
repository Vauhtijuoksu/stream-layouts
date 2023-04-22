import type { LayoutBackground, LayoutConf, LayoutField, LayoutHole, LayoutTheme } from "$lib/models/LayoutConf";

export type LayoutGenerator = (theme: LayoutTheme) => LayoutConf;

function style_string(fields: {[key: string]: any}, unit = ''): string {
  return Object.entries(fields)
    .map(([key, value]) => value ? `${key}: ${value}${unit};` : '')
    .join('');
}

function abs_field(
    name: string,
    component: string,
    orientation: 'col'|'row'|'',
    x: number,
    y: number,
    width: number,
    height: number,
    extraStyle: string = '',
  ): LayoutField {

    let style = style_string({top: y, left: x, width, height}, 'px') + extraStyle;

    return {
      name: name,
      component,
      params: {
        class: `abs ${orientation}`,
        style,
      }
    }
}

function wrap(child: LayoutField, parentComponent = 'div', parentParams?: {[key: string]: any}): LayoutField {
  return {
    component: parentComponent,
    contents: [child],
    params: parentParams,
  }
}

function sponsors(sponsor_images: string[]): LayoutField {
  return {
    component: 'sponsors',
    params: {
      sponsors: sponsor_images,
    },
  };
}

function player(index = 0): LayoutField {
  return {
    component: 'playername',
    params: {
      index
    },
  };
}

function timer(index = 0): LayoutField {
  return {
    component: 'timer',
    params: {
      index
    },
  };
}

function gamedata(): LayoutField {
  return {
    component: 'gamedata',
  };
}

function donation_bar(x: number, y: number, width: number, height: number): LayoutField {
  const wrapper = abs_field(
    'donationBarWrapper', 'div', '',
    x, y, width, height,
  );
  wrapper.contents = [{
    component: 'donation_bar',
  }];
  return wrapper;
}

function game_layout(
    width: number = 1920,
    height: number = 1080,
    gameWidth: number,
    gameHeight: number,
    donationBarHeight: number,
    borderWidth = 0,
    borderRadius = 0,
    donationBarWidth?: number,
    cameraWidth?: number,
    cameraHeight?: number,
  ) {
    const leftColWidth = width - gameWidth;
    cameraWidth ??= leftColWidth;
    cameraHeight ??= height - gameHeight;
    const leftColHeight = height - donationBarHeight - cameraHeight;
    const bottomBarWidth = width - cameraWidth;
    const bottomBarHeight = height - gameHeight - donationBarHeight;
    const bottomBarX = cameraWidth;
    const bottomBarY = gameHeight;
    const donationBarX = 0;
    const donationBarY = height - donationBarHeight;
    donationBarWidth ??= width;

    const leftCol = abs_field(
      'leftCol', 'div', 'col',
      0, 0, leftColWidth, leftColHeight,
    );
    leftCol.contents = [
      wrap(
        wrap(sponsors([]), 'div'),
        'div',
        {
          class: 'col',
          style: `
            flex-grow: 1;
            background: var(--background);
            border-right: var(--border-style) var(--border-color) var(--border-width);
            border-bottom-right-radius: var(--border-radius);
          `
        }
      ),
      wrap(player(0), 'div',
        {
          style: `
            margin-left: ${-borderRadius}px;
            margin-right: ${-borderWidth / 2}px;
          `,
        }),
    ];

    const bottomBar = abs_field(
      'bottomRow',
      'div',
      'row',
      bottomBarX,
      bottomBarY,
      bottomBarWidth,
      bottomBarHeight,
      `
        background: var(--background);
        border-top: var(--border-style) var(--border-color) var(--border-width);
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      `
    );
    bottomBar.contents = [
      timer(),
      {component: 'counter'},
      gamedata(),
    ]

    const donationBar = donation_bar(donationBarX, donationBarY, donationBarWidth, donationBarHeight);

    const holes: LayoutHole[] = [
      {
        name: 'webcam',
        layout: {
          x: -borderRadius,
          y: leftColHeight,
          width: cameraWidth + borderRadius,
          height: cameraHeight,
        },
      },
      {
        name: 'game',
        layout: {
          x: width - gameWidth,
          y: -borderRadius, // FIX
          width: gameWidth + borderRadius,
          height: gameHeight + borderRadius,
        },
      },
    ]
    const cameraFrame: LayoutField = abs_field(
      'cameraframe',
      'div', '', -borderRadius, leftColHeight - borderWidth, cameraWidth + borderRadius, cameraHeight + borderWidth * 2,
      `
        border: var(--border);
        border-radius: var(--border-radius);
      `
    )
    return {
      contents: {
        leftBar: leftCol,
        bottomBar,
        donationBar,
        cameraFrame,
      },
      background: {holes},
    }
}

export function sixteen_nine({
  borderWidth = 0,
  borderRadius = 0,
}: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;

  const gameWidth = 1520;
  const gameHeight = 855;
  const donationBarHeight = 65;

  let layout = game_layout(
    width,
    height,
    gameWidth,
    gameHeight,
    donationBarHeight,
    borderWidth,
    borderRadius,
  );

  return {
    name: 'sixteen_nine',
    width,
    height,
    gameWidth,
    gameHeight,
    contents: Object.values(layout.contents),
    background: layout.background,
  };
}

export function sixteen_nine_divided({
  borderRadius = 0,
  borderWidth = 0,
}: LayoutTheme): LayoutConf {
  const layout = sixteen_nine({borderRadius, borderWidth});
  const gameHole: LayoutHole = layout.background.holes?.pop();

  const gameWidth = gameHole.layout.width / 2;
  const gameHeight = gameHole.layout.height / 2;

  const gameHoles = [
    {
      name: 'game1',
      layout: {
        x: gameHole.layout.x,
        y: gameHole.layout.y,
        width: gameWidth,
        height: gameHeight,
      }
    },
    {
      name: 'game2',
      layout: {
        x: gameHole.layout.x + gameWidth,
        y: gameHole.layout.y,
        width: gameWidth,
        height: gameHeight,
      }
    },
    {
      name: 'game3',
      layout: {
        x: gameHole.layout.x,
        y: gameHole.layout.y + gameHeight,
        width: gameWidth,
        height: gameHeight,
      }
    },
    {
      name: 'game4',
      layout: {
        x: gameHole.layout.x + gameWidth,
        y: gameHole.layout.y + gameHeight,
        width: gameWidth,
        height: gameHeight,
      }
    },
  ];
  layout.background.holes?.push(...gameHoles);

  const frameStyle = 'border: var(--border); border-radius: var(--border-radius);';
  const gameFrames = gameHoles.map((hole, i) => {
    let x = i % 2 + 1;
    let y = Math.floor(i / 2) + 1;
    return abs_field(
      hole.name, 'div', '',
      hole.layout.x - borderWidth,
      hole.layout.y - borderWidth,
      hole.layout.width + borderWidth,
      hole.layout.height + borderWidth * y,
      frameStyle
    )
  });
  layout.contents.push(...gameFrames);
  return layout;
}

export function sixteen_nine_bigcam(theme: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;

  const gameWidth = 1520;
  const gameHeight = 855;
  const donationBarHeight = 65;
  const cameraWidth = 560;
  const cameraHeight = 405;

  const layout = game_layout(
    width,
    height,
    gameWidth,
    gameHeight,
    donationBarHeight,
    theme.borderWidth,
    theme.borderRadius,
    width,
    cameraWidth,
    cameraHeight
  );

  return {
    name: 'sixteen_nine_bigcam',
    width,
    height,
    gameWidth,
    gameHeight,
    contents: Object.values(layout.contents),
    background: layout.background,
  };
}

  /* TODO: 16:9 x2 race */

  /* TODO: 4:3 */
  /* TODO: 4:3 x2 co-op  playernames x8 */
  /* TODO: 4:3 x2 race */

  /* TODO: Pokemoncustomlayout 1 */
  /* TODO: Pokemoncustomlayout 2 */

  /* TODO: tauko */
  /* TODO: pöhinä */
