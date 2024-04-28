class dotenvPage {

    get dotenv() {
        return $('#dotenv');
        }
        dotenvShow () {
         console.log(this.dotenv.getText('href'));
    }
}

module.exports = new dotenvPage()