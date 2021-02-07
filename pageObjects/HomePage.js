const BasePage = require('./BasePage')

class HomePage extends BasePage{
    constructor() {
        super();
        this._discountSectionLocator = '.specials';
    }
    get discountSection() {
        return $(this._discountSectionLocator);
    }
    waitLoaded(){
        browser.maximizeWindow();
        this.agreeToComplianceBtn.waitForDisplayed();
    }
}

module.exports = HomePage;