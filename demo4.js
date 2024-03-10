function solve(input){

    let index = 0
    let command = input[index]
    index++
    

    let kidsCounter = 0
    let adultsCounter = 0
    let toyCounter = 0
    let sweatersCounter = 0
    let toysPrice = 0
    let sweatersPrice = 0

    while(command !== "Christmas"){

        let age = Number(command)

        if(age <= 16){
            kidsCounter++
            toyCounter++
        }else if(age > 16){
            adultsCounter++
            sweatersCounter++
        }

        command = input[index]
        index++


    }

    toysPrice = toyCounter * 5
    sweatersPrice = sweatersCounter * 15

    console.log(`Number of adults: ${adultsCounter}`)
    console.log(`Number of kids: ${kidsCounter}`)
    console.log(`Money for toys: ${toysPrice}`)
    console.log(`Money for sweaters: ${sweatersPrice}`)





}
solve(['16','16','16','16','16', "Christmas"])
