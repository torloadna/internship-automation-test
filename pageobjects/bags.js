let bags = function(){
    let review = element.all(by.css('a[href="https://magento.softwaretestingboard.com/overnight-duffle.html#reviews"]'));
    
    this.clickReview = function(){
        review.click();
    }
}
module.exports = new bags();