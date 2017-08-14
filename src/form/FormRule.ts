import RegUtils from "../reg/RegUtils";

class FormRule {
    static RULE_REQUIRED = {
        required: true,
        message: '必填'
    };
    static RULE_INTEGER = {
        pattern: RegUtils.REG_INTEGER,
        message: '只能填写整数'
    };
    static RULE_POSITIVE_INTEGER = {
        pattern: RegUtils.REG_POSITIVE_INTEGER,
        message: '只能填写零或正整数'
    };
    static RULE_NOT_ZERO_POSITIVE_INTEGER = {
        pattern: RegUtils.REG_NOT_ZERO_POSITIVE_INTEGER,
        message: '只能填写正整数'
    };
    static RULE_TWO_BITS_POSITIVE_INTEGER = {
        pattern: RegUtils.REG_TWO_BITS_POSITIVE_INTEGER,
        message: '只能填写正整数'
    };
    static RULE_TWO_BITS_DECIMALS = {
        pattern: RegUtils.REG_TWO_FRACTION,
        message: '最多两位小数'
    };
    static RULE_PHONE = {
        pattern: RegUtils.REG_MOBILE,
        message: '请填写正确的手机号'
    };
    static RULE_TEL = {
        pattern: RegUtils.REG_TEL,
        message: '请填写正确电话号码'
    };
    static RULE_DISCOUNT = {
        pattern: RegUtils.REG_DISCOUNT,
        message: '请填写正确的折扣'
    };
    static RULE_POSTAL_CODE = {
        pattern: RegUtils.REG_POSTAL_CODE,
        message: '请填写正确的邮政编码'
    };
    static RULE_EMAIL = {
        pattern: RegUtils.REG_EMAIL,
        message: '请填写正确的邮箱'
    };
    static RULE_URL = {
        pattern: RegUtils.REG_URL,
        message: '请填写正确的网址'
    };

    static RULE_MAX(ct) {
        return {
            max: ct, message: `最多可填写${ct}个字符`
        }
    }

    static RULE_REQUIRED_MSG(msg) {
        return {required: true, message: msg}
    }
}

export default FormRule;