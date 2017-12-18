class WidgetsMenuComponent {

    // UI Elements

    // Methods
    getMenuItemByIndex(i) {
        return browser.element(`#widgets a:nth-child(${i})`);
    }

}

module.exports = new WidgetsMenuComponent();