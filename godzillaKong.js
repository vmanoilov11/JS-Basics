function godKong(input) {
    let budget = Number(input[0])
    let extrasCount = Number(input[1])
    let clothesPrice = Number(input[2])

    let decor = budget * 0.10

    let totalClothesPrice = 0

    if(extrasCount >= 150){
        totalClothesPrice = extrasCount * (clothesPrice * 0.90)
    }else{
        totalClothesPrice = extrasCount * clothesPrice;
    }

    let diff2 = Math.abs((decor + totalClothesPrice ) - budget)

    if ((decor + totalClothesPrice) > budget) {

        console.log("Not enough money!")
        console.log(`Wingard needs ${diff2.toFixed(2)} leva more.`)
        
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff2.toFixed(2)} leva left.`)

    }


}
godKong(["9587.88",
"222",
"55.68"])