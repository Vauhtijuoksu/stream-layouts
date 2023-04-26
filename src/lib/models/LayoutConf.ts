export interface LayoutDimension {
    x: number;
    y: number;
    width: number;
    height: number;
}



export interface LayoutField {
    component: string;
    name?: string;
    params?: {[key: string]: any};
    layout?: LayoutDimension;
    contents?: LayoutField[];
    raw?: string;
}

export interface LayoutBorder {
    stroke: string;
    strokeWidth: string;
}

export interface LayoutHole {
    name?: string;
    layout: LayoutDimension;
    borders?: {
        top?: any,
        right?: any,
        bottom?: any,
        left?: any,
    };
}

export interface LayoutBackground {
    image?: string;
    holes?: LayoutHole[];
    style?: string;
}

export interface Font {
    family: string;
    url: string;
    descriptors?: FontFaceDescriptors;
}

export interface Sponsor {
    name: string;
    img_url: string;
    duration?: number;
}

export interface LayoutTheme {
    name?: string;
    fonts?: Font[];
    borderWidth?: number;
    borderRadius?: number;
    style?: string;
    images?: {
        logo?: string,
        logoSmall?: string,
        skull?: string,
        timer?: string,
        defaultConsole?: string,
    };
    sponsors: Sponsor[];
}

export interface LayoutConf {
    name: string;
    width: number;
    height: number;
    gameWidth?: number;
    gameHeight?: number;
    contents: LayoutField[];
    background: LayoutBackground;
}
