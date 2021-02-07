const {HomePage} = require('../../pageObjects/HomePage');
const {DiscountPage}= require('../../pageObjects/DiscountPage');


describe("Search for the first discount skincare product and check the price", () => {
  const HomePage = new HomePage();
  before(async () => {
    await HomePage.navigate();
    await HomePage.waitLoaded();
    await HomePage.agreeToCompliance();
  });

  it("should navigate to discount page", () => {
    HomePage.discountSection.click();
    expect(DiscountPage.url()).toContain("aktsiyi");
  });

  it("should navigate to specific category", () => {
    DiscountPage.category;
    DiscountPage.category.scrollIntoView();
    DiscountPage.category .click();
    expect($(".category-tree__item--active").getText()).toEqual(
      "Косметика для обличчя"
    );
  });

  it("should limit the Max Price", () => {
    const maxPrice = $(".slider-input-max");
    maxPrice.scrollIntoView();
    maxPrice.click();
    maxPrice.setValue("500");
    expect(maxPrice.getValue()).toEqual("500");
  });

  it("should limit the Min Price", () => {
    const maxPrice = $(".slider-input-min");
    maxPrice.scrollIntoView();
    maxPrice.click();
    maxPrice.setValue("0");
    expect(maxPrice.getValue()).toEqual("0");
  });

  xit("should select only high-rated items", async () => {
    await browser.pause(1000);
    const highestRateCheckbox = await $('[title="Оцінка 5*"]');
    highestRateCheckbox.scrollIntoView();
    await highestRateCheckbox.click();
    await highestRateCheckbox.scrollIntoView();
    if (await (await $(".exponea-close-cross")).isDisplayed()) {
      await (await $(".exponea-close-cross")).click();
    }
    expect(
      await $('[title="Оцінка 5*"] .checkbox__input').getAttribute("checked")
    ).toEqual("true");
  });

  it("should select the first item", () => {
    const firstItem = $("li.item a");
    const firstItemUrl = firstItem.getAttribute("href");
    browser.url(firstItemUrl);
    expect($("#pd-price").getText()).toBeDefined();
  });

  it("should add an item to cart", () => {
    const addToCart = $("#pd-buy-button");
    addToCart.click();
    const added = $("//div[1]/h2/div");
    expect(added.getText()).toEqual("Додано до кошика");
  });

  it("should navigate to checkout", async () => {
    const goToCart = await $('[data-cypress="goToShoppingCart"]');
    await goToCart.click();
    expect(await browser.getUrl()).toContain("order");
  });

  it("should remove insurance surcharge", () => {
    const insurance = $("#frmInsurance .checkbox__value");
    insurance.click();
    expect($(".price-subtotal div").getText()).toEqual(
      $(".price-total .price").getText()
    );
  });
});
