const getDiscountPrice = (itemPrice, membershipType) => {
    let discount = 0;

    const loyaltyLevel = loyaltyLevel.toLowerCase()

    if (loyaltyLevel === "gold"){
        discount = 0.2;
    }
    if (loyaltyLevel === "silver") {
        discount = 0.1;
    } 
const discountedPrice = itemPrice - itemPrice * discount;
return discountedPrice;
}
console.log(getDiscountPrice(45, "Gold"));