function pc(input) {

    let budgetPeter = Number(input[0])
    let videoCardsCount = Number(input[1])
    let processorsCount = Number(input[2])
    let ramCount = Number(input[3])

    let videoCardsPrice = videoCardsCount * 250
    let processorsPrice = processorsCount * (videoCardsPrice * 0.35)
    let ramPrice = ramCount * (videoCardsPrice * 0.10)

    let total = videoCardsPrice + processorsPrice + ramPrice

    let totalSale = 0


    if (videoCardsCount > processorsCount) {
        totalSale = total - total * 0.15
    } else {
        totalSale = total
    }

    let diff = Math.abs(budgetPeter - totalSale)
    


    if (budgetPeter >= totalSale) {
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }


}
pc(["920.45",
    "3",
    "1",
    "1"])