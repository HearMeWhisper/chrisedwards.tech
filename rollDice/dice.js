let numberOfDice = 2;
let die_value = [];

function newDiceNumber() {
    die_value = [];
    for (i = 1; i < 7; i++) document.getElementById("die" + i).innerHTML = "";
    for (i = 0; i < numberOfDice; i++) {
        die_value[i] = new Array(2);
    }
    for (i = 0, j = 1; i < numberOfDice; i++, j++) {
        die_value[i][0] = "<img src='../dice/die" + j + ".png' />";
        die_value[i][1] = j;
        document.getElementById("die" + j).innerHTML = die_value[i][0];
    }
}

function shuffle_dice() {
    for (i = 0, j = 1; i < die_value.length; i++, j++) {
        var rand = Math.floor(Math.random() * 6) + 1;
        die_value[i][0] = "<img src='../dice/die" + rand + ".png' />"
        die_value[i][1] = rand;
        document.getElementById("die" + j).innerHTML = die_value[i][0];
        document.getElementById("numbers").innerHTML = die_value[i][1] + "+" + die_value[j][1];
    }
}

function die_gif() {
    for (i = 0, j = 1; i < die_value.length; j++, i++) {
        die_value[i][0] = "<img src='../dice/die" + (j) + ".gif' />";
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