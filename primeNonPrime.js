function solve(input) {

    let index = 0
    let command = input[index]
    index++
    let sumPrimeNums = 0
    let sumNonPrimeNums = 0

    while (command !== "stop") {
        let num = Number(command)

        if (num < 0) {
            console.log("Number is negative.")
            command = input[index]
            index++
            continue
        }

        if (num === 1) {
            sumPrimeNums += num
            command = input[index]
            index++
            continue
        }

        let isPrime = true

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false
                break

            }

        }
        if (isPrime) {
            sumPrimeNums += num

        } else {
            sumNonPrimeNums += num
        }

        command = input[index]
        index++
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`)
    
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`)




}
solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])


