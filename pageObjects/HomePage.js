const BasePage = require('./BasePage');

class HomePage extends BasePage {
    constructor() {
        super();
        this._discountSectionLocator = '.specials';
    }
    get discountSection() {
        return $(this._discountSectionLocator);
    }
}

module.exports = HomePage;