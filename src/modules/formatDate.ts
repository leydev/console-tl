import dateTime from './date';

/**
 * Returns de date formated
 * @returns {string}
 */
export default function formatDate(): string {
    const d = dateTime()
    return d.year + '-' + d.month + '-' + d.day + ' ' + d.hour + ':' + d.min + ':' + d.sec + '.' + d.mile
}
