const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this._discountSectionLocator = '[data-cypress="mainMenu-АКЦІЇ"]';
  }

  get discountSection() {
    return $(this._discountSectionLocator);
  }
}

module.exports = new HomePage();
