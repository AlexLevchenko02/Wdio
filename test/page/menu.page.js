class menuPage {

    get burgerButton() {
        return $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/button')
        }
        clickBurgerButton () {
            this.burgerButton.click();
    }
}

module.exports = new menuPage()