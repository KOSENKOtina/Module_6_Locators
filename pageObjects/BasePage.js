class BasePage{
    constructor() {
        this._agreeToComplianceLocator = '#exponea-cookie-compliance .btn';
    }
    navigate(urlToNavigate = ''){
        browser.url(urlToNavigate);
    }

    get agreeToComplianceBtn(){
        return $(this._agreeToComplianceLocator)
    }

    agreeToCompliance() {
        this.agreeToComplianceBtn.click();
    }

}

module.exports = BasePage;
