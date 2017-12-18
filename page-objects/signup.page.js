const Page = require('./base/page');

class SignupPage extends Page {

    // Methods
    navigate() {
        super.navigate('signup.html');
    }

}

module.exports = new SignupPage();