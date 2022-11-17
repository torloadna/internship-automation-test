let karissavnecktee=function(){
    
    let addtocompare=element.all(by.xpath("//span[contains(text(),'Add to Compare')]"));
    
    this.addtocomparebutton=function(){
        addtocompare.click();
    }

}

module.exports = new karissavnecktee();