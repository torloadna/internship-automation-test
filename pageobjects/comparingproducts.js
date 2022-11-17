let comparingoroducts=function(){
    
    let addtocart=element.all(by.xpath("(//button[@type='submit'])[2]"));
    
    this.addtocartbutton=function(){
        addtocart.click();
    }

}

module.exports = new comparingoroducts();