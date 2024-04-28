class autoWaitPage {

    get autoWait() {
        return $('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[2]/div[3]');
        }
        async autoWaitViewPort () {
        console.log('"Auto Wait" is displayed in viewPort?: '+ await this.autoWait.isDisplayedInViewport());
    }
}

module.exports = new autoWaitPage()