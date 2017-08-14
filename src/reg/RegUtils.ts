declare const require: any;
const _ = require('lodash');

class RegUtils {

    static checkReg(reg: RegExp, value) {
        return !_.isEmpty(value) && reg.test(value);
    };

    static checkRegPort(port) {
        const pattern = /^(\d)+$/g;
        if (RegUtils.checkReg(pattern, port)) {
            return port <= 65535 && port >= 0
        } else {
            return false;
        }
    };

    static checkRegIP(ip) {
        const reSpaceCheck = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
        if (RegUtils.checkReg(reSpaceCheck, ip)) {
            ip.match(reSpaceCheck);
            return parseInt(RegExp.$1) <= 255 && parseInt(RegExp.$1) >= 0
                && parseInt(RegExp.$2) <= 255 && parseInt(RegExp.$2) >= 0
                && parseInt(RegExp.$3) <= 255 && parseInt(RegExp.$3) >= 0
                && parseInt(RegExp.$4) <= 255 && parseInt(RegExp.$4) >= 0;
        } else {
            return false;
        }
    };

    static REG_INTEGER = /^-?[0-9]\d*$/;
    static REG_TWO_FRACTION = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
    static REG_MOBILE = /^1[34578]\d{9}$/;
    static REG_DISCOUNT = /^0.[0-9]{1,2}$/;
    static REG_POSITIVE_INTEGER = /^[0-9]\d*$/;
    static REG_NOT_ZERO_POSITIVE_INTEGER = /^[1-9]\d*$/;
    static REG_TWO_BITS_POSITIVE_INTEGER = /^[1-9]{1}[0-9]{0,1}$/;
    static REG_POSTAL_CODE = /^[1-9]{1}[0-9]{5}$/;
    static REG_TEL = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    static REG_EMAIL = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    static REG_URL = /^(((https|http|ftp|rtsp|mms):\/\/)?)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
}

export default RegUtils;