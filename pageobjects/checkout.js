let checkout = function(){
    let email = element.all(by.xpath("(//input[@id='customer-email'])[1]"));
    let firstName = element.all(by.name("firstname"));
    let lastName = element.all(by.name("lastname"));
    let company = element.all(by.name("company"));
    let street = element.all(by.name("street[0]"));
    let city = element.all(by.name("city"));
    let state = element.all(by.name("region_id"));
    let postcode = element.all(by.name("postcode"));
    let country = element.all(by.name("country_id"));
    let telephone = element.all(by.name("telephone"));
    let shippingMethod = element.all(by.name("ko_unique_1"));
    let next = element.all(by.className("button action continue primary"));
    
    this.fillEmail = function(name){
        email.sendKeys(name);
    }
    this.fillFirstName = function(name){
        firstName.sendKeys(name);   
    }
    this.fillLastName = function(name){
        lastName.sendKeys(name);
    }
    this.fillCompany = function(name){
        company.sendKeys(name);
    }
    this.fillStreet = function(name){
        street.sendKeys(name);
    }
    this.fillCity = function(name){
        city.sendKeys(name);
    }
    this.fillState = function(name){
        state.sendKeys(name);
    }
    this.postcode = function(name){
        postcode.sendKeys(name);
    }
    this.fillCountry = function(name){
        country.sendKeys(name);
    }
    this.telephone = function(name){
        telephone.sendKeys(name);
    }
    this.clickShippingMethod = function(){
        shippingMethod.click();
    }
    this.clickNext = function(){
        next.click();
    }
}
module.exports = new checkout();