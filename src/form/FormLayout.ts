const getFormLayout1 = (lSpan: number, wSPan: number) => {
    return {
        labelCol: {span: lSpan},
        wrapperCol: {span: wSPan},
    }
};

const getFormLayout2 = (lCol: { span: number, offset: number }, wCol: { span: number, offset: number }) => {
    return {
        labelCol: lCol,
        wrapperCol: wCol,
    }
};

const FormLayout = {
    getFormLayout1,
    getFormLayout2
};

export default FormLayout;