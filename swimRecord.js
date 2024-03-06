function swim(input) {
    let record = Number(input[0])
    let distance = Number(input[1])
    let timeInSecFor1M = Number(input[2])

    let distanceInSec = distance * timeInSecFor1M

    let timeWithBlock = Math.floor(distance / 15) * 12.5

    let ivanRecord = distanceInSec + timeWithBlock

    let diff = ivanRecord - record


    if (record > ivanRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanRecord.toFixed(2)} seconds.`)

    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
swim(["55555.67",
"3017",
"5.03"])