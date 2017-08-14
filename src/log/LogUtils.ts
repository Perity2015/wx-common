declare const process: any;

class LogUtils {
    static warn(msg) {
        const nodeEnv = process.env.NODE_ENV || 'development';
        const isPro = nodeEnv === 'production';
        if (!isPro) {
            console.warn(msg);
        }
    };
}

export default LogUtils;