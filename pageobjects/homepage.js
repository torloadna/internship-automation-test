let homepage = function(){
    let shopNewYogaButton = element.all(by.className("action more button"));
    let women = element.all(by.xpath('//span[normalize-space()="Women"]'));
    let whatsNew = element.all(by.xpath('//a[@id="ui-id-3"]//span[1]'));
    let men = element.all(by.xpath('//span[normalize-space()="Men"]'));
    let gear = element.all(by.xpath('//span[normalize-space()="Gear"]'));
    let training = element.all(by.xpath('//span[normalize-space()="Training"]'));
    let sale = element.all(by.xpath('//span[normalize-space()="Sale"]'));
    let createAnAccount = element.all(by.xpath("(//a[normalize-space()='Create an Account'])[1]"));

    this.get = function(url){
        browser.get(url);
    }
    this.clickNewYogaButton = function(){
        shopNewYogaButton.click();
    }
    this.clickWomen = function(){
        women.click();
    }
    this.clickWomen = function(){
        women.click();
    }
    this.clickWhatsNew = function(){
        whatsNew.click();
    }
    this.clickMen = function(){
        men.click();
    }
    this.clickGear = function(){
        gear.click();
    }
    this.clickTraining = function(){
        training.click();
    }
    this.clickSale = function(){
        sale.click();
    }
    this.clickCreateAnAccount = function(){
        createAnAccount.click();
    }
}
module.exports = new homepage();