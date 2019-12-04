// Load dependecies

const Utility = require('../utility/utility');
const util = new Utility();
var assert = require('chai').assert, test = require('selenium-webdriver/testing'), webdriver = require('selenium-webdriver');

// Our test

// Get driver
// var driver = new webdriver.Builder().
// withCapabilities(webdriver.Capabilities.firefox()).
// build();
// var driver = new webdriver.Builder().
// withCapabilities(webdriver.Capabilities.edge()).
// build();
// var driver = new webdriver.Builder().
// withCapabilities(webdriver.Capabilities.ie()).
// build();
var driver = new webdriver.Builder().withCapabilities(
	webdriver.Capabilities.chrome()).build();

// Go to URL
driver.get('https://commerceos.staging.devpayever.com/entry/login');
util.clickElement(driver, "button[type='submit']");
describe('End to End Test Suite', done => {
	before(done => {
		console.log('Before everything login to the page');
		driver.get('https://commerceos.staging.devpayever.com/entry/login').then(function (res) {


			driver
				.findElement(By.id('mat-input-0'))
				.sendKeys('cuneyt')
				.then(() => driver.findElement(By.id('mat-input-1')).sendKeys('sifre123'))
				.then(() => driver.findElement(By.css("button[type='submit']")).click())
				.then(() => {
					driver.wait(until.elementLocated(By.id('message'))).then(() => {
						done();
					});
				});
		});
	});

	// Find title and assert
	// driver.executeScript('return document.title').then(
	// 	function (return_value) {
	// 		assert.equal(return_value, 'The Internet')
	// 	});

	// Quit webdriver
	driver.quit();
})
