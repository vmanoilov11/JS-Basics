function trainTheTrainers(input){

    index = 0
    let jury = Number(input[index])
    index++

    let command = input[index]
    index++
    let sumOfGrade = 0
    let counter = 0
    while(command !== "Finish"){
        
        let name = command
        let temSumOfFrade = 0

        for(let i = 0; i < jury; i++){
            counter++
            let grade = Number(input[index])
            index++
            temSumOfFrade += grade
            sumOfGrade += grade
        }
        let avgTempGrade = temSumOfFrade / jury
        console.log(`${name} - ${avgTempGrade.toFixed(2)}.`)


        command = input[index]
        index++
    }
    let avgGrade = sumOfGrade / counter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

