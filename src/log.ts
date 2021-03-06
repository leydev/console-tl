import formatDate from './modules/formatDate'

/**
 * @class ConsoleTL
 * @description A console class that emits logs with date and time
 * @version 1.0
 * @author leydev [leydev.com.br](https://leydev.com.br)
 */
class ConsoleTL {
    /**
     * @description Show generic log
     */
    public static log(...arg): void {
        process.stdout.write(formatDate() + ' [LOG]: ' + arg.join(' ') + '\n')
    }
    /**
     * @description Show info log
     */
    public static info(...arg): void {
        process.stdout.write(formatDate() + ' [INFO]: ' + arg.join(' ') + '\n')
    }
    /**
     * @description Show warn log
     */
    public static warn(...arg): void {
        process.stdout.write(formatDate() + ' [WARN]: ' + arg.join(' ') + '\n')
    }
    /**
     * @description Show error log
     */
    public static error(...arg): void {
        process.stderr.write(formatDate() + ' [ERROR]: ' + arg.join(' ') + '\n')
    }

    /**
     * @description This method overwrites de global console. Replacing the log, info, warn, error
     */
    public static overwrite() {
        console.log = this.log;
        console.info = this.info;
        console.warn = this.warn;
        console.error = this.error;
    }
}

module.exports = ConsoleTL