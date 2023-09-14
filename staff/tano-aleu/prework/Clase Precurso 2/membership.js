const getDiscountedPrice = (itemPrice, membershipType) => {
    let discount = 0;
    const loyaltyLevel = membershipType.toLowerCase();

    if (loyaltyLevel === "gold") {
        discount = 0.2;
    }

    if (loyaltyLevel === "silver") {
        discount = 0.1;
    }

    const discountedPrice = itemPrice - itemPrice * discount;
    return discountedPrice;
}

console.log(getDiscountedPrice(100, "gold"))