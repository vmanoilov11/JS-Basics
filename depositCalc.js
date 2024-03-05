function solve(input){
 let depositedAmont = Number(input[0])
 let termOfTheDeposit = Number(input[1])
 let annualInterestRate = Number(input[2])
 let totalAmount = depositedAmont + termOfTheDeposit * ((depositedAmont * annualInterestRate)/ 12)
 console.log(totalAmount)
}
solve (["200",
"3",
"5.7"]
) 