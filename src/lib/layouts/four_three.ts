import type { LayoutBackground, LayoutConf, LayoutDimension, LayoutField, LayoutHole, LayoutTheme } from "$lib/models/LayoutConf";
import { abs_field, camera_hole, donation_bar, game_layout_fields, gamedata, left_col_wrapper, player, sponsors_field, timer, wrap } from "./utils";


export function four_three({
  borderWidth = 0,
  borderRadius = 0,
  sponsors = [],
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
      wrap({component: 'logo'}, 'div', {style: 'padding: 10px;'}),
      wrap(sponsors_field(sponsors), 'div', {style: 'height: 200px;'}),
      wrap(gamedata(), 'div', {class: 'row'}),
      wrap({component: 'counter'}, 'div', {class: 'row', style: 'justify-content: space-evenly;'}),
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

export function four_three_race({borderRadius=0, borderWidth=0, sponsors}: LayoutTheme): LayoutConf {
  const width = 1920;
  const height = 1080;
  const gameWidth = 960;
  const gameHeight = 720;
  const donationBarHeight = 65;
  const bottomBarHeight = height - gameHeight - donationBarHeight;
  const cameraHeight = bottomBarHeight;
  const cameraWidth = 400;
  const bottomSideWidth = (width - cameraWidth) / 2;
  const bottomBarY = gameHeight;
  const cameraX = bottomSideWidth;
  const cameraY = gameHeight;

  const bottomLeft = abs_field('bottomLeft', 'div', 'col', 0, bottomBarY, bottomSideWidth, bottomBarHeight, 'padding: 10px; background: var(--background); border-top-right-radius: var(--border-radius); border-bottom-right-radius: var(--border-radius);');
  const bottomRight = abs_field('bottomRight', 'div', 'col', bottomSideWidth+cameraWidth, bottomBarY, bottomSideWidth, bottomBarHeight, 'padding: 10px; background: var(--background); border-top-left-radius: var(--border-radius); border-bottom-left-radius: var(--border-radius);');
  
  bottomLeft.contents = [
    timer(0),
    wrap(gamedata(), 'div', {class: 'row'}),
  ];

  bottomRight.contents = [
    timer(1),
    wrap(sponsors_field(sponsors), 'div', {class: 'col'})
  ]
  
  const contents: LayoutField[] = [
    bottomLeft,
    bottomRight,
    donation_bar({x: 0, y: 1015, width: 1920, height: 65}),
  ];

  const background: LayoutBackground = {
    holes: [
      {
        name: 'game1',
        layout: {
          x: 0 - borderRadius,
          y: 0 - borderRadius,
          width: gameWidth+borderRadius-borderWidth/2,
          height: gameHeight+borderRadius-borderWidth,
        },
      },
      {
        name: 'game2',
        layout: {
          x: gameWidth+borderWidth/2,
          y: -borderRadius,
          width: gameWidth+borderRadius,
          height: gameHeight+borderRadius-borderWidth,
        }
      },
      {
        name: 'camera',
        layout: {
          x: cameraX + borderWidth,
          y: cameraY,
          width: cameraWidth - 2*borderWidth,
          height: cameraHeight,
        }
      }
    ]
  }

  return {
    name: 'four_three_race',
    width,
    height,
    contents,
    background
  }
}
