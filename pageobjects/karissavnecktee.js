let karissaVNeckTee = function(){
    let addToCompare = element.all(by.xpath("//span[contains(text(),'Add to Compare')]"));
    
    this.addToCompareButton = function(){
        addToCompare.click();
    }
}
module.exports = new karissaVNeckTee();