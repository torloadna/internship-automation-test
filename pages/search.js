let search=function(){
    
    let cart=element.all(by.className("minicart-wrapper"));
    let checkout=element.all(by.id("top-cart-btn-checkout"));
    
    this.clickoncart=function(){
        cart.click();
    }
    this.clickoncheckout=function(){
        checkout.click();
    }



}

module.exports = new search();