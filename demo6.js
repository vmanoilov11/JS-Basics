function solve(input){

let index = 0
let location = Number(input[index++])

   for (let i = 0; i < location; i++) {
            let avrExtraction = Number(input[index])
            index++
            let days = Number(input[index])
            index++

            let sumExtraction = 0

            for (let j = 0; j < days; j++) {
                let extraction = Number(input[index])
                index++
                sumExtraction += extraction;
            }
            let average = sumExtraction /days;
            if(average >= avrExtraction) {
                console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`)
            }else{
                console.log(`You need ${(avrExtraction - average).toFixed(2)} gold.`);
            }
    }
}
solve(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])
