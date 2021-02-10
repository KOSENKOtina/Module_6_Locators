class BasePage{
    constructor() {
        this._agreeToComplianceLocator = '#exponea-cookie-compliance .btn';
        this._footerLocator = '.footer-paymentsSocialCopyrightWrapper';
    }
    get agreeToComplianceBtn(){
        return $(this._agreeToComplianceLocator);
    }

     navigate(url = ""){
         browser.url(url);
    };
    get url(){
        return browser.getUrl();
    }

    get footer(){
        return $(this._footerLocator);
    }

     waitLoaded(){
         browser.maximizeWindow();
        //  browser.waitUntil( () =>
        //      this.footer.waitForElementDisplayed(), {timeout: 5000, interval: 250, timeoutMsg: `Footer is not displayed after 5 seconds`}
        // );
    }
}

module.exports = BasePage;
