function books(input){

    let amountOfPages = Number(input[0])
    let pagesFor1Hour = Number(input[1])
    let numberOfDays = Number (input[2]) 

    let allHours = (amountOfPages / pagesFor1Hour) / numberOfDays
    
    console.log(allHours)





}
books(["212 ",
"20 ",
"2 "])