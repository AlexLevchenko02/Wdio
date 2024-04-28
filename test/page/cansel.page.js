class canselPage {

    get cansel() {
        return $('//*[@id="__docusaurus"]/nav/div[3]/div[1]/button');
        }
        clickCansel () {
        this.cansel.click();
    }
}

module.exports = new canselPage()