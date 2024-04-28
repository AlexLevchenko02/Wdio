class testPage {

    get test() {
        return $('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[2]/div[1]');
        }
        async testViewPort () {
        console.log('"Test in Real Environments" is displayed in viewPort?: '+ await this.test.isDisplayedInViewport());
    }
}

module.exports = new testPage()