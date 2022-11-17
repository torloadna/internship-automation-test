let items=function(){
    let helenahoodedfleece=element.all(by.partialLinkText("Helena Hooded Flee"));


    this.clickhelena=function(){
        helenahoodedfleece.click();
    }


}

module.exports = new items();