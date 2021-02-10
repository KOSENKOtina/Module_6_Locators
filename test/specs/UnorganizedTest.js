const {HomePage, DiscountPage, ItemPage, CheckoutPage} = require('../../pageObjects');

describe('Search for the first discount skincare product and check the price', () => {
    let homePage, discountPage, itemPage, checkout;
    before( () => {
        homePage = new HomePage();
        discountPage = new DiscountPage();
        itemPage = new ItemPage();
        checkout = new CheckoutPage();
    });
    it('should setup before test scenario',  () => {
        homePage.navigate();
        homePage.waitLoaded();
        homePage.agreeToComplianceBtn.click();
    });

    it('should navigate to discount page',  () => {
        homePage.discountSection.click();
        discountPage.waitLoaded();
        expect(discountPage.url).toContain('aktsiyi');
    });

    it('should navigate to specific category',  () => {
        discountPage.category;
        discountPage.category.scrollIntoView();
        discountPage.category.click();
        expect(discountPage.category.getText()).toEqual('Косметика для обличчя');
    });

    it('should limit the Max Price',  () => {
        discountPage.maxPrice.scrollIntoView();
        discountPage.maxPrice.click();
        discountPage.setMaxPrice('500');
        expect(discountPage.maxPrice.getValue()).toEqual('500');
    });

    it('should limit the Min Price',  () => {
        discountPage.minPrice.scrollIntoView();
        discountPage.minPrice.click();
        discountPage.setMinPrice('0');
        expect(discountPage.minPrice.getValue()).toEqual('0');
    });

    xit('should select only high-rated items',  () => {
        browser.pause(1000);
        discountPage.highestRank.scrollIntoView();
        discountPage.highestRank.click();
        //todo refactor to a class method
        if (($('.exponea-close-cross')).isDisplayed()) {
            ($('.exponea-close-cross')).click();
        }
        expect(discountPage.highestRankInput.getAttribute('checked')).toEqual('true');
    });

    it('should select the first item',  () => {
        const firstItemUrl = discountPage.firstItemOnPage.getAttribute('href');
        browser.url(firstItemUrl);
        expect(itemPage.price.getText()).toBeDefined();
    });

    it('should add an item to cart',  () => {
        itemPage.addToCartBtn.click();
        expect(itemPage.addedState.getText()).toEqual('Додано до кошика');
    });

    it('should navigate to checkout',  () => {
        itemPage.checkout.click();
        expect(browser.getUrl()).toContain('order');
    });

    it('insurance surcharge should be present',  () => {
        expect(checkout.insuranceSurchargeCheckbox.getAttribute('checked')).toBeTruthy();
    });

    it('should subtotal equal total after removing insurance surcharge',  () => {
        checkout.insuranceSurchargeCheckbox.click();
        expect(checkout.subTotal.getText()).toEqual(checkout.total.getText());
    });
});
