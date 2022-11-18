let items = function(){
    let helenaHoodedFleece = element.all(by.partialLinkText("Helena Hooded Flee"));

    this.clickHelena = function(){
        helenaHoodedFleece.click();
    }
}
module.exports = new items();