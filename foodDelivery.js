function food (input){
    let chickenMenu = Number(input[0]) * 10.35
    let fishMenu = Number(input[1]) * 12.40
    let vegMenu = Number (input[2]) * 8.15
    let desert = (fishMenu + chickenMenu + vegMenu) * 0.2
    let delivery = 2.50
    let all = chickenMenu + fishMenu + vegMenu + desert + delivery
    console.log(all)



}
food(["2" , "4" , "3"])
