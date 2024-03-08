function tennis(input){

    let index = 0
    let count = Number(input[index]);
    index++
    let startPoints = Number(input[index]);
    index++

    let score = 0
    let winCount = 0
     
    for(let i = 0; i < count; i++ ){
        let rank = input[index]
        index++
        if (rank === "W"){
            score += 2000
            winCount++

        }else if(rank === 'F'){
            score += 1200
        }else {
            score +=720
        }
    }

    let totalScore = startPoints + score

    console.log(`Final points: ${totalScore}`)

    let averagePoints = Math.floor(score/count)

    console.log(`Average points: ${averagePoints}`)

    let percentageWin = (winCount / count) * 100

    console.log((percentageWin).toFixed(2) + "%")

    


}
tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])