var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;
var chai = require('chai');  

const Utility = require('../utility/utility');
const util = new Utility();
const LoginPage = require('../pages/loginPage');
const lgPage = new LoginPage();
const HomePage = require('../pages/homePage');
const hmPage = new HomePage();

const { Builder, By, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
const timeout = 10000;
const businessBtn = By.xpath('//span[contains(text(), "Business")]');

describe('Test Case #1: CRUD new theme.', function() {
    before(function() {
        driver.get('https://commerceous.staging.devpayever.com');
    });
    it('User can login', function(done) {
        lgPage.login(driver);
        driver.then(title => driver.getTitle()).then(title => assert.equal(title, 'payever'));
        done();
    });
    it('Shop app can be opened', function(done) {
        hmPage.openShop(driver);
        done();
    });
    it('New theme can be created', function(done) {
        hmPage.openShop(driver);
        done();
    });
});
// after(function(done) {
//     return driver.quit();
//   });


