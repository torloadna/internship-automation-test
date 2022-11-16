let homepage=function(){
    let shopNewYogaButton=element.all(by.className("action more button"));


    this.get=function(url){
        browser.get(url);
    }

    this.clickNewYogaButton=function(){
        shopNewYogaButton.click();
    }


}

module.exports = new homepage();