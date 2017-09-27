class HtmlUtils {

    static FormatRichText(richText) {
        if (richText) {
            richText = richText.replace(/(\d+)px/g, function (s, t) {
                s = s.replace('px', '');
                const value = parseInt(s) * 0.02;
                return value + "rem";
            });
        }
        return richText;
    }
}

export default HtmlUtils;