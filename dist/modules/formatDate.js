"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("./date");
/**
 * Returns de date formated
 * @returns {string}
 */
function formatDate() {
    return date_1.CustomDate.year + '-' + date_1.CustomDate.month + '-' + date_1.CustomDate.day + ' ' + date_1.CustomDate.hour + ':' + date_1.CustomDate.min + ':' + date_1.CustomDate.sec + '.' + date_1.CustomDate.mile;
}
exports.default = formatDate;
//# sourceMappingURL=formatDate.js.map