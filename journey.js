function journey(input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let season = Number(input[index]);
    index++;

    let type;
    let destination;

    if (budget <= 100) {

        destination = "Bulgaria"

        if (season = "summer") {

            price = budget * 0.30;
            type = "Camp"
        } else {

            price = budget * 0.70;
            type = "Hotel"
        }
    } else if (budget <= 1000) {

        destination = "Balkans"

        if (season = "summer") {

            price = budget * 0.40;
            type = "Camp"
        } else {

            price = budget * 0.80;
            type = "Hotel"

        }

    } else if (budget > 1000) {

        destination = "Europe"

        if (season = "summer") {

            price = budget * 0.90;
            type = "Camp"

        } else {

            price = budget * 0.90;
            type = "Hotel"
        }


    }

    console.log(`Somewhere in ${destination}
${type} - ${price.toFixed(2)}`)
}
journey(["75", "winter"])