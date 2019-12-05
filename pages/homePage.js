var assert = require('chai').assert;
const Utility = require('../utility/utility');
const util = new Utility();
const { Builder, By, until } = require('selenium-webdriver');

const businessBtn = By.xpath("//span[contains(text(), 'Business')]");
const shopIcon = By.css("[data-pe-app='shop']");

class HomePage {

        openShop(driver) {
            try {
                util.click(driver, businessBtn);
                util.click(driver, shopIcon);
            } catch (error) {
                console.log(error, "shop is not open ");
                assert.fail;
            }
        }
}

module.exports = HomePage;