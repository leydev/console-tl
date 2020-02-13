import { CustomDate as d } from './date';

/**
 * Returns de date formated
 * @returns {string}
 */
export default function formatDate(): string {
    return d.year + '-' + d.month + '-' + d.day + ' ' + d.hour + ':' + d.min + ':' + d.sec + '.' + d.mile
}
