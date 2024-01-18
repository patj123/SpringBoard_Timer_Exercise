/*define the countdown function*/

function countDown(num) {
    let timer = setInterval(function () {
        num--
        if (num <= 0) {
            clearInterval(timer)
            console.log("Done")
        } else {
            console.log(num)
        }
    }, 1000)
}

//countDown(5)

function randomGame() {
    let num;
    let counter = 0;
    let timer = setInterval(function () {
        num = Math.random();
        console.log(num);
        counter += 1;
        if (num > .75) {
            clearInterval(timer)
            console.log(`It took ${counter} try/tries to get a number.`)
        }
    }, 1000);
}

randomGame()