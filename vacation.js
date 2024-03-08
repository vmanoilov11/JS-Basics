function vacation(input){

    let index = 0
    let neededMoney = Number(input[index])
    index++
    let money = Number(input[index])
    index++

    let dayCounter = 0
    let spendCounter = 0
    let isSaveMoney = false

    while(money < neededMoney){
        dayCounter++
        let type = input[index]
        index++
        let tempMoney= Number(input[index])
        index++

        if(type === "save"){
            spendCounter = 0
            money+= tempMoney
        }else if(type === "spend"){
            spendCounter++
            money -= tempMoney
            if(money<0){
                money = 0
            }
        }

        }if(spendCounter === 5){
        console.log(`You can't save the money.`)
        console.log(`${dayCounter}`)
        isSaveMoney = false;
        
    }

    if(isSaveMoney){
        console.log(`You saved the money for ${dayCounter} days.`)
    }
    
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
