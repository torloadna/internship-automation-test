let sale = function(){
    let teesOnSale = element.all(by.xpath("//span[contains(text(),'Tees on sale')]"));

    this.clickTeesOnSale = function(){
        teesOnSale.click();
    }
}
module.exports = new sale();