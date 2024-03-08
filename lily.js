function lily(input) {

    let age = Number(input[0]);
    let priceOfWashingMachine = Number(input[1]);
    let priceForToy = Number(input[2]);
    let toyCounter = 0;
    let saveMoney = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCounter++
        } else {
            saveMoney += money;
            money += 10;
            saveMoney -= 1;

        }
    } 
    saveMoney += toyCounter * priceForToy;

    let diff = Math.abs(saveMoney - priceOfWashingMachine)

    if (saveMoney >= priceOfWashingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
lily(["21",
"1570.98",
"3"])