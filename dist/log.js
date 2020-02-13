"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatDate_1 = require("./modules/formatDate");
/**
 * @description A console that emits logs with date and time
 * @version 1
 * @since 13/03/2020
 * @author leydev [leydev.com.br](leydev.com.br)
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
        process.stdout.write(formatDate_1.default() + ' [LOG]: ' + arg.join(' ') + '\n');
    };
    /**
     * @description Show info log
     */
    ConsoleTL.info = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stdout.write(formatDate_1.default() + ' [INFO]: ' + arg.join(' ') + '\n');
    };
    /**
     * @description Show warn log
     */
    ConsoleTL.warn = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stdout.write(formatDate_1.default() + ' [WARN]: ' + arg.join(' ') + '\n');
    };
    /**
     * @description Show error log
     */
    ConsoleTL.error = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        process.stderr.write(formatDate_1.default() + ' [ERROR]: ' + arg.join(' ') + '\n');
    };
    return ConsoleTL;
}());
//Overides something methos of console global
console.log = ConsoleTL.log;
console.info = ConsoleTL.info;
console.warn = ConsoleTL.warn;
console.error = ConsoleTL.error;
exports.default = ConsoleTL;
//# sourceMappingURL=log.js.map