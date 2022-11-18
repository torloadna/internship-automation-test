let search = function(){
    let cart = element.all(by.className("minicart-wrapper"));
    let checkout = element.all(by.id("top-cart-btn-checkout"));
    
    this.clickOnCart = function(){
        cart.click();
    }
    this.clickOnCheckout = function(){
        checkout.click();
    }
}
module.exports = new search();