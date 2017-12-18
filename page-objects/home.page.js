const Page = require('./base/page');

const HeaderComponent = require('./components/header.component');
const WidgetsMenuComponent = require('./components/widgets-menu.component');

class HomePage extends Page {

    // Components
    getHeader() { return HeaderComponent; }
    getWidgetsMenu() { return WidgetsMenuComponent; }

    // UI Elements
    getSignUpBtn() { return browser.element('.jumbotron .btn'); }

    // Methods
    navigate() {
        super.navigate('index.html');
    }

    getMenuItemByIndex(i) {
        return browser.element(`#sidebar a:nth-child(${i})`);
    }

}

module.exports = new HomePage();