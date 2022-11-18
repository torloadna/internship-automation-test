let overnightDuffleBag = function(){
    let addToCart = element.all(by.id("product-addtocart-button"));
    let search = element.all(by.id("search"));

    this.clickAddToCart = function(){
        addToCart.click();
    }
    this.searchGirl = function(name){
        search.sendKeys(name);
    }
}
module.exports = new overnightDuffleBag();