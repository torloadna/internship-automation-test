let elisaEvercoolTee = function(){
    let addToCompare = element.all(by.xpath('//a[@class="action tocompare"]'));
    let compareProducts = element.all(by.css('a[title="Compare Products"]'));
    let size = element.all(by.id("option-label-size-143-item-170"));
    let color = element.all(by.id("option-label-color-93-item-58"));
    let qty = element.all(by.id("qty"));
    let addToCart = element.all(by.id("product-addtocart-button"));
    let gear = element(by.id("ui-id-6"));
    let bags = element(by.id("ui-id-25"));
    
    this.addToCompareButton = function(){
        addToCompare.click();
    }
    this.clickCompareProducts = function(){
        compareProducts.click();
    }
    this.chooseSize = function(){
        size.click();
    }
    this.chooseColor = function(){
        color.click();
    }
    this.chooseQty = function(){
        qty.clear();
        qty.sendKeys("3");
    }
    this.addToCartButton = function(){
        addToCart.click();
    }
    this.goToBags = function(){
        browser.actions().mouseMove(gear).mouseMove(bags).click().perform();
    }
}
module.exports = new elisaEvercoolTee();