function work(input) {

    let hours = Number(input[0])

    let day = input[1]

    switch(day){
    
case 1:(day === "Monday")
    console.log("open");break
case 2:(day === "Tuesday")
    console.log("open");break
case 3:(day === "Wednesday")
    console.log("open");break
case 4:(day === "Thursday")
    console.log("open");break
case 5:(day === "Friday")
    console.log("open");break
case 6:(day === "Saturday")
    console.log("open");break
case 7:(day === "Sunday")
    console.log("closed");break
}

if(hours >= 10 && hours <= 18){
    console.log("open")

}

}
work(["11",
"Sunday"])