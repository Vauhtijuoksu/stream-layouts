export interface LayoutDimension {
    x: number;
    y: number;
    width: number;
    height: number;
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

export interface LayoutConf {
    name: string;
    width: number;
    height: number;
    fields: Array<LayoutField>;
    holes: Array<LayoutHole>;
}
