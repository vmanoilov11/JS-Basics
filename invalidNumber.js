function invalid(input) {
    let number = Number(input[0])

    if( number !== (0) && number <= 200 && number >= 100 ){
    console.log("")
    }else{
        console.log("invalid")
    }
}
invalid(["0"])