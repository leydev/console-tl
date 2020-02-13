"use strict";
exports.__esModule = true;
var formatDate_1 = require("./modules/formatDate");
/**
 * @class ConsoleTL
 * @description A console class that emits logs with date and time
 * @version 1.0
 * @author leydev [leydev.com.br](https://leydev.com.br)
 */
var ConsoleTL = /** @class */ (function () {
    function ConsoleTL() {
    }
    /**
     * @description Show generic log
     */
    ConsoleTL.log = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stdout.write(formatDate_1["default"]() + ' [LOG]: ' + arg.join(' ') + '\n');
    };
    /**
     * @description Show info log
     */
    ConsoleTL.info = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stdout.write(formatDate_1["default"]() + ' [INFO]: ' + arg.join(' ') + '\n');
    };
    /**
     * @description Show warn log
     */
    ConsoleTL.warn = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stdout.write(formatDate_1["default"]() + ' [WARN]: ' + arg.join(' ') + '\n');
    };
    /**
     * @description Show error log
     */
    ConsoleTL.error = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stderr.write(formatDate_1["default"]() + ' [ERROR]: ' + arg.join(' ') + '\n');
    };
    return ConsoleTL;
}());
//Overides something methos of console global
console.log = ConsoleTL.log;
console.info = ConsoleTL.info;
console.warn = ConsoleTL.warn;
console.error = ConsoleTL.error;
module.exports = ConsoleTL;
//# sourceMappingURL=log.js.map