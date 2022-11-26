let createNewAccount = function(){
    let firstName = element.all(by.id("firstname"));
    let lastName = element.all(by.id("lastname"));
    let email = element.all(by.id("email_address"));
    let password = element.all(by.id("password"));
    let passwordConfirmation = element.all(by.id("password-confirmation"));
    let buttonCreateAccount = element.all(by.xpath('//button[@title="Create an Account"]'));

    this.enterFirstName = function(name){
        firstName.sendKeys(name);
    }
    this.enterLastName = function(name){
        lastName.sendKeys(name);
    }
    this.enterEmail = function(mail){
        email.sendKeys(mail);
    }
    this.enterPassword = function(pass){
        password.sendKeys(pass);
    }
    this.enterPasswordConfirmation = function(pass){
        passwordConfirmation.sendKeys(pass);
    }
    this.clickCreateAndAccountButton = function(){
        buttonCreateAccount.click();
    }
}
module.exports = new createNewAccount();