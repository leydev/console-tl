"use strict";
exports.__esModule = true;
function dateTime() {
    var d = new Date();
    return {
        hour: (d.getHours() < 10) ? "0" + d.getHours() : d.getHours().toString(),
        min: (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes().toString(),
        sec: (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds().toString(),
        day: (d.getDate() < 10) ? "0" + d.getDate() : d.getDate().toString(),
        month: ((d.getMonth() + 1) < 10) ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1).toString(),
        year: (d.getFullYear() < 10) ? "0" + d.getFullYear() : d.getFullYear().toString(),
        mile: (d.getMilliseconds() < 10) ? "0" + d.getMilliseconds() : d.getMilliseconds().toString(),
        timestamp: d.valueOf()
    };
}
exports["default"] = dateTime;
//# sourceMappingURL=date.js.map