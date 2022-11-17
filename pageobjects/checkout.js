let checkout=function(){
    let email=element.all(by.xpath("(//input[@id='customer-email'])[1]"));
    let firstname=element.all(by.name("firstname"));
    let lastname=element.all(by.name("lastname"));
    let company=element.all(by.name("company"));
    let street=element.all(by.name("street[0]"));
    let city=element.all(by.name("city"));
    let state=element.all(by.name("region_id"));
    let postcode=element.all(by.name("postcode"));
    let country=element.all(by.name("country_id"));
    let telephone=element.all(by.name("telephone"));
    let shippingmethod=element.all(by.name("ko_unique_1"));
    let next=element.all(by.className("button action continue primary"));
    //element.all(by.name('//*[@id="U148VAI"]/option[29]')).click();
    
    this.fillemail=function(name){
        email.sendKeys(name);
    }
    this.fillfirstname=function(name){
        firstname.sendKeys(name);   
    }
    this.filllastname=function(name){
        lastname.sendKeys(name);
    }
    this.fillcompany=function(name){
        company.sendKeys(name);
    }
    this.fillstreet=function(name){
        street.sendKeys(name);
    }
    this.fillcity=function(name){
        city.sendKeys(name);
    }
    this.fillstate=function(name){
        state.sendKeys(name);
    }
    this.postcode=function(name){
        postcode.sendKeys(name);
    }
    this.fillcountry=function(name){
        country.sendKeys(name);
    }
    this.telephone=function(name){
        telephone.sendKeys(name);
    }
    this.clickshippingmethod=function(){
        shippingmethod.click();
    }
    this.clicknext=function(){
        next.click();
    }



}

module.exports = new checkout();