describe('demoapp', function() {

  beforeEach(function() {

      browser.waitForAngularEnabled(false);
      browser.get('https://magento.softwaretestingboard.com/');
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
    element.all(by.className("action more button")).click();
    //go to next page
    element.all(by.xpath("//body/div[2]/main[1]/div[3]/div[1]/div[4]/div[2]/ul[1]/li[4]/a[1]")).click();
    element.all(by.partialLinkText("Helena Hooded Flee")).click();

    browser.sleep(2000);

    element.all(by.css("#option-label-size-143-item-167")).click();
    element.all(by.css("#option-label-color-93-item-50")).click();
    element.all(by.css("#product-addtocart-button")).click();

    browser.sleep(3000);

    element.all(by.css("#ui-id-8")).click();
    element.all(by.xpath("//span[contains(text(),'Tees on sale')]")).click();
    element.all(by.partialLinkText("Karissa V-Neck T")).click();
    element.all(by.xpath("//span[contains(text(),'Add to Compare')]")).click();
    browser.navigate().back();
    browser.navigate().back();
    element.all(by.xpath('//a[contains(text(),"Elisa EverCool™ Tee")]')).click();
    element.all(by.xpath('//a[@class="action tocompare"]')).click();

    browser.sleep(2500);

    element.all(by.css('a[title="Compare Products"]')).click();
    element.all(by.xpath("(//button[@type='submit'])[2]")).click();

    browser.sleep(4000);

    element.all(by.id("option-label-size-143-item-170")).click();
    element.all(by.id("option-label-color-93-item-58")).click();
    element.all(by.id("qty")).clear();
    element.all(by.id("qty")).sendKeys("3");
    element.all(by.id("product-addtocart-button")).click();

    browser.sleep(1500);

    var gear=element(by.id("ui-id-6"));
    var bags=element(by.id("ui-id-25"));
    browser.actions().mouseMove(gear).mouseMove(bags).click().perform();
    element.all(by.css('a[href="https://magento.softwaretestingboard.com/overnight-duffle.html#reviews"]')).click();
    element.all(by.id("product-addtocart-button")).click();

    browser.sleep(2000);

    element.all(by.id("search")).sendKeys("Girl");
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    browser.sleep(2000);

    element.all(by.className("minicart-wrapper")).click();

    browser.sleep(3000);

    element.all(by.id("top-cart-btn-checkout")).click();

    browser.sleep(4000);

    element.all(by.xpath("(//input[@id='customer-email'])[1]")).sendKeys("adna.torlo@"+getRandomString(5)+".ba");
    element.all(by.name("firstname")).sendKeys("Adna");
    element.all(by.name("lastname")).sendKeys("Torlo");
    element.all(by.name("company")).sendKeys("FIT");
    element.all(by.name("street[0]")).sendKeys("Braće Fejića");
    element.all(by.name("city")).sendKeys("Boston");
    element.all(by.name("region_id")).sendKeys("Massachusetts");
    element.all(by.name("country_id")).click();
    element.all(by.name("postcode")).sendKeys("02108");
    element.all(by.name('//*[@id="U148VAI"]/option[29]')).click();
    element.all(by.name("telephone")).sendKeys("062002501");
    element.all(by.name("ko_unique_1")).click();
    element.all(by.className("button action continue primary")).click();

    browser.sleep(3000);

    element.all(by.id("billing-address-same-as-shipping-checkmo")).click();

    browser.sleep(1000);

    element.all(by.xpath('//button[@title="Place Order"]')).click();

    browser.sleep(3500);

    element.all(by.xpath("(//span[contains(text(),'Create an Account')])[1]")).click();

    browser.sleep(2000);
    
    element.all(by.id("password")).sendKeys("AdnaTorlo123!");
    element.all(by.id("password-confirmation")).sendKeys("AdnaTorlo123!");
    element.all(by.className("action submit primary")).click();

  });

});
