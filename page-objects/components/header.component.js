class HeaderComponent {

    // UI Elements
    getSignUpBtn() { return browser.element('ul.nav > li:nth-child(3) > a'); }

}

module.exports = new HeaderComponent();