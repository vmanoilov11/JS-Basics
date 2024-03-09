function cinemaTickets(input){

    let index = 0 
    let command = input[index]
    index++
    let standartCounter = 0
    let studentCounter = 0
    let kidCounter = 0

    while(command !== "Finish"){
        let name = command
        let freeSpace = Number(input[index])
        index++

        let ticketType = input[index]
        index++
        let ticketCounter = 0
        while(ticketType !== "End"){
            ticketCounter++
            switch(ticketType){
                case "standart": standartCounter++;break
                case "student": studentCounter++; break
                case "kid": kidCounter++ ;break
            }

            if(ticketCounter >= freeSpace){
                break;
            }
            ticketType = input[index]
            index++
        }
        let res = ticketCounter / freeSpace * 100
        console.log(`${name}`)
        command = input[index]
        command++
    }

}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
