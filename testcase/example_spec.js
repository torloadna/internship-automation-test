let homepage = require('../pageobjects/homepage');
let newyoga = require('../pageobjects/newyoga');
let items = require('../pageobjects/items');
let helenahoodedfleece = require('../pageobjects/helenahoodedfleece');
let sale = require('../pageobjects/sale');
let teesonsale = require('../pageobjects/teesonsale');
let karissavnecktee = require('../pageobjects/karissavnecktee');
let elisaevercooltee = require('../pageobjects/elisaevercooltee');
let comparingoroducts = require('../pageobjects/comparingproducts');
let bags = require('../pageobjects/bags');
let overnightdufflebag = require('../pageobjects/overnightdufflebag');
let search = require ('../pageobjects/search');
let checkout = require ('../pageobjects/checkout');
let placeorder=require('../pageobjects/placeorder');
let createaccount1 = require('../pageobjects/createaccount1');
let createaccount2 = require('../pageobjects/createaccount2');


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
    expect(browser.getTitle()).toBe("Home Page - Magento eCommerce - website to practice selenium | demo website for automation testing | selenium practice sites | selenium demo sites | best website to practice selenium automation | automation practice sites Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites")
    homepage.clickNewYogaButton();
    newyoga.clicknextbutton(); //go to next page
    items.clickhelena();

    browser.sleep(2000);

    helenahoodedfleece.choosesize();
    helenahoodedfleece.choosecolor();
    helenahoodedfleece.clickaddtocart();

    browser.sleep(3000);

    helenahoodedfleece.clicknavbarsale();
    sale.clickteesonsale();
    teesonsale.clickonKarissa();
    karissavnecktee.addtocomparebutton();
    browser.navigate().back();
    browser.navigate().back();
    teesonsale.clickonElisa();
    elisaevercooltee.addtocomparebutton();

    browser.sleep(2500);

    elisaevercooltee.clickcompareproducts();
    comparingoroducts.addtocartbutton();

    browser.sleep(4000);

    elisaevercooltee.choosesize();
    elisaevercooltee.choosecolor();
    elisaevercooltee.chooseqty();
    elisaevercooltee.addtocartbutton();

    browser.sleep(1500);

    elisaevercooltee.gotobags();
    bags.clickreview();
    overnightdufflebag.clickaddtocart();

    browser.sleep(2000);

    overnightdufflebag.searchgirl("Girl");
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    browser.sleep(2000);

    search.clickoncart();

    browser.sleep(3000);

    search.clickoncheckout();

    browser.sleep(4000);

    checkout.fillemail("adna.torlo@"+getRandomString(5)+".ba");
    checkout.fillfirstname("Adna");
    checkout.filllastname("Torlo");
    checkout.fillcompany("FIT");
    checkout.fillstreet("Braće Fejića");
    checkout.fillcity("Boston");
    checkout.fillstate("Massachusetts");
    checkout.postcode("02108");
    checkout.telephone("062002501");
    checkout.clickshippingmethod();
    checkout.clicknext();

    browser.sleep(3000);
    
    placeorder.clickplaceorder();

    browser.sleep(6000);

    createaccount1.clickcreateaccount();

    browser.sleep(2000);

    createaccount2.insertpassword("AdnaTorlo123!");
    createaccount2.insertpasswordconf("AdnaTorlo123!");
    createaccount2.clicksubmit();


  });

});
