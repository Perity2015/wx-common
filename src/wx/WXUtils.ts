class WXUtils {
    /**
     * Set page title in wechat webview.
     * @param {String} title the new title for the current page
     */
    static setDocumentTitle(title) {
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
    static isWeiXinBrowser() {
        const ua = navigator.userAgent.toLowerCase();
        return /micromessenger/.test(ua);
    };
}

export default WXUtils;