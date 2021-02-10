const BasePage = require('./BasePage');

class CheckoutPage extends BasePage{
    constructor() {
        super();
        this._insuranseSurchargeCheckbox = "#frmInsurance .checkbox__value";
        this._subTotal = '.price-subtotal div';
        this._total = '.price-total .price';
    }

    get insuranceSurchargeCheckbox(){
        return $(this._insuranseSurchargeCheckbox);
    }

    get subTotal(){
        return $(this._subTotal);
    }

    get total(){
        return $(this._total);
    }
}

module.exports =  CheckoutPage;