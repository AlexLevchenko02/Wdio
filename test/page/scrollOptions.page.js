class scrollOptionsPage {

    get scrollOptions() {
        return $('#options');
        }
        async scroll() {
        await this.scrollOptions.scrollIntoView();
        
    }
}

module.exports = new scrollOptionsPage()