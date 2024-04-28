class setWdioPage {

    get setWdio() {
        return $('.DocSearch-Input');
        }
        async wdioSetVelue(value) {
        await this.setWdio.setValue(value);
        
    }
}

module.exports = new setWdioPage()