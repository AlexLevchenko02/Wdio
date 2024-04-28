class httpsPage {

    get https() {
        return $('#https');
        }
        httpsShow () {
         console.log(this.https.getText('href'));
    }
}

module.exports = new httpsPage()