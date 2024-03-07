function hotelRoom(input) {
 
    let month = input[0];
    let stayCount = Number(input[1]);
 
    let priceApartment = 0;
    let priceStudio = 0;
    
 
    switch (month) {
        case "May":
        case "October":
            priceApartment = stayCount * 65.00;
            priceStudio = stayCount * 50.00;
            break;
        case "June":
        case "September":
            priceApartment = stayCount * 68.70;
            priceStudio = stayCount * 75.20;
            break;
        case "July":
        case "August":
            priceApartment = stayCount * 77.00;
            priceStudio = stayCount * 76.00;
            break;
    }
    if(month === "May" || month === "October") {
        if(stayCount > 14) {
            priceApartment *= 0.90;
            priceStudio *= 0.70;
        }else if(stayCount > 7 && stayCount <= 14) {
            priceApartment = stayCount * 65.00;
            priceStudio *= 0.95;
        }else {
            priceApartment = stayCount * 65.00;
            priceStudio = stayCount * 50.00;
        }
    }else if(month === "June" || month === "September") {
        if(stayCount > 14) {
            priceApartment *= 0.90;
            priceStudio *= 0.80;
        }else {
            priceApartment = stayCount * 68.70;
            priceStudio = stayCount * 75.20;
        }
    }else if(month === "July" || month === "August") {
        if(stayCount > 14) {
            priceApartment *= 0.90;
            priceStudio = stayCount * 76.00;
        }else {
            priceApartment = stayCount * 77.00;
            priceStudio = stayCount * 76.00;
        }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}