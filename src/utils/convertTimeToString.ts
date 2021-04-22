export default function convertTimeToString(time: number) : string {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');

    const rawTimeString = [];

    if (Number(hours)) rawTimeString.push(hours);

    rawTimeString.push(minutes || '00');
    rawTimeString.push(seconds || '00');

    return rawTimeString.join(':');
}