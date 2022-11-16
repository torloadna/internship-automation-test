let homepage = require('../pages/homepage');
let newyoga = require('../pages/newyoga');
let items = require('../pages/items');
let helenahoodedfleece = require('../pages/helenahoodedfleece');
let sale = require('../pages/sale');
let teesonsale = require('../pages/teesonsale');
let karissavnecktee = require('../pages/karissavnecktee');
let elisaevercooltee = require('../pages/elisaevercooltee');
let comparingoroducts = require('../pages/comparingproducts');
let bags = require('../pages/bags');
let overnightdufflebag = require('../pages/overnightdufflebag');
let search = require ('../pages/search');
let checkout = require ('../pages/checkout');
let placeorder=require('../pages/placeorder');
let createaccount1 = require('../pages/createaccount1');
let createaccount2 = require('../pages/createaccount2');


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
    //element.all(by.name("country_id")).click();
    checkout.postcode("02108");
    //element.all(by.name('//*[@id="U148VAI"]/option[29]')).click();
    checkout.telephone("062002501");
    //browser.sleep(6000);
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
