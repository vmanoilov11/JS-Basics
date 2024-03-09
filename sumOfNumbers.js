function nums(input){

    let num = Number(input[0])

    let sum = 0

    let index = 1

    while(sum < num ){

        let currentNum = Number(input[index])
        sum+= currentNum
        index++
    }
    console.log(sum)

}
nums(["100",
"10",
"20",
"30",
"40"])
