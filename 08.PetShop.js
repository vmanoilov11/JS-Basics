function calculateExpenses(dogFoodCount, catFoodCount) {
   
    let dogFoodExpense = dogFoodCount * 2.50;
    let catFoodExpense = catFoodCount * 4;

    let totalExpense = dogFoodExpense + catFoodExpense;

    console.log(totalExpense.toFixed(2) + " lv.");
}
calculateExpenses(5, 4);
