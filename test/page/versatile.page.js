class versatilePage {

    get versatile() {
        return $('//*[@id="__docusaurus_skipToContent_fallback"]/header/div/div[2]/div[2]');
        }
        async versatileViewPort () {
        console.log('"Versatile and Feature Rich" is displayed in viewPort?: '+ await this.versatile.isDisplayedInViewport());
    }
}

module.exports = new versatilePage()