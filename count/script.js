var num = 0;

function countUp() {
    num = num + 1;
    document.getElementById("numDiv").innerHTML = num;
    console.log(num);

}

function countDown() {
    num = num - 1;
    document.getElementById("numDiv").innerHTML = num;
    console.log(num);

}

function say() {
    speak(num);
}