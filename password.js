function password(input){

    let index = 0
    let username = input[index]
    index++

    let pass = input[index]
    index++

    let data= input[index]
    index++

    let counter = 3

    while(data !== pass){
        data = input[index]
        index++

    }
    console.log(`Welcome ${username}!`)
}
password(["Gosho",
"secret",
"secret"])
