let overnightdufflebag=function(){
    
    let addtocart=element.all(by.id("product-addtocart-button"));
    let search=element.all(by.id("search"));

    this.clickaddtocart=function(){
        addtocart.click();
    }
    this.searchgirl=function(name){
        search.sendKeys(name);
    }

}

module.exports = new overnightdufflebag();