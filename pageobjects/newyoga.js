let newyoga=function(){
    let nextbutton=element.all(by.xpath("//body/div[2]/main[1]/div[3]/div[1]/div[4]/div[2]/ul[1]/li[4]/a[1]"));


    this.clicknextbutton=function(){
        nextbutton.click();
    }


}

module.exports = new newyoga();