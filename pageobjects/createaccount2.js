let createaccount2=function(){
    
    
    let password=element.all(by.id("password"));
    let passwordconfirmation=element.all(by.id("password-confirmation"));
    let buttonsubmit=element.all(by.className("action submit primary"));
    
    this.insertpassword=function(name){
        password.sendKeys(name);
    }
    this.insertpasswordconf=function(name){
        passwordconfirmation.sendKeys(name);
    }
    this.clicksubmit=function(){
        buttonsubmit.click();
    }

}

module.exports = new createaccount2();