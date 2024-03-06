function solve(input){
    let a = Number(input[0])
    let b = Number(input[1])
    let c = Number(input[2])
     
    let sum = a + b + c
    let min = Math.floor(sum/60)
    let seconds = sum % 60
    
    if(seconds <10 ){
        console.log(`${min}:0${seconds}`)
    }else {
        console.log(`${min}:${seconds}`)
    }

}
solve(["35",
"45",
"44"])