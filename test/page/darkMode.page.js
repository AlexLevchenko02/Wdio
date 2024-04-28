class darkModePage {

    get darkMode() {
        return $('//*[@id="__docusaurus"]/nav/div[3]/div[1]/div/button');
        }
        async switchModes () {
        await this.darkMode.click();
        await browser.pause(500);
        await this.darkMode.click();
    }
}

module.exports = new darkModePage()