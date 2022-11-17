let sale=function(){
    
    let teesonsale=element.all(by.xpath("//span[contains(text(),'Tees on sale')]"));

    this.clickteesonsale=function(){
        teesonsale.click();
    }


}

module.exports = new sale();