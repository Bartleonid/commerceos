// Tests/DefaultTest.js

const Utility = require('../utility/utility');
const util = new Utility();
const LoginPage = require('../pages/loginPage');
const lg = new LoginPage();
var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;

const { Builder, By, until } = require('selenium-webdriver');

// (function testLogin() {
    //     const driver = new Builder().forBrowser('chrome').build();
//     driver.get('https://commerceous.staging.devpayever.com');

//     try {
    //         lgPage.login(driver);

    //     } finally {
//         // driver.quit();
//     }
// });
const driver = new Builder().forBrowser('chrome').build();
before(function() {
    driver.get('https://commerceous.staging.devpayever.com');
});

describe('LoginTest', function() {
    it('should login and check title', function() {
        lgPage.login(driver);
        driver.then(title => driver.getTitle())
        .then(title => assert.equal(title, 'payever'));
        console.log(driver.getTitle());
    });
});
// driver.quit();

