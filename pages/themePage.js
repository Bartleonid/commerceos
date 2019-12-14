var assert = require('chai').assert;
const Utility = require('../utility/utility');
const util = new Utility();
const { Builder, By, until } = require('selenium-webdriver');

const themes = By.xpath("//span[contains(text(), 'Themes')]");
const addTheme = By.xpath("//*[contains(text(), ' + Add Theme ')]");
const aText = By.css("[src='assets/ui-kit/icons-png/icon-b-text-colored-64.png']");
const shadowRoot = By.css("#content > div.canvas-container > pe-editor-canvas");
const shadowDom = By.css("svg.ng-star-inserted");
const close = By.xpath("//span[.='Close']");
const aqa = By.xpath("//*[contains(text(), 'AQA')]");

("#content > div.canvas-container > pe-editor-canvas /deep/ div > pe-editor-element-anchors > svg");

class ThemePage {

       async createTheme(driver) {
            try {
                await util.click(driver, themes);
                await util.click(driver, addTheme);
                let aqaElem =  await util.wait(driver, aqa);
                assert.isNotNull(aqaElem);
                await util.click(driver, aText);
                let rootElem = await driver.findElement(shadowRoot);
                // let expandedElem =  await util.expandRootElement(driver, rootElem);
                // await util.findShadowDomElement(expandedElem);

                // document.querySelector("#content > div.canvas-container > pe-editor-canvas").shadowRoot.querySelector("div > pe-editor-element-anchors > svg");
                var elem = await driver.executeScript("return document.querySelector('#content > div.canvas-container > pe-editor-canvas').shadowRoot.querySelector('div > pe-editor-element-anchors > svg');");
                console.log("my elem: ", elem)
                
                await elem.sendKeys("Testing");

                await util.click(driver, close);
            } catch (error) {
                console.log(error, "theme is not created ");
                assert.fail();
            }
        }
}

module.exports = ThemePage;