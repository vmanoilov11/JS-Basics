function basketball(input){
    tax = Number(input[0])
    sneakers = tax - tax * 0.40;
    clothes = sneakers - sneakers * 0.20;
    ball = clothes / 4; 
    acc = ball / 5;
    all = tax + sneakers + clothes + ball + acc;
    console.log(all)

 
}
basketball(["365"])