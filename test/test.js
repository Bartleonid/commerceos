let assert = require('chai').assert;
let should = require('chai').should();
let expect = require('chai').expect;
let chai = require('chai');  
let { Builder, By, until } = require('selenium-webdriver');

let Utility = require('../utility/utility');
let util = new Utility();
let LoginPage = require('../pages/loginPage');
let lgPage = new LoginPage();
let HomePage = require('../pages/homePage');
let hmPage = new HomePage();
let ThemePage = require('../pages/themePage');
let thPage = new ThemePage();

const timeout = 10000;
const url = 'https://commerceous.staging.devpayever.com';
// const url = 'https://google.com';
let driver = new Builder().forBrowser('chrome').build();
const front = By.xpath("//div[contains(text(), 'Front')]");
const expectedThemeText = By.xpath("//span[.='This test is completed!']");

describe('Test Case #1: CRUD new theme.', async function() {
    
    before(async function() {
        this.timeout(60000);
        await driver.get(url);
        await driver.wait(until.titleIs('payever'), timeout);
    });
    // it('User can login', async function(done) {
    //     let q = By.name('qq');
    //     util.type(driver, q, "nodejs")
    //     .then(() => driver.quit());
    //     done();
    // });
    it('User can login', async function(done) {
       lgPage.login(driver);
       done();
    });
    it('Shop app can be opened', async function(done) {
       hmPage.openShop(driver);
       done();
       let frontElem = await util.wait(driver, front);
       assert.isNotNull(frontElem);
    });
    it('New theme can be created', async function(done) {
        thPage.createTheme(driver);
        // let expectedText =  await util.getElementText(driver, expectedThemeText);
        // assert.equals(expectedText, expectedThemeText);
        done();
        // await util.wait(driver, font).then(() => driver.quit());
        // let elem = await driver.findElements(By.xpath("//div[contains(text(), 'Front')]"));
        // assert.isNotEmpty(elem).then(() => driver.quit());
        // done();
     });

});



