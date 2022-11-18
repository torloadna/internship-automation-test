let teesOnSale = function(){
    let karissa = element.all(by.xpath('//a[normalize-space()="Karissa V-Neck Tee"]'));
    let elisa = element.all(by.xpath('//a[contains(text(),"Elisa EverCool™ Tee")]'));

    this.clickOnKarissa = function(){
        karissa.click();
    }

    this.clickOnElisa = function(){
        elisa.click();
    }
}
module.exports = new teesOnSale();