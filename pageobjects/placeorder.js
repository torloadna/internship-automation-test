let placeorder=function(){
    
    let placeorderbutton=element.all(by.xpath('//button[@title="Place Order"]'));
    
    this.clickplaceorder=function(){
        placeorderbutton.click();
    }
    



}

module.exports = new placeorder();