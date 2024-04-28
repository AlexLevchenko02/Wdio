class nativePage {

    get native() {
        return $('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[2]/div[5]');
        }
        async nativeViewPort () {
        console.log('"Native Mobile Support" is displayed in viewPort?: '+ await this.native.isDisplayedInViewport());
    }
}

module.exports = new nativePage()