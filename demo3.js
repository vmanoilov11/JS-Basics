function solve(input){

    let index = 0
    let cats = Number(input[index])
    index++

    let smallCounter = 0
    let bigCounter = 0
    let hugeCounter = 0

    let totalGr = 0

    for(let i = 1; i <= cats; i++){

        let grFoodEaten = Number(input[index])
        index++

        if(grFoodEaten >= 100 && grFoodEaten < 200){
            smallCounter++
            totalGr+=grFoodEaten
        }else if(grFoodEaten >= 200 && grFoodEaten <300){
            bigCounter++
            totalGr+=grFoodEaten
        }else if(grFoodEaten >= 300 && grFoodEaten < 400){
            hugeCounter++
            totalGr+=grFoodEaten
        }

    }

    let foodEatenInKg = totalGr / 1000

    let priceForFood = foodEatenInKg * 12.45


    console.log(`Group 1: ${smallCounter} cats.`)
    console.log(`Group 2: ${bigCounter} cats.`)
    console.log(`Group 3: ${hugeCounter} cats.`)
    console.log(`Price for food per day: ${priceForFood.toFixed(2)} lv.`)
    

    


}
solve
(["6",
"102",
"236",
"123",
"399",
"342",
"222"])

