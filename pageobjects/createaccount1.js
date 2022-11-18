let createAccount1 = function(){
    let createAccountButton = element.all(by.xpath("(//span[contains(text(),'Create an Account')])[1]"));
    
    this.clickCreateAccount = function(){
        createAccountButton.click();
    }
}
module.exports = new createAccount1();