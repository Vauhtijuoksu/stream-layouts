import type { LayoutConf, LayoutTheme } from "$lib/models/LayoutConf";
import { donation_bar } from "./utils";

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
