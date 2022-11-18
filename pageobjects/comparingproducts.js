let comparingProducts=function(){
    let addToCart = element.all(by.xpath("(//button[@type='submit'])[2]"));
    
    this.addToCartButton = function(){
        addToCart.click();
    }
}
module.exports = new comparingProducts();