declare const require: any;

const moment = require('moment');

const FORMAT_DATE = 'YYYY-MM-DD';

const FORMAT_TIMESTAMP = 'x';

const getDateString = (date) => {
    return moment(date).format(FORMAT_DATE);
};

const getTimestamp = (date) => {
    return parseInt(moment(date).format(FORMAT_TIMESTAMP));
};

const DateUtils = {
    FORMAT_DATE,
    FORMAT_TIMESTAMP,
    getDateString,
    getTimestamp
};

export default DateUtils;

