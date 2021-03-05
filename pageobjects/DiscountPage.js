const BasePage = require('./BasePage');

class DiscountPage extends BasePage {
  constructor() {
    super();
    this._maxPriceLocator = '.slider-input-max';
    this._minPriceLocator = '.slider-input-min';
    this._highestRankLocator = '[title="Оцінка 5*"] input';
    this._firstItem = 'li.item a';
  }

  get maxPrice() {
    return $(this._maxPriceLocator);
  }

  get minPrice() {
    return $(this._minPriceLocator);
  }

  get highestRank() {
    return $(this._highestRankLocator);
  }

  get highestRankInput() {
    return $(this._highestRankLocator + ' input');
  }

  get firstItemOnPage() {
    return $(this._firstItem);
  }

  setMaxPrice(price) {
    this.maxPrice.setValue(price);
  }

  setMinPrice(price) {
    this.minPrice.setValue(price);
  }
}

module.exports = new DiscountPage();
