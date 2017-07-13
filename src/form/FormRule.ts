import RegUtils from "../reg/RegUtils";

const RULE_REQUIRED = {required: true, message: '必填'};
const RULE_INTEGER = {pattern: RegUtils.REG_INTEGER, message: '只能填写整数'};
const RULE_POSITIVE_INTEGER = {pattern: RegUtils.REG_POSITIVE_INTEGER, message: '只能填写零或正整数'};
const RULE_NOT_ZERO_POSITIVE_INTEGER = {pattern: RegUtils.REG_NOT_ZERO_POSITIVE_INTEGER, message: '只能填写正整数'};
const RULE_TWO_BITS_POSITIVE_INTEGER = {pattern: RegUtils.REG_TWO_BITS_POSITIVE_INTEGER, message: '只能填写正整数'};
const RULE_TWO_BITS_DECIMALS = {pattern: RegUtils.REG_TWO_FRACTION, message: '最多两位小数'};
const RULE_PHONE = {pattern: RegUtils.REG_MOBILE, message: '请填写正确的手机号'};
const RULE_TEL = {pattern: RegUtils.REG_TEL, message: '请填写正确电话号码'};
const RULE_DISCOUNT = {pattern: RegUtils.REG_DISCOUNT, message: '请填写正确的折扣'};
const RULE_POSTAL_CODE = {pattern: RegUtils.REG_POSTAL_CODE, message: '请填写正确的邮政编码'};
const RULE_MAX = (ct) => ({
    max: ct, message: `最多可填写${ct}个字符`
});

const FormRule = {
    RULE_REQUIRED,
    RULE_INTEGER,
    RULE_POSITIVE_INTEGER,
    RULE_NOT_ZERO_POSITIVE_INTEGER,
    RULE_TWO_BITS_POSITIVE_INTEGER,
    RULE_TWO_BITS_DECIMALS,
    RULE_PHONE,
    RULE_TEL,
    RULE_DISCOUNT,
    RULE_POSTAL_CODE,
    RULE_MAX
};

export default FormRule;