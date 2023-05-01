import type { Font, LayoutTheme, Sponsor } from "$lib/models/LayoutConf";
import type { Breakpoint } from "$lib/utils/theme";

export class ThemeInterpolator implements LayoutTheme {
  private themes: Breakpoint<LayoutTheme>[]
  private keyGen: () => number;
  private base: LayoutTheme;

  private name_: string;

  public constructor(
    name: string,
    base: LayoutTheme,
    themes: Breakpoint<LayoutTheme>[],
    keyGen: () => number,
    ) {
    this.name_ = name;
    this.themes = themes;
    this.keyGen = keyGen;
    this.base = base;
  }

  private theme(): LayoutTheme {
    const key = this.keyGen();
    let d = Number.MAX_VALUE;
    let theme: LayoutTheme = this.themes[0].value;

    for (let bp of this.themes) {
      let d_ = Math.abs(bp.key - key);
      if (d_ === 0) {
        return bp.value;
      } else if (d_ < d) {
        d = d_;
        theme = bp.value;
      }
    }
    return theme;
  }

  get name(): string {
    return this.theme().name ?? this.base.name ?? this.name;
  }

  get fonts() {
    return this.theme().fonts ?? this.base.fonts;
  }

  get borderWidth() {
    return this.theme().borderWidth ?? this.base.borderWidth;
  }

  get borderRadius() {
    return this.theme().borderRadius ?? this.base.borderRadius;
  }

  get style() {
    return (this.base.style ?? '') + this.theme().style;
  }

  get images() {
    return this.theme().images ?? this.base.images;
  }

  get sponsors() {
    return this.theme().sponsors ?? this.base.sponsors;
  }
}