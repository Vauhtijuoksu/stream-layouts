import type { LayoutBackground, LayoutConf, LayoutField, LayoutTheme } from "$lib/models/LayoutConf";
import { abs_field, camera_hole, donation_bar, sponsors_field, wrap } from "./utils";

export function setuptime({
    borderWidth = 0,
    borderRadius = 0,
    sponsors = [],
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
    'topLeft', 'div', 'col', 0, 0, topLeftWidth, topLeftHeight, 
    'background: var(--background); align-items: center; justify-content: center;'
  );
  topLeft.contents = [
    wrap(
      {component: 'upcoming'},
      'div',
      {
        class: 'col',
        style: 'max-height: 90%; width: 80%; align-self: center;'
      },
    )
  ];

  const bottomLeft: LayoutField = abs_field(
    'bottomLeft', 'div', 'col', 0, bottomLeftY, bottomLeftWidth, bottomLeftHeight, 'background: var(--background);'
  );
  bottomLeft.contents = [
    wrap(
      {component: 'incentives'},
      'div',
      {
        class: 'col',
        style: 'max-height: 90%; width: 80%; align-self: center;'
      },
    ),
  ];

  const bottomRight: LayoutField = abs_field(
    'bottomRight', 'div', 'col', bottomRightX, bottomRightY, bottomRightWidth, bottomRightHeight, 'background: var(--background);'
  );
  bottomRight.contents = [
    sponsors_field(sponsors),
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
  ];
  const background: LayoutBackground = {
    holes: [
      camera_hole({x: cameraX, y: cameraY, width: cameraWidth, height: cameraHeight}, borderRadius, 'top right')
    ],
    style: '--override-background: var(--setuptime-background);'
  };

  return {
    name: 'setuptime',
    width,
    height,
    contents,
    background,
  }
}