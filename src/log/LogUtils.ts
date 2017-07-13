declare const process: any;
export const warn = (msg) => {
    const nodeEnv = process.env.NODE_ENV || 'development';
    const isPro = nodeEnv === 'production';
    if (!isPro) {
        console.warn(msg);
    }
};

const LogUtils = {
    warn
};

export default LogUtils;