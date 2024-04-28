class hostnamePage {

    get hostname() {
        return $('#hostname');
        }
        hostnameShow () {
         console.log(this.hostname.getText('href'));
    }
}

module.exports = new hostnamePage()