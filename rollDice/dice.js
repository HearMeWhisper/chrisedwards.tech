let numberOfDice = 6;
let die_value = [];
let sum = 0;
function newDiceNumber() {
    die_value = [];
    for (i = 1; i < 7; i++) document.getElementById("die" + i).innerHTML = "";
    for (i = 0; i < numberOfDice; i++) {
        die_value[i] = new Array(2);
    }
    for (i = 0, j = 1; i < numberOfDice; i++, j++) {
        die_value[i][0] = "<img class='die' src='../dice/die" + j + ".png' />";
        die_value[i][1] = j;
        document.getElementById("die" + j).innerHTML = die_value[i][0];
    }
}

function shuffle_dice() {
    document.getElementById("math").style.display = "block"
    let addition = "";
    sum = 0;
    for (i = 0, j = 1; i < die_value.length; i++, j++) {
        var rand = Math.floor(Math.random() * 6) + 1;
        die_value[i][0] = "<img class='die' src='../dice/die" + rand + ".png' />"
        die_value[i][1] = rand;
        document.getElementById("die" + j).innerHTML = die_value[i][0];
        addition += ` ${die_value[i][1]}` + " ";
        sum += + die_value[i][1];
        if (i < die_value.length -1) {addition += "+"; } else addition += "= ";
        
    }
   
    document.getElementById("numbers").innerHTML = addition + sum;
    return sum;
}

function showMath(){
    var numBlock =  document.getElementById('numbers');
    console.log(numBlock.style.display)
    if (numBlock.style.display === "none") {
        document.getElementById("show").innerHTML = "Hide Math";
    numBlock.style.display = "block";
  } else {
    numBlock.style.display = "none";
  }

}

function inputCorrect(){
    answer = document.getElementById('answer').value;
    if (answer == sum) {alert('Nice job!'); shuffle_dice();}
    else if (answer > sum) alert('Sorry, try again, too high...');
    else if (answer < sum) alert('Sorry, try again, too low...');
    document.getElementById('answer').value = '';
}

function die_gif() {
    for (i = 0, j = 1; i < die_value.length; j++, i++) {
        die_value[i][0] = "<img class='die' src='../dice/die" + (j) + ".gif' />";
        document.getElementById("die" + j).innerHTML = die_value[i][0];
    }
    setTimeout(shuffle_dice, 600)
}

function changeNumberofDice() {
    numberOfDice = document.querySelector('input[name="number"]:checked').value;
    newDiceNumber();
}
//shuffle_dice();
newDiceNumber();