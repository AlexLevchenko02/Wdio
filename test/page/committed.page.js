class committedPage {

    get committed() {
        return $('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[2]/div[6]');
        }
        async committedViewPort () {
        console.log('"Committed Community" is displayed in viewPort?: '+ await this.committed.isDisplayedInViewport());
    }
}

module.exports = new committedPage()