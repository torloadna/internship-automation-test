let createaccount1=function(){
    
    let createaccountbutton=element.all(by.xpath("(//span[contains(text(),'Create an Account')])[1]"));
    
    this.clickcreateaccount=function(){
        createaccountbutton.click();
    }
    

}

module.exports = new createaccount1();