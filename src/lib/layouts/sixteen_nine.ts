import type { LayoutConf, LayoutField, LayoutTheme } from "$lib/models/LayoutConf";
import { abs_field, game_layout_fields, gamedata, left_col_wrapper, player, sponsors, timer, wrap } from "./utils";

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
    { component: 'counter' },
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
  const layout = sixteen_nine({ borderRadius, borderWidth });
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
