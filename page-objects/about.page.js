const Page = require('./base/page');

class AboutPage extends Page {

    // Methods
    navigate() {
        super.navigate('about.html');
    }

}

module.exports = new AboutPage();