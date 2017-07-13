/**
 * Set page title in wechat webview.
 * @param {String} title the new title for the current page
 */
const setDocumentTitle = (title) => {
    const body = document.body;
    document.title = title; // hack在微信等webview中无法修改document.title的情况
    const $iframe = document.createElement('iframe');
    $iframe.src = '/favicon.ico';
    $iframe.style.display = 'none';
    $iframe.onload = () => {
        setTimeout(() => {
            $iframe.onload = null;
            body.removeChild($iframe);
        }, 0);
    };
    body.appendChild($iframe);
};

/**
 * 判断是否为微信浏览器
 * @returns {boolean}
 */
const isWeiXinBrowser = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(ua);
};

const WXUtils = {
    setDocumentTitle,
    isWeiXinBrowser
};

export default WXUtils;