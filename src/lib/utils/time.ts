export function dateRangeToDuration(start: Date, end: Date) {
    const diff = end.getTime() - start.getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    const millis = Math.floor(diff % 1000);

    return {hours, minutes, seconds, millis}
}