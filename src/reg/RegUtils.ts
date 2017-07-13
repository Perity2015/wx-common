declare const require: any;
const _ = require('lodash');

const REG_INTEGER = /^-?[0-9]\d*$/;
const REG_TWO_FRACTION = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
const REG_MOBILE = /^1[34578]\d{9}$/;
const REG_DISCOUNT = /^0.[0-9]{1,2}$/;
const REG_POSITIVE_INTEGER = /^[0-9]\d*$/;
const REG_NOT_ZERO_POSITIVE_INTEGER = /^[1-9]\d*$/;
const REG_TWO_BITS_POSITIVE_INTEGER = /^[1-9]{1}[0-9]{0,1}$/;
const REG_POSTAL_CODE = /^[1-9]{1}[0-9]{5}$/;
const REG_TEL = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
const REG_EMAIL = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
const REG_URL = /^(((https|http|ftp|rtsp|mms):\/\/)?)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;

const checkReg = (reg: RegExp, value) => {
    return !_.isEmpty(value) && reg.test(value);
};

/**
 * 校验端口
 * @param port
 * @returns {boolean}
 */
export const checkRegPort = (port) => {
    const pattern = /^(\d)+$/g;
    if (checkReg(pattern, port)) {
        return port <= 65535 && port >= 0
    } else {
        return false;
    }
};

/**
 * 校验ip
 * @param ip
 * @returns {boolean}
 */
export const checkRegIP = (ip) => {
    const reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
    if (checkReg(reSpaceCheck, ip)) {
        ip.match(reSpaceCheck);
        return parseInt(RegExp.$1) <= 255 && parseInt(RegExp.$1) >= 0
            && parseInt(RegExp.$2) <= 255 && parseInt(RegExp.$2) >= 0
            && parseInt(RegExp.$3) <= 255 && parseInt(RegExp.$3) >= 0
            && parseInt(RegExp.$4) <= 255 && parseInt(RegExp.$4) >= 0;
    } else {
        return false;
    }
};

const RegUtils = {
    checkReg,
    checkRegPort,
    checkRegIP,
    REG_INTEGER,
    REG_TWO_FRACTION,
    REG_MOBILE,
    REG_DISCOUNT,
    REG_POSITIVE_INTEGER,
    REG_NOT_ZERO_POSITIVE_INTEGER,
    REG_TWO_BITS_POSITIVE_INTEGER,
    REG_POSTAL_CODE,
    REG_TEL,
    REG_EMAIL,
    REG_URL
};

export default RegUtils;