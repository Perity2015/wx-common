class FormLayout {
    static getFormLayout1(lSpan: number, wSPan: number) {
        return {
            labelCol: {span: lSpan},
            wrapperCol: {span: wSPan},
        }
    }

    static getFormLayout2(lCol: { span: number, offset: number }, wCol: { span: number, offset: number }) {
        return {
            labelCol: lCol,
            wrapperCol: wCol,
        }
    }
}

export default FormLayout;