export function timeDiff(start: Date, end: Date) {
    return end.getTime() - start.getTime();
}

export function millisToDuration(diff: number) {
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    const millis = Math.floor(diff % 1000);
    
    return {hours, minutes, seconds, millis}
}

export function dateRangeToDuration(start: Date, end: Date) {
    const diff = timeDiff(start, end);
    return millisToDuration(diff);
}