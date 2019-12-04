const Utility = require('../utility/utility');
const util = new Utility();
const { Builder, By, until } = require('selenium-webdriver');

const username = By.css('[name="UserName"]');
const password = By.css('[type="password"]');
const btn = By.css("button[type='submit']");

class LoginPage {

        login(driver) {
            try {
                util.type(driver, username, 'aqa@payever.org');
                util.type(driver, password, 'Aqacool123!');
                util.click(driver, btn);
            } catch (e) {
                console.log(e + 'was not able to login...');
            }
        }
}

module.exports = LoginPage;