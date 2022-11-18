let homepage = require('../pageobjects/homepage');
let newYoga = require('../pageobjects/newyoga');
let items = require('../pageobjects/items');
let helenaHoodedFleece = require('../pageobjects/helenahoodedfleece');
let sale = require('../pageobjects/sale');
let teesOnSale = require('../pageobjects/teesonsale');
let karissaVNeckTee = require('../pageobjects/karissavnecktee');
let elisaEvercoolTee = require('../pageobjects/elisaevercooltee');
let comparingProducts = require('../pageobjects/comparingproducts');
let bags = require('../pageobjects/bags');
let overnightDuffleBag = require('../pageobjects/overnightdufflebag');
let search = require ('../pageobjects/search');
let checkout = require ('../pageobjects/checkout');
let placeOrder= require('../pageobjects/placeorder');
let createAccount1 = require('../pageobjects/createaccount1');
let createAccount2 = require('../pageobjects/createaccount2');


describe('demoapp', function() {

  beforeEach(function() {

      browser.waitForAngularEnabled(false);
      homepage.get('https://magento.softwaretestingboard.com/');
      browser.manage().window().maximize();

    });

  beforeAll(() => {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000; 
    });

  afterAll( async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  getRandomString = function(length) {
      var string = '';
      var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 
              for (i = 0; i < length; i++) {
                  string += letters.charAt(Math.floor(Math.random() * letters.length));
              }
              return string;
          }

  it('smoke test1', function() {
    expect(browser.getTitle()).toBe("Home Page - Magento eCommerce - website to practice selenium | demo website for automation testing | selenium practice sites | selenium demo sites | best website to practice selenium automation | automation practice sites Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
    homepage.clickNewYogaButton();
    expect(browser.getTitle()).toBe("New Luma Yoga Collection Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
    newYoga.clickNextButton(); //go to next page
    items.clickHelena();

    browser.sleep(2000);

    helenaHoodedFleece.chooseSize();
    helenaHoodedFleece.chooseColor();
    helenaHoodedFleece.clickAddToCart();

    browser.sleep(3000);

    helenaHoodedFleece.clickNavBarSale();
    sale.clickTeesOnSale();
    teesOnSale.clickOnKarissa();
    karissaVNeckTee.addToCompareButton();
    browser.navigate().back();
    browser.navigate().back();
    teesOnSale.clickOnElisa();
    elisaEvercoolTee.addToCompareButton();

    browser.sleep(2500);

    elisaEvercoolTee.clickCompareProducts();
    comparingProducts.addToCartButton();

    browser.sleep(4000);

    elisaEvercoolTee.chooseSize();
    elisaEvercoolTee.chooseColor();
    elisaEvercoolTee.chooseQty();
    elisaEvercoolTee.addToCartButton();

    browser.sleep(1500);

    elisaEvercoolTee.goToBags();
    bags.clickReview();
    overnightDuffleBag.clickAddToCart();

    browser.sleep(2000);

    overnightDuffleBag.searchGirl("Girl");
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    browser.sleep(2000);

    search.clickOnCart();

    browser.sleep(3000);

    search.clickOnCheckout();

    browser.sleep(4000);

    checkout.fillEmail("adna.torlo@"+getRandomString(5)+".ba");
    checkout.fillFirstName("Adna");
    checkout.fillLastName("Torlo");
    checkout.fillCompany("FIT");
    checkout.fillStreet("Braće Fejića");
    checkout.fillCity("Boston");
    checkout.fillState("Massachusetts");
    checkout.postcode("02108");
    checkout.telephone("062002501");
    checkout.clickShippingMethod();
    checkout.clickNext();

    browser.sleep(3000);
    
    placeOrder.clickPlaceOrder();

    browser.sleep(6000);

    createAccount1.clickCreateAccount();

    browser.sleep(2000);

    createAccount2.insertPassword("AdnaTorlo123!");
    createAccount2.insertPasswordConf("AdnaTorlo123!");
    createAccount2.clickSubmit();
  });

});
