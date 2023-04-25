import type { LayoutBackground, LayoutConf, LayoutField, LayoutTheme, Sponsor } from "$lib/models/LayoutConf";
import { abs_field, camera_frame, donation_bar, game_layout_fields, gamedata, left_col_wrapper, player, sponsors_field, timer, wrap } from "./utils";

function sixteen_nine_leftcol_contents(
  borderWidth = 0,
  borderRadius = 0,
  sponsors: Sponsor[] = [],
): LayoutField[] {
  return [
    left_col_wrapper(
      [wrap(sponsors_field(sponsors), 'div')]
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
    wrap(timer(), 'div', {class: 'row', style: 'justify-content: center; flex-grow: 1;'}),
    { component: 'counter' },
    wrap(gamedata(), 'div', {class: 'row', style: 'flex-grow: 1;'}),
  ];
}

export function sixteen_nine({
  borderWidth = 0,
  borderRadius = 0,
  sponsors = [],
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

  layout.contents.leftCol.contents = sixteen_nine_leftcol_contents(borderWidth, borderRadius, sponsors);
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
  sponsors = [],
}: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;
  const fullGameWidth = 1520;
  const fullGameHeight = 855;
  const donationBarHeight = 65;

  let layout = game_layout_fields(
    width,
    height,
    fullGameWidth,
    fullGameHeight,
    donationBarHeight,
    borderWidth,
    borderRadius
  );

  layout.contents.leftCol.contents = [
    left_col_wrapper(
      [
        sponsors_field(sponsors),
      ]
    )
  ]

  layout.contents.bottomBar.contents = sixteen_nine_bottombar_contents();

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
  return {
    name: 'sixteen_nine_divided',
    width,
    height,
    gameWidth,
    gameHeight,
    contents: Object.values(layout.contents).concat(...gameFrames),
    background: layout.background,
  };
}

export function sixteen_nine_bigcam({
  borderRadius = 0,
  borderWidth = 0,
  sponsors = [],
}: LayoutTheme): LayoutConf {
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
    borderWidth,
    borderRadius,
    width,
    cameraWidth,
    cameraHeight
  );

  layout.contents.leftCol.contents = sixteen_nine_leftcol_contents(borderRadius, borderWidth, sponsors);
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

export function sixteen_nine_race({borderRadius=0, borderWidth=0, sponsors=[]}: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;
  const gameWidth = 960;
  const gameHeight = 540;
  const topBarHeight = 120;
  const donationBarHeight = 65;
  const bottomBarHeight = height - topBarHeight - gameHeight - donationBarHeight;
  const bottomBarY = topBarHeight + gameHeight;
  
  const cameraHeight = bottomBarHeight;
  const cameraWidth = 500;
  const bottomSideWidth = (width - cameraWidth) / 2;
  const bottomBarRightX = bottomSideWidth + cameraWidth;
  const cameraX = bottomSideWidth;
  const cameraY = bottomBarY;

  const contents: LayoutField[] = [
    abs_field('topBar', 'div', 'row', 0, 0, width, topBarHeight, 'background: var(--background); border'),
    abs_field('bottomLeft', 'div', 'row', 0, bottomBarY, bottomSideWidth, bottomBarHeight, 'background: var(--background); border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);'),
    abs_field('bottomRight', 'div', 'row', bottomBarRightX, bottomBarY, bottomSideWidth, bottomBarHeight, 'background: var(--background); border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);'),
    donation_bar({x: 0, y: 1015, width: 1920, height: 65}),
  ];

  const background: LayoutBackground = {
    holes: [
      {
        name: 'game1',
        layout: {
          x: -borderRadius,
          y: topBarHeight + borderWidth,
          width: gameWidth+borderRadius-borderWidth/2,
          height: gameHeight-borderWidth*2,
        }
      },
      {
        name: 'game2',
        layout: {
          x: gameWidth+borderWidth/2,
          y: topBarHeight+borderWidth,
          width: gameWidth+borderRadius,
          height: gameHeight-borderWidth*2,
        }
      },
      {
        name: 'camera',
        layout: {
          x: bottomSideWidth+borderWidth,
          y: bottomBarY,
          width: cameraWidth-2*borderWidth,
          height: cameraHeight,
        },
      }
    ]
  }

  return {
    name: 'sixteen_nine_race',
    width,
    height,
    contents,
    background,
  }
}
