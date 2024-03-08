function solve(input) {

    let index = 0

    let openTabs = Number(input[index]);
    index++
    let salary = Number(input[index])
    index++
    

    for (let i = 0; i < openTabs; i++) {
        let currentOpenTabs = input[index]
        index++

        if (currentOpenTabs === "Facebook") {
            salary = salary - 150;
        } else if (currentOpenTabs === "Instagram") {
            salary = salary -  100;
        } else if (currentOpenTabs === "Reddit") {
            salary =salary -  50;
        }else{
            salary = salary
        }



        if (salary <= 0) {
            console.log("You have lost your salary."); break;
        }
    }
    if(salary > 0 ){
        console.log(salary)
    }
}