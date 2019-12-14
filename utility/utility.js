
let { Builder, By, until } = require('selenium-webdriver');
let assert = require('chai').assert;
const timeout = 30000;

class Utility {

	async wait(driver, by) {
		try {
			await driver.wait(until.elementLocated(by), timeout);
			var element = await driver.findElement(by);
			await driver.wait(until.elementIsVisible(element), timeout);
		} catch (e) {
			throw new Error(e + 'waiting for element exceeded timeout:' + by);
		}
		return element;
	}

	async click(driver, by) {
		try {
			await this.wait(driver, by);
			await driver.findElement(by).click();
			console.log('element ' + by + ' is clicked');
		} catch (e) {
			throw new Error(e + 'element is not clicked :' + by);
		}
	}

	
	async doubleClick(driver, by) {
		try {
			await this.wait(driver, by);
			await driver.findElement(by).doubleClick();
			console.log('element ' + by + ' is double clicked');
		} catch (e) {
			throw new Error(e + 'element is not double clicked :' + by);
		}
	}
	
	async type(driver, by, text) {
		try {
			await this.wait(driver, by);
			await driver.findElement(by).sendKeys(text);
			console.log('typing ' + text + ' into ' + by);
		} catch (e) {
			throw new Error(e + 'text is not typed into :' + by);
		}
	}
	
	async getElementText(driver, by) {
		try {
			await this.wait(driver, by);
			let elemText = await driver.findElement(by).getText();
			console.log(' typing ' + text + ' into ' + by);
		} catch (e) {
			throw new Error(e + ' text is not typed into :' + by);
		}
		return elemText;
	}
	
	async typeInShadowElement(driver, shadowRootElem, shadowDomElement, text) {
		try {
			element = await this.findShadowDomElement(driver, shadowRootElem, shadowDomElement);
			console.log(' expected element :' + element);
			console.log('typing ' + text + ' into ' + shadowDomElement);
		} catch (e) {
			throw new Error(e + ' text is not typed into :' + shadowDomElement);
		}
	}

	async findShadowDomElement(driver, shadowDomElement) {  
		let element;  
//		await (shadowRoot = this.getExtShadowRoot(driver, shadowRootElem));
		// await shadowRoot.then(async (result) => {
			   await (element = driver.findElement(shadowDomElement).type(text));  
			   return element
			// });
  
}

async expandRootElement(driver, by) { 
	   let shadowHost;
	//    await (shadowHost = driver.findElement(by));  
	   let element = driver.executeScript("return arguments[0].shadowRoot", by);
	   console.log(' expected test :' + element);
	   return element;
	}

}


module.exports = Utility;