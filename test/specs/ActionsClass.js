const { until, By } = require('selenium-webdriver');

const webDriver = require('selenium-webdriver');
const testDriver = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();

describe('using actions class', function () {
  it('should navigate and move to discount section', async () => {
    await testDriver.get('https://www.notino.ua/');
    await testDriver.sleep(1000);
    const element = $('[data-cypress="mainMenu-АКЦІЇ"]');
    await testDriver.actions().click(element, webDriver.Button.LEFT).perform();
    await testDriver.wait(until.elementLocated(By.className('footer-paymentsSocialCopyrightWrapper')), 1500);
    const currentUrl = await testDriver.getCurrentUrl();
    expect(currentUrl).toContain('aktsii');
  });
});
