function toyShop(input){
    let price = Number(input[0])
    let puzzleCount = Number(input[1])
    let talkinDoll = Number (input[2])
    let teddyBearCount = Number (input[3])
    let minionsCount = Number (input[4])
    let trucks = Number (input[5])

    let toyCount= puzzleCount + talkinDoll + teddyBearCount + minionsCount+ trucks
    let toyPrice = puzzleCount + 2.60 + talkinDoll *3 + teddyBearCount* 4.10 + minionsCount * 8.20 + trucks* 2

    console.log(toyCount)
    console.log(toyPrice)

}
toyShop(["40.8","20","25","30","50","10"])