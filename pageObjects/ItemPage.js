const BasePage = require('./BasePage');

class ItemPage extends BasePage {
    constructor() {
        super();
        this._priceLocator = '#pd-price';
        this._addToCartBtn = "#pd-buy-button";
        this._addedStateLocator = "//div[1]/h2/div";
        this._checkoutLocator = '[data-cypress="goToShoppingCart"]';
    }
    get price(){
        return $(this._priceLocator);
    }
    get addToCartBtn(){
        return $(this._addToCartBtn);
    }

    get addedState(){
        return $(this._addedStateLocator);
    }

    get checkout(){
        return $(this._checkoutLocator)
    }
}

module.exports = ItemPage;