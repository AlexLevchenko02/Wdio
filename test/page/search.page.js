class searchPage {

    get search() {
        return $('.DocSearch-Button-Placeholder');
        }
        async searchClick() {
        await this.search.click();
        
    }
}

module.exports = new searchPage()