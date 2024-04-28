class scrollPage {

    get scroll() {
        return $('[href="https://github.com/webdriverio"]');
        }
        scrollMethod() {
        this.scroll.scrollIntoView();
    }
}

module.exports = new scrollPage()