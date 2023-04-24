import type { LayoutBackground, LayoutConf, LayoutDimension, LayoutField, LayoutHole, LayoutTheme } from "$lib/models/LayoutConf";

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

function donation_bar({x, y, width, height}: LayoutDimension): LayoutField {
  const wrapper = abs_field(
    'donationBarWrapper', 'div', '',
    x, y, width, height,
  );
  wrapper.contents = [{
    component: 'donation_bar',
  }];
  return wrapper;
}

function left_col({x, y, width, height}: LayoutDimension): LayoutField {
  return abs_field(
    'leftCol',
    'div',
    'col',
    x, y, width, height,
  );
}

function left_col_wrapper(contents: LayoutField[]): LayoutField {
  return {
    component: 'div',
    params: {
      class: 'col',
      style: `
        flex-grow: 1;
        background: var(--background);
        border-right: var(--border-style) var(--border-color) var(--border-width);
        border-bottom-right-radius: var(--border-radius);
      `
    },
    contents
  }  
}

function bottom_bar({x, y, width, height}: LayoutDimension): LayoutField {
  return abs_field(
    'bottomRow',
    'div',
    'row',
    x,
    y,
    width,
    height,
    `
      background: var(--background);
      border-top: var(--border-style) var(--border-color) var(--border-width);
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    `
  );
}

function camera_hole({x, y, width, height}: LayoutDimension, borderRadius: number, position='left'): LayoutHole {
  let layout: LayoutDimension = {x, y, width, height};
  if (position.match('left')) {
    layout.x -= borderRadius;
    layout.width += borderRadius;
  }

  if (position.match('right')) {
    layout.width += borderRadius;
  }

  if (position.match('top')) {
    layout.y -= borderRadius;
    layout.height += borderRadius;
  }

  return {
    name: 'webcam',
    layout
  }
}

function camera_frame({x, y, width, height}: LayoutDimension, borderRadius: number, borderWidth: number): LayoutField {
  return abs_field(
    'cameraframe',
    'div',
    '',
    x - borderRadius,
    y - borderWidth,
    width + borderRadius,
    height + borderWidth * 2,
    `
      border: var(--border);
      border-radius: var(--border-radius);
    `
  );
}

function game_hole({x, y, width, height}: LayoutDimension, borderRadius: number): LayoutHole {
  return {
    name: 'game',
    layout: {
      x: x,
      y: y - borderRadius,
      width: width + borderRadius,
      height: height + borderRadius,
    }
  };
}

function game_dimensions(
    width: number = 1920,
    height: number = 1080,
    gameWidth: number,
    gameHeight: number,
    donationBarHeight: number,
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
  const leftColX = 0;
  const leftColY = 0;
  const cameraX = 0;
  const cameraY = leftColHeight;
  const gameX = leftColWidth;
  const gameY = 0;

  return {
    leftCol: {
      x: leftColX,
      y: leftColY,
      width: leftColWidth,
      height: leftColHeight,
    },
    bottomBar: {
      x: bottomBarX,
      y: bottomBarY,
      width: bottomBarWidth,
      height: bottomBarHeight,
    },
    camera: {
      x: cameraX,
      y: cameraY,
      width: cameraWidth,
      height: cameraHeight,
    },
    game: {
      x: gameX,
      y: gameY,
      width: gameWidth,
      height: gameHeight,
    },
    donationBar: {
      x: donationBarX,
      y: donationBarY,
      width: donationBarWidth,
      height: donationBarHeight,
    },
  }
}


function game_layout_fields(
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
    const {
      leftCol,
      bottomBar,
      donationBar,
      camera,
      game,
    } = game_dimensions(width, height, gameWidth, gameHeight, donationBarHeight, donationBarWidth, cameraWidth, cameraHeight);

    const leftColField = left_col(leftCol);
    const bottomBarField = bottom_bar(bottomBar);
    const donationBarField = donation_bar(donationBar);
    const holes: LayoutHole[] = [
      camera_hole(camera, borderRadius),
      game_hole(game, borderRadius),
    ];
    const cameraFrame: LayoutField = camera_frame(camera, borderRadius, borderWidth);

    return {
      contents: {
        leftCol: leftColField,
        bottomBar: bottomBarField,
        donationBar: donationBarField,
        cameraFrame,
      },
      background: {holes},
    }
}

function sixteen_nine_leftcol_contents(
    borderWidth = 0,
    borderRadius = 0,
  ): LayoutField[] {
    return [
      left_col_wrapper(
        [wrap(sponsors([]), 'div')]
      ),
      wrap(player(0), 'div',
        {
          style: `
            margin-left: ${-borderRadius}px;
          `,
      }),
    ];
}

