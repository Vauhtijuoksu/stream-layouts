export interface LayoutDimension {
    x: number;
    y: number;
    width: number | string;
    height: number | string;
}

export interface LayoutBorder {
    stroke: string;
    strokeWidth: string;
}

export interface LayoutField {
    component: string;
    name?: string;
    data?: {[key: string]: any};
    layout: LayoutDimension;
}

export interface LayoutHole {
    name?: string;
    layout: LayoutDimension;
    border?: LayoutBorder;
}

export type LayoutTheme = {[key: string]: string}

export interface LayoutConf {
    name: string;
    width: number;
    height: number;
    theme?: LayoutTheme;
    fields: LayoutField[];
    holes: LayoutHole[];
}
