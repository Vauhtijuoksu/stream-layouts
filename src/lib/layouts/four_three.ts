import type { LayoutBackground, LayoutConf, LayoutDimension, LayoutField, LayoutHole, LayoutTheme } from "$lib/models/LayoutConf";
import { abs_field, camera_hole, donation_bar, game_layout_fields, gamedata, left_col_wrapper, player, sponsors, timer, wrap } from "./utils";


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
