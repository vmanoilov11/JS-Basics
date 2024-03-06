function solve(input){
    let hours = Number (input[0])
    let minutes = Number(input[1])


    let timeInMin = hours * 60 + minutes
    timeInMin = timeInMin + 15
    
    let h = Math.floor(timeInMin/60)
    let min = timeInMin % 60

    if (h >= 24){
        h = 0
    }

    if(min <10 ){
        console.log(`${h}:0${min}`)

    } else {
        console.log(`${h}:${min}`)
    }
    

}
solve(["12", "46"])