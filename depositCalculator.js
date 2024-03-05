function solve(input){
    let depositedMoney = Number(input[0])
    let time = Number (input[1])
    let precentage = Number(input[2])

    let totalMoney = depositedMoney + time * ((depositedMoney*(precentage / 100 )) /12)
    
    console.log (totalMoney) 
  
}
solve(["200 ",
"3 ",
"5.7 "])