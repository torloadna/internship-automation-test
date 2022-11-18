let createAccount2 = function(){
    let password = element.all(by.id("password"));
    let passwordConfirmation = element.all(by.id("password-confirmation"));
    let buttonSubmit = element.all(by.className("action submit primary"));
    
    this.insertPassword = function(name){
        password.sendKeys(name);
    }
    this.insertPasswordConf = function(name){
        passwordConfirmation.sendKeys(name);
    }
    this.clickSubmit = function(){
        buttonSubmit.click();
    }
}
module.exports = new createAccount2();