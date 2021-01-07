const { htmlToText } = require('html-to-text');

module.exports = {
    getPlainText: html => {
        return htmlToText(html).replace(/\n/g, ' ');
    }
}