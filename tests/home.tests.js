const chai = require('chai');
const expect = chai.expect;

const HomePage = require('../page-objects/home.page');

describe('HomePage', () => {

    describe('Header', () => {

        it('NavLinksShouldHaveCorrectValues', () => {
            HomePage.navigate();

            let menuItem = HomePage.getHeader().getSignUpBtn();

            expect(menuItem.getAttribute('text')).to.equal('Sign up');
            expect(menuItem.getAttribute('href')).to.contains('signup.html');
        });

    });

    describe('Jumbotron', () => {

        it('NavLinksShouldHaveCorrectValues', () => {
            HomePage.navigate();

            let menuItem = HomePage.getSignUpBtn();

            expect(menuItem.getAttribute('text')).to.equal('Sign up!');
            expect(menuItem.getAttribute('href')).to.contains('signup.html');
        });

    });

    describe('WidgetsMenu', () => {

        it('NavLinksShouldHaveCorrectValues', () => {
            HomePage.navigate();

            let menuItem = HomePage.getWidgetsMenu().getMenuItemByIndex(1);

            expect(menuItem.getAttribute('text')).to.equal('Link 1');
        });

    });

    describe('Content', () => {

        it('NavLinksShouldHaveCorrectValues', () => {
            HomePage.navigate();

            let menuItem = HomePage.getMenuItemByIndex(1);

            expect(menuItem.getAttribute('text')).to.equal('Link 4');
        });

    });

});