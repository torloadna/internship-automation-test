let helenaHoodedFleece = function(){
    let size = element.all(by.css("#option-label-size-143-item-167"));
    let color = element.all(by.css("#option-label-color-93-item-50"));
    let addToCart = element.all(by.css("#product-addtocart-button"));
    let sale = element.all(by.css("#ui-id-8"));

    this.chooseSize = function(){
        size.click();
    }
    this.chooseColor = function(){
        color.click();
    }
    this.clickAddToCart = function(){
        addToCart.click();
    }
    this.clickNavBarSale = function(){
        sale.click();
    }
}
module.exports = new helenaHoodedFleece();