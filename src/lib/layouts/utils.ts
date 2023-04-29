import type { LayoutDimension, LayoutField, LayoutHole, Sponsor } from "$lib/models/LayoutConf";

export function style_string(fields: { [key: string]: any }, unit = ''): string {
  return Object.entries(fields)
    .map(([key, value]) => value ? `${key}: ${value}${unit};` : '')
    .join('');
}

export function abs_field(
  name: string,
  component: string,
  orientation: 'col' | 'row' | '',
  x: number,
  y: number,
  width: number,
  height: number,
  extraStyle: string = '',
): LayoutField {

  let style = style_string({ top: y, left: x, width, height }, 'px') + extraStyle;

  return {
    name: name,
    component,
    params: {
      class: `abs ${orientation}`,
      style,
    }
  }
}

export function wrap(child: LayoutField, parentComponent = 'div', parentParams?: { [key: string]: any }): LayoutField {
  return {
    component: parentComponent,
    contents: [child],
    params: parentParams,
  }
}

export function sponsors_field(sponsors: Sponsor[]): LayoutField {
  return {
    component: 'sponsors',
    params: {
      sponsors: sponsors,
    },
  };
}

export function player(index = 0): LayoutField {
  return {
    component: 'playername',
    params: {
      index
    },
  };
}

export function timer(name = '1'): LayoutField {
  return {
    component: 'timer',
    params: {
      name,
    },
  };
}

export function gamedata(): LayoutField {
  return {
    component: 'gamedata',
  };
}

export function donation_bar({ x, y, width, height }: LayoutDimension): LayoutField {
  const wrapper = abs_field(
    'donationBarWrapper', 'div', '',
    x, y, width, height,
  );
  wrapper.contents = [{
    component: 'donation_bar',
  }];
  return wrapper;
}

export function left_col({ x, y, width, height }: LayoutDimension): LayoutField {
  return abs_field(
    'leftCol',
    'div',
    'col',
    x, y, width, height,
  );
}

export function left_col_wrapper(contents: LayoutField[]): LayoutField {
  return {
    component: 'div',
    params: {
      class: 'col',
      style: `
        flex-grow: 1;
        background: var(--background);
        border-right: var(--border-style) var(--border-color) var(--border-width);
        border-bottom-right-radius: var(--border-radius);
        justify-content: space-between;
    `
    },
    contents
  }
}

export function bottom_bar({ x, y, width, height }: LayoutDimension): LayoutField {
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
    justify-content: space-between;
    `
  );
}

export function camera_hole({ x, y, width, height }: LayoutDimension, borderRadius: number = 0, position = 'left'): LayoutHole {
  let layout: LayoutDimension = { x, y, width, height };
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

export function camera_frame({ x, y, width, height }: LayoutDimension, borderRadius: number, borderWidth: number): LayoutField {
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

export function game_holes({ x, y, width, height }: LayoutDimension, borderRadius: number = 0, borderWidth = 0, divisions: number = 1): LayoutHole[] {
  if (divisions === 1) {
    return  [{
      name: 'game',
      layout: {
        x: x,
        y: y - borderRadius,
        width: width + borderRadius,
        height: height + borderRadius,
      }
    }];
  } else if (divisions === 4) {
    const gameWidth = width / 2;
    const gameHeight = height / 2;
    const halfBorder = borderWidth / 2;
    return [
      {
        name: 'game1',
        layout: {
          x: x,
          y: y - borderRadius,
          width: gameWidth - halfBorder,
          height: gameHeight + borderRadius - halfBorder,
        }
      }, {
        name: 'game2',
        layout: {
          x: x + gameWidth + halfBorder,
          y: y - borderRadius,
          width: gameWidth + borderRadius,
          height: gameHeight + borderRadius - halfBorder,
        }
      }, {
        name: 'game3',
        layout: {
          x: x,
          y: y + gameHeight + halfBorder,
          width: gameWidth - halfBorder,
          height: gameHeight - halfBorder,
        }
      }, {
        name: 'game4',
        layout: {
          x: x + gameWidth + halfBorder,
          y: y + gameHeight + halfBorder,
          width: gameWidth + borderRadius,
          height: gameHeight - halfBorder
        }
      }
    ]
  }
}

export function game_dimensions(
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


export function game_layout_fields(
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
  divisions = 1,
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
    ...game_holes(game, borderRadius, borderWidth, divisions),
  ];
  const cameraFrame: LayoutField = camera_frame(camera, borderRadius, borderWidth);

  return {
    contents: {
      leftCol: leftColField,
      bottomBar: bottomBarField,
      donationBar: donationBarField,
      cameraFrame,
    },
    background: { holes },
  }
}
