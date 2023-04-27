export interface Breakpoint {
    key: number;
    value: number;
}

/**
 * Interpolate a value between breakpoints
 * @param key The key value for the interpolation point
 * @param breakpoints Breakpoint definitions, assumed sorted by key
 * 
 * @returns interpolated value or -1 if not found
 */
export function interpolate(key: number, breakpoints: Breakpoint[]): number {
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