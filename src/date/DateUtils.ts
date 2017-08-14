declare const require: any;
const moment = require('moment');

class DateUtils {
    static FORMAT_DATE = 'YYYY-MM-DD';
    static FORMAT_TIMESTAMP = 'x';
    static FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';
    static FORMAT_TIME = 'HH:mm:ss';

    static getDateString(date) {
        return moment(date).format(DateUtils.FORMAT_DATE);
    }

    static getDateTimeString(date) {
        return moment(date).format(DateUtils.FORMAT_DATETIME);
    }

    static getTimeString(date) {
        return moment(date).format(DateUtils.FORMAT_TIME);
    }

    static getTimestamp(date) {
        return parseInt(moment(date).format(DateUtils.FORMAT_TIMESTAMP));
    }

    static getCustomStr(date, format) {
        return moment(date).format(format);
    }
}

export default DateUtils;

