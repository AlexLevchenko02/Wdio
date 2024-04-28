class portPage {

    get port() {
        return $('#port');
        }
        portShow () {
         console.log(this.port.getText('href'));
    }
}

module.exports = new portPage()