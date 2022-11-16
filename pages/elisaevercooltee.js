let elisaevercooltee=function(){
    
    let addtocompare=element.all(by.xpath('//a[@class="action tocompare"]'));
    let compareproducts= element.all(by.css('a[title="Compare Products"]'));
    let size = element.all(by.id("option-label-size-143-item-170"));
    let color = element.all(by.id("option-label-color-93-item-58"));
    let qty=element.all(by.id("qty"));
    let addtocart=element.all(by.id("product-addtocart-button"));
    let gear=element(by.id("ui-id-6"));
    let bags=element(by.id("ui-id-25"));
    
    this.addtocomparebutton=function(){
        addtocompare.click();
    }

    this.clickcompareproducts=function(){
        compareproducts.click();
    }

    this.choosesize=function(){
        size.click();
    }
    this.choosecolor=function(){
        color.click();
    }
    this.chooseqty=function(){
        qty.clear();
        qty.sendKeys("3");
    }
    this.addtocartbutton=function(){
        addtocart.click();
    }
    this.gotobags=function(){
        browser.actions().mouseMove(gear).mouseMove(bags).click().perform();
    }


}

module.exports = new elisaevercooltee();