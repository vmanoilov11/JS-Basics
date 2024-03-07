function demo(input) {

    let age = Number(input[0])
    let gender = input[1]

    if(gender === "m"){
        if(age >= 16){
        console.log("Mr.")

    }else{
        console.log("Master")}

    }if(gender === "f")
        if(age < 16){
        console.log("Miss")
    }else{
        console.log("Ms.")
    }
    



}
demo(["21",
"m"])