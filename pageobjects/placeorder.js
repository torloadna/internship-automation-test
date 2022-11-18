let placeOrder = function(){
    let placeOrderButton = element.all(by.xpath('//button[@title="Place Order"]'));
    
    this.clickPlaceOrder = function(){
        placeOrderButton.click();
    }
}
module.exports = new placeOrder();