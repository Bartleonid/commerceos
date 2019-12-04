
const { Builder, By, until } = require('selenium-webdriver');
var assert = require('chai').assert;
const timeout = 10000;

class Utility {

	wait(driver, by) {
		try {
			// driver.executeScript('return document.readyState').then(function(return_value)
			driver.wait(until.elementLocated(by), timeout);
		} catch (e) {
			console.log(e + `waiting for element exceeded timeout: ${by}`);
			throw new Error(e + `waiting for element exceeded timeout: ${by}`);
			assert.fail;
		}
	}

	click(driver, by) {
		try {
			this.wait(driver, by);
			driver.findElement(by).click();
		} catch (e) {
			console.log(e + `element is not clicked : ${by}`);
			throw new Error(e + ` element is not clicked : ${by}`);
			assert.fail;
		}
	}

	type(driver, by, text) {
		try {
			this.wait(driver, by);
			driver.findElement(by).sendKeys(text);
		} catch (error) {
			console.log(e + `text is not typed into : ${by}`);
			throw new Error(e + ` text is not typed into : ${by}`);
			assert.fail;
		}
	}

}

module.exports = Utility;