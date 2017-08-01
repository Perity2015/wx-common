declare const require: any;

const moment = require('moment');

const FORMAT_DATE = 'YYYY-MM-DD';

const FORMAT_DATETIME = 'YYYY-MM-DD HH:mm:ss';

const FORMAT_TIME = 'HH:mm:ss';

const FORMAT_TIMESTAMP = 'x';

const getDateString = (date) => {
    return moment(date).format(FORMAT_DATE);
};

const getDateTimeString = (date) => {
    return moment(date).format(FORMAT_DATETIME);
};

const getTimeString = (date) => {
    return moment(date).format(FORMAT_TIME);
};

const getTimestamp = (date) => {
    return parseInt(moment(date).format(FORMAT_TIMESTAMP));
};

const getCustomStr = (date, format) => {
    return moment(date).format(format);
};

const DateUtils = {
    FORMAT_DATE,
    FORMAT_TIMESTAMP,
    FORMAT_DATETIME,
    FORMAT_TIME,
    getDateString,
    getDateTimeString,
    getTimeString,
    getTimestamp,
    getCustomStr
};

export default DateUtils;

