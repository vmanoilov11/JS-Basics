function solve(input){
    let plastic = Number(input[0])
    let amoutOfPaint = Number(input[1])
    let thinner = Number(input[2])
    let time = Number(input[3])
    let plasticBag = 0.40

    let priceForplastic = (plastic + 2) * 1.5
    let priceForPaint = (amoutOfPaint + amoutOfPaint * 0.1) * 14.5
    let priceForThinner = thinner * 5.00
    let all = priceForPaint + priceForplastic + priceForThinner + plasticBag
    let workers = (all * 0.3) * time
    let total = all + workers

    console.log(total)




}
solve(["10 ",
"11 ",
"4 ",
"8 "])