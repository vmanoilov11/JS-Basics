function boat(input) {

    let index = 0

    let budget = Number(input[index]);
    index++
    let season = input[1];
    index++
    let fishermans = Number(input[index]);
    index++

    let price = 0;

            switch (season) {
        case "Spring":
            price = 3000; break;
        case "Summer":
        case "Autumn":
            price = 4200; break;
        case "Winter":
            price = 2600; break;



        } if(fishermans <= 6){
        price = price  * 0.90

        }else if(fishermans >= 7 && fishermans <=11){
        price = price * 0.85

        }else if(fishermans >= 12){
        price = price * 0.75
    }

        if(fishermans % 2 == 0 && season !== "Autumn"){
        price = price * 0.95
        }

        let diff = Math.abs(budget - price)

        if(budget >= price){
            console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
        }else{
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
        }
}
boat(["2000",
"Winter",
"13"])






