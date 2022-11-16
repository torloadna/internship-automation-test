let helenahoodedfleece=function(){
    let size = element.all(by.css("#option-label-size-143-item-167"));
    let color = element.all(by.css("#option-label-color-93-item-50"));
    let addtocart= element.all(by.css("#product-addtocart-button"));
    let sale=   element.all(by.css("#ui-id-8"));

    this.choosesize= function(){
        size.click();
    }
    this.choosecolor= function(){
        color.click();
    }
    this.clickaddtocart= function(){
        addtocart.click();
    }
    this.clicknavbarsale=function(){
        sale.click();
    }

}

module.exports = new helenahoodedfleece();