"use strict";
exports.__esModule = true;
var dateTime_1 = require("./dateTime");
/**
 * Returns de date formated
 * @returns {string}
 */
function formatDate() {
    var d = dateTime_1["default"]();
    return d.year + '-' + d.month + '-' + d.day + ' ' + d.hour + ':' + d.min + ':' + d.sec + '.' + d.mile;
}
exports["default"] = formatDate;
//# sourceMappingURL=formatDate.js.map