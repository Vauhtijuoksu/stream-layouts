import { interpolate } from "./theme";

test('interpolate with single breakpoint', () => {
    const breakpoints = [
        {value: 2, key: 0}
    ];
    expect(interpolate(0, breakpoints)).toBe(2);
});

test('interpolate exact breakpoint match', () => {
    const breakpoints = [
        {key: 0, value: 0},
        {key: 3, value: 1},
    ];
    expect(interpolate(3, breakpoints)).toBe(1);
});

test('interpolate between breakpoints', () => {
    const breakpoints = [
        {key: 0, value: 0},
        {key: 2, value: 1}
    ]
    expect(interpolate(1, breakpoints)).toBe(0.5);
});

test('interpolate key over breakpoints should return last value', () => {
    const breakpoints = [
         {key: 0, value: 0},
         {key: 2, value: 3},
    ];
    expect(interpolate(3, breakpoints)).toBe(3);
});

describe('interpolate varying values', () => {
    const breakpoints = [
        {key: 0, value: 0},
        {key: 6, value: 0},
        {key: 8, value: 1},
        {key: 20, value: 1},
        {key: 22, value: 0}
    ];
    const testPairs = [
        {key: 0, expected: 0},
        {key: 6, expected: 0},
        {key: 7, expected: 0.5},
        {key: 9, expected: 1},
        {key: 14, expected: 1},
        {key: 20, expected: 1},
        {key: 21, expected: 0.5},
        {key: 23, expected: 0},
    ];
    test.each(testPairs)(
        'should interpolate value for %p',
        ({key, expected}) => {
            expect(interpolate(key, breakpoints)).toBe(expected);
        }
    )
})