class rootdirPage {

    get rootdir() {
        return $('#rootdir');
        }
        rootdirShow () {
         console.log(this.rootdir.getText('href'));
    }
}

module.exports = new rootdirPage()