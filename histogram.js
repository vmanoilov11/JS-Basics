function histogram(input) {

    let n = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0


    for (let i = 1; i <= n; i++) {
        let x = Number(input[i])
        if (x < 200) {
            p1++
        } else if (x >= 200 && x < 400) {
            p2++
        } else if (x >= 400 && x < 600) {
            p3++
        } else if (x >= 600 && x < 800) {
            p4++
        } else {
            p5++
        }
    }
    let p1Pr = p1 / n * 100
    let p2Pr = p2 / n * 100
    let p3Pr = p3 / n * 100
    let p4Pr = p4 / n * 100
    let p5Pr = p5 / n * 100

    console.log(p1Pr.toFixed(2) + "%")
    console.log(p2Pr.toFixed(2) + "%")
    console.log(p3Pr.toFixed(2) + "%")
    console.log(p4Pr.toFixed(2) + "%")
    console.log(p5Pr.toFixed(2) + "%")

}
histogram([20 , 53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])