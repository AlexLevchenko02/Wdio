class scrollportPage {

    get scroll() {
        return $('#port');
        }
        async scrollportShow() {
        await this.scroll.scrollIntoView();
        
    }
}

module.exports = new scrollportPage()