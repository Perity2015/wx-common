class CookieUtils {
    /**
     * 保存Cookie
     * @param name  key
     * @param value value
     * @param min   有效时间（min）
     */
    static saveCookie(name, value, min) {
        let expires = "";
        if (min) {
            const date = new Date();
            date.setTime(date.getTime() + (min * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };

    /**
     * 读取cookie
     * @param name
     * @returns {any}
     */
    static readCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i in  ca) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length)
            }
        }
        return null;
    };

    /**
     * 移除Cookie
     * @param name
     */
    static removeCookie(name) {
        CookieUtils.saveCookie(name, "", -1);
    };
}

export default CookieUtils;