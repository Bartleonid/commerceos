const Utility = require('../utility/utility');
const util = new Utility();
const { Builder, By, until } = require('selenium-webdriver');

const username = By.css('[name="UserName"]');
const password = By.css('[type="password"]');
const btn = By.css("button[type='submit']");

class LoginPage {

        async login(driver) {
            try {
               await util.type(driver, username, 'aqa@payever.org');
               await util.type(driver, password, 'Aqacool123!');
               await util.click(driver, btn);
            } catch (error) {
                console.log(error + 'user is not able to login ');
                assert.fail
            }
        }
}

module.exports = LoginPage;