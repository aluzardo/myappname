module.exports = function () {
    this.World = require("../support/world.js").World;

    this.Given(/^I load the app$/, function (callback) {
        browser.get( '' );
        callback();
    });

    this.Then(/^I should see the login screen$/, function (callback) {
        this.expect( browser.getLocationAbsUrl() ).to.eventually.equal('/login').and.notify(callback);
    });

    this.Given(/^I am on the login page$/, function (callback) {
        browser.get('#/login');
        this.expect( browser.getLocationAbsUrl() ).to.eventually.equal('/login').and.notify(callback);
    });

    this.When(/^I enter correct details$/, function (callback) {
        var email = element( by.id('loginFormEmail') );
        email.sendKeys('test@test.com');

        var password = element( by.id('loginFormPassword') );
        password.sendKeys('password');

        var loginButton = element( by.id('loginFormLogInButton') );
        loginButton.click();

        browser.driver.sleep(5 * 1000);

        callback();
    });

    this.Then(/^I successfully log in and see the home page$/, function (callback) {
        this.expect( browser.getLocationAbsUrl() ).to.eventually.equal('/home');
        this.expect( element( by.id('headerText') ).isPresent() ).to.eventually.equal(true);
        this.expect( element( by.id('headerText') ).getText() ).to.eventually.have.string('Hello Tester');
        this.expect( element( by.id('bodyText') ).isPresent() ).to.eventually.equal(true).and.notify(callback);
    });
};