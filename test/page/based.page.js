class basedPage {

    get based() {
        return $('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[2]/div[4]');
        }
        async basedViewPort () {
        console.log('"Based on Web Standards" is displayed in viewPort?: '+ await this.based.isDisplayedInViewport());
    }
}

module.exports = new basedPage()