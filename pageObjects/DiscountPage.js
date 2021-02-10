const BasePage = require('./BasePage');

class DiscountPage extends BasePage{
    constructor(){
        super();
        this._maxPriceLocator = ".slider-input-max";
        this._minPriceLocator = ".slider-input-min";
        this._highestRankLocator = '[title="Оцінка 5*"]';
        this._categoryLocator = '//*[@id="param-filter"]/div[1]/div[2]/div[6]';
        this._firstItem = "li.item a";
    }
    get maxPrice(){
        return $(this._maxPriceLocator);
    }

    get minPrice(){
        return $(this._minPriceLocator);
    }

    get category(){
        return $(this._categoryLocator);
    }

    get highestRank(){
        return $(this._highestRankLocator);
    }
    get highestRankInput(){
        return $(this._highestRankLocator + " input")
    }
    get firstItemOnPage(){
        return $(this._firstItem);
    }

     setMaxPrice(price){
         this.maxPrice.setValue(price)
    }

     setMinPrice(price){
         this.minPrice.setValue(price)
    }
}
module.exports = DiscountPage;