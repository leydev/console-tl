const d: Date = new Date()

interface iCustomDate {
    /**
     * @description The hour of time now with 2 digits
     */
    hour: string;
    /**
     * The minute of time now with 2 digits
     */
    min: string;
    /**
     * @description The seconds of time now with 2 digits
     */
    sec: string;
    /**
     * @description The day of month
     */
    day: string;
    /**
     * @description The month of time now with 2 digits
     */
    month: string;
    /**
     * @description The year of time now
     */
    year: string;
    /**
     * @description The mileseconds of time now with 0 until 4 digits ex (1000 ms)
     */
    mile: string;
    /**
     * @description The timestamp unix
     */
    timestamp: number;
}

export const CustomDate: iCustomDate = {
    /**
     * @description The hour of time now with 2 digits
     */
    hour: (d.getHours() < 10) ? `0${d.getHours()}` : d.getHours().toString(),
    /**
     * @description The minute of time now with 2 digits
     */
    min: (d.getMinutes() < 10) ? `0${d.getMinutes()}` : d.getMinutes().toString(),
    /**
     * @description The seconds of time now with 2 digits
     */
    sec: (d.getSeconds() < 10) ? `0${d.getSeconds()}` : d.getSeconds().toString(),
    /**
     * @description The day of month
     */
    day: (d.getDate() < 10) ? `0${d.getDate()}` : d.getDate().toString(),
    /**
     * @description The month of time now with 2 digits
     */
    month: ((d.getMonth() + 1) < 10) ? `0${d.getMonth() + 1}` : (d.getMonth() + 1).toString(),
    /**
     * @description The year of time now
     */
    year: (d.getFullYear() < 10) ? `0${d.getFullYear()}` : d.getFullYear().toString(),
    /**
     * @description The mileseconds of time now with 0 until 4 digits ex (1000 ms)
     */
    mile: (d.getMilliseconds() < 10) ? `0${d.getMilliseconds()}` : d.getMilliseconds().toString(),
    /**
     * @description The timestamp unix
     */
    timestamp: d.valueOf()
}
