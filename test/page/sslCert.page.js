class sslCertPage {

    get sslCert() {
        return $('#sslcert');
        }
        sslCertShow () {
         console.log(this.sslCert.getText('href'));
    }
}

module.exports = new sslCertPage()