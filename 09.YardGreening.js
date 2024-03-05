function calculatePrice(squareMeters) {
    let totalPrice = squareMeters * 7.61;

    let discount = 0.18 * totalPrice;

    let finalPrice = totalPrice - discount;

    console.log("The final price is: " + finalPrice.toFixed(2) + " lv.");
    console.log("The discount is: " + discount.toFixed(2) + " lv.");
}
calculatePrice(550);
