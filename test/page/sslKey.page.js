class sslKeyPage {

    get sslKey() {
        return $('#sslkey');
        }
        sslKeyShow () {
         console.log(this.sslKey.getText('href'));
    }
}

module.exports = new sslKeyPage()