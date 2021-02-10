const { HomePage, DiscountPage, ItemPage, CheckoutPage } = require('../pageObjects');

describe('Search for the first discount skincare product and check the price', () => {
  it('should setup before test scenario', () => {
    HomePage.navigate();
    HomePage.waitLoaded();
    HomePage.agreeToComplianceBtn.click();
    HomePage.closeBanner();
  });

  it('should navigate to discount page', () => {
    HomePage.discountSection.click();
    DiscountPage.waitLoaded();
    expect(DiscountPage.url).toContain('aktsiyi');
  });

  it('should limit the Max Price', () => {
    DiscountPage.maxPrice.scrollIntoView();
    DiscountPage.maxPrice.click();
    DiscountPage.setMaxPrice('500');
    expect(DiscountPage.maxPrice.getValue()).toEqual('500');
  });

  it('should limit the Min Price', () => {
    DiscountPage.minPrice.scrollIntoView();
    DiscountPage.minPrice.click();
    DiscountPage.setMinPrice('0');
    expect(DiscountPage.minPrice.getValue()).toEqual('0');
  });

  it('should select only high-rated items', () => {
    browser.pause(1000);
    if (DiscountPage.agreeToComplianceBtn.isDisplayed()) {
      DiscountPage.agreeToComplianceBtn.click();
    }
    DiscountPage.highestRank.scrollIntoView();
    DiscountPage.highestRank.click();
    DiscountPage.closeBanner();
    expect(DiscountPage.highestRankInput.getAttribute('checked')).toEqual('true');
  });

  it('should select the first item', () => {
    const firstItemUrl = DiscountPage.firstItemOnPage.getAttribute('href');
    browser.url(firstItemUrl);
    expect(ItemPage.price.getText()).toBeDefined();
  });

  it('should add an item to cart', () => {
    ItemPage.addToCartBtn.click();
    expect(ItemPage.addedState.getText()).toEqual('Додано до кошика');
  });

  it('should navigate to CheckoutPage', () => {
    ItemPage.checkout.click();
    expect(browser.getUrl()).toContain('order');
  });

  it('insurance surcharge should be present', () => {
    expect(CheckoutPage.insuranseSurchargeCheckboxValue).toEqual('true');
  });

  it('should subtotal equal total after removing insurance surcharge', () => {
    CheckoutPage.insuranceSurchargeCheckbox.click();
    expect(CheckoutPage.subTotal.getText()).toEqual(CheckoutPage.total.getText());
  });
});