function sixteen_nine_bottombar_contents(): LayoutField[] {
  return [
    timer(),
    {component: 'counter'},
    gamedata(),
  ];
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

  let layout = game_layout_fields(
    width,
    height,
    gameWidth,
    gameHeight,
    donationBarHeight,
    borderWidth,
    borderRadius,
  );

  layout.contents.leftCol.contents = sixteen_nine_leftcol_contents(borderWidth, borderRadius);
  layout.contents.bottomBar.contents = sixteen_nine_bottombar_contents();

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
  // @ts-expect-error
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

  const layout = game_layout_fields(
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

  layout.contents.leftCol.contents = sixteen_nine_leftcol_contents(theme.borderRadius, theme.borderWidth);
  layout.contents.bottomBar.contents = sixteen_nine_bottombar_contents();

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

export function four_three({
  borderWidth = 0,
  borderRadius = 0,
}: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;
  const gameWidth = 1353;
  const gameHeight = 1015;
  const donationBarHeight = 65;
  const cameraHeight = 250;

  const layout = game_layout_fields(width, height, gameWidth, gameHeight, donationBarHeight, borderWidth, borderRadius, undefined, undefined, cameraHeight);

  layout.contents.leftCol.contents = [
    left_col_wrapper([
      wrap(sponsors([]), 'div', {style: 'flex-grow: 3;'}),
      gamedata(),
      timer(0),
    ]),
    wrap(
      player(0), 
      'div',
      {
        style: `
          margin-left: ${-borderRadius}px;
        `,
    }),
  ];

  return {
    name: 'four_three',
    width,
    height,
    gameWidth,
    gameHeight,
    contents: Object.values(layout.contents),
    background: layout.background,
  }
}

export function setuptime({
    borderWidth = 0,
    borderRadius = 0,
  }: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;
  const cameraX = width / 2;
  const cameraY = 0;
  const cameraHeight = height / 2;
  const cameraWidth = width - cameraX;
  const donationBarHeight = 65;
  const topLeftWidth = cameraX;
  const topLeftHeight = cameraHeight;
  const bottomLeftY = topLeftHeight;
  const bottomLeftWidth = topLeftWidth;
  const bottomLeftHeight = height - topLeftHeight - donationBarHeight;
  const bottomRightX = bottomLeftWidth;
  const bottomRightY = bottomLeftY;
  const bottomRightWidth = cameraWidth;
  const bottomRightHeight = height - cameraHeight - donationBarHeight;

  const topLeft: LayoutField = abs_field(
    'topLeft', 'div', 'col', 0, 0, topLeftWidth, topLeftHeight, 'background: var(--background)'
  );
  topLeft.contents = [
    {component: 'upcoming'},
  ];

  const bottomLeft: LayoutField = abs_field(
    'bottomLeft', 'div', 'col', 0, bottomLeftY, bottomLeftWidth, bottomLeftHeight, 'background: var(--background);'
  );
  bottomLeft.contents = [
    {component: 'incentives'},
  ];

  const bottomRight: LayoutField = abs_field(
    'bottomRight', 'div', 'col', bottomRightX, bottomRightY, bottomRightWidth, bottomRightHeight, 'background: var(--background);'
  );
  bottomRight.contents = [
    sponsors([]),
  ];
  const cameraFrame = abs_field(
    'cameraframe',
    'div',
    '',
    cameraX,
    cameraY,
    cameraWidth,
    cameraHeight,
    `
      border-bottom: var(--border);
      border-left: var(--border);
      border-bottom-left-radius: var(--border-radius);
    `
  )


  const contents: LayoutField[] = [
    topLeft,
    bottomLeft,
    bottomRight,
    cameraFrame,
    donation_bar({x: 0, y: 1015, width, height: donationBarHeight}),
  ]
  const background = {
    holes: [
      camera_hole({x: cameraX, y: cameraY, width: cameraWidth, height: cameraHeight}, borderRadius, 'top right')
    ]
  }

  return {
    name: 'setuptime',
    width,
    height,
    contents,
    background,
  }
}

export function poehina({
    borderRadius=0,
    borderWidth=0,
  }: LayoutTheme): LayoutConf {
    return {
      name: 'poehina',
      width: 1920,
      height: 1080,
      contents: [
        donation_bar({x: 0, y: 1015, width: 1920, height: 65}),
      ],
      background: {
        holes: [
          {
            name: 'camera',
            layout: {
              x: -borderRadius, y: -borderRadius,
              width: 1920+borderRadius*2, height: 1015+borderRadius
            }
          }
        ]
      }
    };
}

  /* TODO: 16:9 x2 race */

  /* TODO: 4:3 x2 co-op  playernames x8 */
  /* TODO: 4:3 x2 race */

  /* TODO: Pokemoncustomlayout 1 */
  /* TODO: Pokemoncustomlayout 2 */
