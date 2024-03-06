function lunch(input) {
    let nameOfTvSeries = input[0]
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let timeForLunch = breakDuration / 8
    let timeForRest = breakDuration / 4

    let totalTime = breakDuration - (timeForLunch + timeForRest)
    
    let diff = episodeDuration - totalTime

    if (episodeDuration <= totalTime) {
        console.log(`You have enough time to watch ${nameOfTvSeries} and left with ${totalTime - episodeDuration} minutes free time.`)

        

    } else {
        console.log(`You don't have enough time to watch ${nameOfTvSeries}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunch(["Teen Wolf",
    "48",
    "60"])
