class BasePage {
  constructor() {
    this._agreeToComplianceLocator = '#exponea-cookie-compliance .btn';
    this._footerLocator = '.footer-paymentsSocialCopyrightWrapper';
    this._bannerCloseBtn = '.exponea-close-cross';
  }

  get agreeToComplianceBtn() {
    return $(this._agreeToComplianceLocator);
  }

  navigate(url = '') {
    browser.url(url);
  }

  get url() {
    return browser.getUrl();
  }

  get footer() {
    return $(this._footerLocator);
  }

  waitLoaded() {
    browser.maximizeWindow();
    browser.waitUntil(() => this.footer.waitForDisplayed(), {
      timeout: 5000,
      interval: 250,
      timeoutMsg: `Footer is not displayed after 5 seconds`
    });
  }

  closeBanner() {
    if ($(this._bannerCloseBtn).isDisplayed()) $(this._bannerCloseBtn).click();
  }
}

module.exports = BasePage;
