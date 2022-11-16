let teesonsale=function(){
    
    let karissa=element.all(by.xpath('//a[normalize-space()="Karissa V-Neck Tee"]'));
    let elisa=element.all(by.xpath('//a[contains(text(),"Elisa EverCool™ Tee")]'));


    this.clickonKarissa=function(){
        karissa.click();
    }

    this.clickonElisa = function(){
        elisa.click();
    }


}

module.exports = new teesonsale();