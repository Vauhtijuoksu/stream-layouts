export interface Breakpoint<T> {
    key: number;
    value: T;
}

/**
 * Interpolate a value between breakpoints
 * @param key The key value for the interpolation point
 * @param breakpoints Breakpoint definitions, assumed sorted by key
 * 
 * @returns interpolated value or -1 if not found
 */
export function interpolate(key: number, breakpoints: Breakpoint<number>[]): number {
    let lowerBound = -1;
    let lowerKey = 0;
    let upperBound = -1;
    let upperKey = 0;
    for (let bp of breakpoints) {
        if (key >= bp.key) {
            lowerBound = bp.value;
            lowerKey = bp.key;
            upperBound = bp.value;
            upperKey = bp.key;
        }
        if (key <= bp.key) {
            upperBound = bp.value;
            upperKey = bp.key;
            break;
        }
    }
    if (upperKey == lowerKey) return upperBound;
    const valueRange = (upperBound - lowerBound);
    const keyRange = (upperKey - lowerKey);
    return lowerBound + valueRange * (key - lowerKey) / keyRange;
}

export function hexToRgba(color: string): [number, number, number, number] {
    let rgba = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return rgba ? [
        parseInt(rgba[1], 16),
        parseInt(rgba[2], 16),
        parseInt(rgba[3], 16),
        parseInt(rgba[4], 16) || 1,
    ]: [0, 0, 0, 1];
}

export function rgbaToHex(rgba: [number, number, number, number]): string {
    return '#' + rgba.map((c) => c.toString(16).padStart(2, '0')).join('');
}

export function interpolateHexColors(color1: string, color2: string, value: number): string {
    
}