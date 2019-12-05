// Load dependecies

const Utility = require('../utility/utility');
const util = new Utility();
var assert = require('chai').assert, test = require('selenium-webdriver/testing'), webdriver = require('selenium-webdriver');

suite('Array', function() {
	setup(function() {
	  // ...
	});
  
	suite('#indexOf()', function() {
	  test('it should return -1 when not present', function() {
		assert.equal(-1, [1, 2, 3].indexOf(4));
	  });
	});
  });