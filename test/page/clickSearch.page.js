class clickSearchPage {

    get clickSearch() {
        return $('[href="/docs/wdio-nuxt-service/"]');
        }
        async search() {
        await this.clickSearch.click();
        
    }
}

module.exports = new clickSearchPage()