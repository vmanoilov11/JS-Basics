function toys(input) {


    let price = Number(input[0])
    let puzzle = Number(input[1])
    let talkinDoll = Number(input[2])
    let teddyBear = Number(input[3])
    let minion = Number(input[4])
    let truck = Number(input[5])

    let totalCount = puzzle + talkinDoll + teddyBear + minion + truck
    let totalPrice = puzzle * 2.60 + talkinDoll * 3 + teddyBear * 4.10 + minion * 8.20 + truck * 2

    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75
    }

    totalPrice = totalPrice * 0.90

    let diff = Math.abs(totalPrice - price)

    if (totalPrice >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }



}
toys(["320",
"8",
"2",
"5",
"5",
"1"])