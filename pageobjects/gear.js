let gear = function(){
    let picture1 = element.all(by.xpath('//img[@src="https://magento.softwaretestingboard.com/pub/media/wysiwyg/gear/gear-main.jpg"]'));
    let picture2 = element.all(by.xpath('//span[normalize-space()="Shop Fitness"]'));
    let picture3 = element.all(by.xpath("//strong[contains(text(),'Here’s to you!')]"));
    let picture4 = element.all(by.xpath('//span[normalize-space()="Shop Bags"]'));
    let picture5 = element.all(by.xpath('//span[normalize-space()="Shop Equipment"]'));
    let picture6 = element.all(by.xpath('//span[normalize-space()="Shop Watches"]'));

    this.clickPicture1 = function(){
        picture1.click();
    }
    this.clickPicture2 = function(){
        picture2.click();
    }
    this.clickPicture3 = function(){
        picture3.click();
    }
    this.clickPicture4 = function(){
        picture4.click();
    }
    this.clickPicture5 = function(){
        picture5.click();
    }
    this.clickPicture6 = function(){
        picture6.click();
    }
}
module.exports = new gear();