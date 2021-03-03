const { HomePage } = require('../pageobjects');

describe('using js executor', () => {
  before(() => {
    HomePage.navigate();
    HomePage.waitLoaded();
    HomePage.agreeToComplianceBtn.click();
    HomePage.closeBanner();
  });
  it('should click on discount', async () => {
    await browser.execute('document.querySelector(\'[data-cypress="mainMenu-АКЦІЇ"]\').click()');
    const url = await browser.execute('return document.URL');
    expect(url).toContain('aktsiyi');
  });

  it("should select the first product's url", async () => {
    const value = await browser.execute("return document.querySelector('[data-price]').firstElementChild.href");
    expect(value).toContain('https://');
  });
});
