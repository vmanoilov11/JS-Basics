function school (input){

    let AmountOfPencils = Number (input[0])
    let AmountOfMarkerPen = Number(input[1])
    let AmountOfcleanInL = Number(input[2])
    let precentageOfSale = Number(input[3])
    

    let priceOfPencils = AmountOfPencils * 5.80
    let priceOfMarkerPen = AmountOfMarkerPen * 7.20
    let priceOfcleanInL = AmountOfcleanInL * 1.20
    let total = priceOfMarkerPen + priceOfPencils + priceOfcleanInL
    let precentage = precentageOfSale / 100

    let totalwithsale = total - (total * precentage)

    console.log(totalwithsale)


}
school(["2 ",
"3 ",
"4 ",
"25 "])