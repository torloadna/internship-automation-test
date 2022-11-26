let logOut = function(){
    let button = element.all(by.xpath('//div[@class="panel header"]//button[@type="button"]'));
    let signOutbutton = element.all(by.xpath('//div[@aria-hidden="false"]//a[normalize-space()="Sign Out"]'));

    this.clickButton = function(){
        button.click();
    }
    this.clickSignOutButton = function(){
        signOutbutton.click();
    }
    
}
module.exports = new logOut();