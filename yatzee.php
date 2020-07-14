<!DOCTYPE html>
<meta charset="UTF-8">
<html>

<head> 
<link rel="stylesheet" type="text/css" href="menu.css" />
<link rel="icon" type="image/ico" href="yatzee.ico">
<style>
body{background-color:#d1cbcd;cursor:default; font-size: 130%;}
#score{border:2px solid black; background-color:black; color:white; border-radius:7px; float:left; box-shadow: 7px 5px 2.5px #5F5F5F;border-collapse: collapse; border-style:hidden; width:30%; z-index:0 }

.cells{padding:5px ;border-bottom:4px solid #2E2E45; border-right:2px solid gray;}
<#--.cells:hover{padding:5px; background-color:#fdd394; border-radius: 5px; border-bottom:4px solid #2E2E45; border-right:2px solid gray; }-->
.cells1{ background-color:#B266B2; padding:5px;}


@media (max-device-width: 550px){.cells{padding:5px ;border-bottom:4px solid #2E2E45; border-right:2px solid gray; height: 35px}
<#--.cells:hover{padding:5px; background-color:#fdd394; border-radius: 5px; border-bottom:4px solid #2E2E45; border-right:2px solid gray; }-->
.cells1{border-radius: 5px; background-color:#B266B2; padding:5px; height: 30px}}

.dice{border: 5px solid black; height:200px; width:65%; text-align:center; padding:0px; margin:auto; background-color:#61a598; box-shadow: 7px 5px 2.5px #5F5F5F;}
.dice_pic{height:70px; width:70px; text-align:center; vertical-align:-20%; }
.dice_pic_hold{height:60px; width:60px; text-align:center; vertical-align:bottom;}
#center{text-align:center}
#btn{border-radius:10px; background-color:#8a8587; color:white; text-align:center; margin:auto; border: 2.5px solid black; height:70px; width:100px; border-radius:15px;box-shadow: 7px 5px 2.5px #5F5F5F;
   -webkit-user-select:none;
   -khtml-user-select:none;
   -moz-user-select:none;
   -ms-user-select:none;
   -o-user-select:none}
#btn:hover{border-radius:10px; background-color:#a19d9f; color:white; text-align:center; margin:auto; border: 2.5px solid black; height:70px; width:100px; border-radius:15px; vertical-align:-30%;box-shadow: 7px 5px 2.5px #5F5F5F}
#how{width:10%; border: 1px black solid;margin-right:.2%; float:right; box-shadow: 7px 5px 2.5px #5F5F5F;}
#how-div{ width:400px; border-radius:10px;border: 2px black solid; background-color:white; z-index:3; display:none; position:absolute; left:35%; top:10%;
padding:2%; overflow:auto; height:65%}
#how:hover{border: 3px black solid}
#smX{height:35px; width:35px; float:right;}
#score_table{ height:75px; width: 150px; margin-left: 25px; background-color: white; float:left;}
</style>
</head>

<body>
  <div id="nav_menu">
  </div>
<script src="menu.js"></script> 

</div>

<br />
<br />
<br />

<div id="scorecard"></div>
<br />
<br />
<div onclick="die_gif()" id="btn">Roll!</div>
<br />
<br />
<div id="how-div">
<img id="smX" onclick="how_to()" src="x.png"/>
<h2>How to Play</h2>
<h3>Object of the Game</h3>
<p>The object of Yahtzee is to obtain the highest score from throwing 5 dice.
The game consists of 13 rounds. In each round, you roll the dice and then score the roll in one of 13 categories. You must score once in each category. The score is determined by a different rule for each category.
The game ends once all 13 categories have been scored.</p>
<h3>Game Start</h3>
<p>To start with, roll all the dice. After rolling you can either score the current roll (see below), or re-roll any or all of the dice.
You may only roll the dice a total of 3 times. After rolling 3 times you must choose a category to score.</p>
<h3>Scoring</h3>
<p>To score your combination of 5 dice, you click one of the 13 boxes. There are two sections to the score table - the Upper Section and the Lower Section.
Once a box has been scored, it cannot be scored again for the rest of the game, so choose wisely.</p>
<h3>Upper Section Scoring</h3>
<p>If you score in the upper section of the table, your score is the total of the specified die face.
So if you roll:
5 - 2 - 5 - 6 - 5 and score in the Fives category, your total for the category would be 15, because there are three fives, which are added together.
If the One, Three or Four Categories were selected for scoring with this roll, you would score a zero.
If placed in the Two or Six category, you would score 2 and 6 respectively.
Bonus: If the total of Upper scores is 63 or more, add a bonus of 35. Note that 63 is the total of three each of 1s, 2s, 3s, 4s, 5s and 6s.</p>
<h3>Lower Section Scoring</h3>
<p>In the lower scores, you score either a set amount, or zero if you don't satisfy the category requirements.
3 and 4 of a kind For 3 of a kind you must have at least 3 of the same die faces. You score the total of all the dice. For 4 of a kind you would need 4 die faces the same.
Small and Large Straight A Straight is a sequence of consecutive die faces, where a small straight is 4 consecutive faces, and a large straight 5 consecutive faces.
Small straights score 30 and a large 40 points.
So if you rolled:
2 - 3 - 2 - 5 - 4
you could score 30 in small straight or 0 in large straight.
Full House: A Full House is where you have 3 of a kind and 2 of a kind. Full houses score 25 points.
i.e.:
3 - 3 - 2 - 3 - 2
would score 25 in the Full House category.
Yahtzee: A Yahtzee is 5 of a kind and scores 50 points, although you may elect NOT to score it as a yahtzee, instead choosing to take it as a top row score and safegaurd you bonus.</p>
</div>
<div class="center">
<table class="dice">
<tr class="center"><td id="die1" class='dice_pic' onclick='hold(this)'> </td>
<td id="die2" class='dice_pic' onclick='hold(this)'> </td> 
<td id="die3" class='dice_pic' onclick='hold(this)'> </td> 
<td id="die4" class='dice_pic' onclick='hold(this)'> </td> 
<td id="die5" class='dice_pic' onclick='hold(this)'> </td> </tr>
</table>
</div>
<br />
<br />
<?php
#$score_data = array file(test.txt);
$score = [];
$score = explode("\n", file_get_contents("ScoreBoardDict.txt"));
#echo $score[0];
/*echo'
<div id="score_table" style="margin-left:25px; background-color:white; height:100%; width: 150px ">
  <table>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
    <tr>
      <td>'.$score[0].'</td>
      <td>'.$score[5].'</td>
  </tr>
  <tr>
      <td>'.$score[1].'</td>
      <td>'.$score[6].'</td>
</tr>
<tr>
      <td>'.$score[2].'</td>
      <td>'.$score[7].'</td>
</tr>
<tr>
      <td>'.$score[3].'</td>
      <td>'.$score[8].'</td>
</tr>
<tr>
      <td>'.$score[4].'</td>
      <td>'.$score[9].'</td>
</tr>
<tr>
  </table>
  ';*/
?>
</div>
<!--<form action="submit_score.php"  method="POST">
<input type="text" name="name" value="Chris"><br>
<input type="text" name="score" value=""><br>
<input type="submit">
</form>
-->
<div id="help">
<img src="how.png" id="how" onclick="how_to()"/>
</div>
<script type="text/javascript">
var i, j, q, p;
var str, hold_die_start;
var ones, twos, threes, fours, fives, sixes, sub, three_kind, four_kind, full_house, sm_staight, lg_straight, chance, yaztee;
var one_num, two_num, three_num, four_num, five_num, six_num, num_total;
var ones_final, twos_final, threes_final, fours_final, fives_final, sixes_final, bonus, sub_total, final_total;
var start = 0
var rows = 32
var columns = 2
var turn_over = false;
var turn = 0
var yatzee_counter = false;
var die_value = []
for (i=0; i<5; i++) {
die_value[i] = new Array(2);
}
for (i=0, j = 1; i<5; i++, j++) {
die_value[i][0] = "<img src='../dice/die"+j+".png' />";
die_value[i][1] = false;
}

document.getElementById("how-div").style.display = "none";
document.getElementById("how-div").style.zIndex = 1;
function how_to(){
if (document.getElementById("how-div").style.display == "none"){
document.getElementById("how-div").style.display = "block";
document.getElementById("how-div").style.zIndex = 2;
}
else {document.getElementById("how-div").style.display = "none";
document.getElementById("how-div").style.zIndex = 1
}
};
function hold_score(cell){
if ((cell.className == "cells" && turn_over == false) || (document.getElementById("cell29").className == "cells1" && yatzee_counter == true)){cell.className = "cells1";
document.getElementById("cell1").style.borderTopRightRadius = "5px"
; turn_over = true; bottom_score();upper_score();turn = 0; document.getElementById("btn").innerHTML = "Roll!<br />"+turn; 
for (i=0, j=1; i<die_value.length; i++, j++){
document.getElementById("die"+j).className = "dice_pic"; die_value[i][1] = false;
}
if (yatzee == 100) yatzee_counter = false;
}
/*
sub_total = 0;
final_total=0;
final_total = bonus+four_kind+three_kind+sm_staight+lg_staight+chance+full_house+yaztee+sub_total ; alert("sub: "+sub_total+" bonus: "+bonus+" fourkind: "+four_kind+" threekind: "+three_kind+"sm: "+sm_staight+"lg: "+lg_staight+"chance: "+chance+"full: "+full_house+"yatzee: "+yaztee);Number(final_total); document.getElementById("cell31").innerHTML = final_total;

sub_total = ones_final + twos_final + threes_final + fours_final + fives_final + sixes_final; document.getElementById("cell13").innerHTML = sub_total;
*/
}

function drawboard(){
document.getElementById("scorecard").innerHTML = ""

str = '';
str += '<table id="score">';
for (q = 0; q < rows; q++){
str += '<tr><td class="cells" id="cell'+q+'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
q++;
str+= '<td class="cells" onclick="hold_score(this)" id="cell'+q+'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>';
}
/*
for(p = 0, q=0; p < rows; p++){
str += '<tr>'
for (j = 0; j < columns; q++,j++){
str += '<td class="cells" id="cell'+q+'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
}
str += '</tr>';
} */


str += '</table>';

document.getElementById("scorecard").innerHTML = str

document.getElementById("cell13").onclick = ""
document.getElementById("cell15").onclick = ""
document.getElementById("cell31").onclick = ""
//top row
document.getElementById("cell0").innerHTML = "Ones"
document.getElementById("cell2").innerHTML = "Twos"
document.getElementById("cell4").innerHTML = "Threes"
document.getElementById("cell6").innerHTML = "Fours"
document.getElementById("cell8").innerHTML = "Fives"
document.getElementById("cell10").innerHTML = "Sixes"
document.getElementById("cell12").innerHTML = "Sub-total"
document.getElementById("cell14").innerHTML = "Bonus"
document.getElementById("cell16").innerHTML = "3 of a Kind"
document.getElementById("cell18").innerHTML = "4 of a Kind"
document.getElementById("cell20").innerHTML = "Full House"
document.getElementById("cell22").innerHTML = "Small Straight"
document.getElementById("cell24").innerHTML = "Large Straight"
document.getElementById("cell26").innerHTML = "Chance"
document.getElementById("cell28").innerHTML = "YAZTEE"
document.getElementById("cell30").innerHTML = "Total Score";

}

function update_board(){
if (turn_over == false){
bonus=0;
ones = 0; tous = 0; threes = 0; fours = 0; fives = 0; sixes = 0;
if (document.getElementById("cell1").className != "cells1"){
document.getElementById("cell1").innerHTML = ""; ones_final =0}
if (document.getElementById("cell3").className != "cells1"){
document.getElementById("cell3").innerHTML = ""; twos_final =0}
if (document.getElementById("cell5").className != "cells1"){
document.getElementById("cell5").innerHTML = ""; threes_final=0}
if (document.getElementById("cell7").className != "cells1"){ 
document.getElementById("cell7").innerHTML = "";fours_final=0}
if (document.getElementById("cell9").className != "cells1"){
document.getElementById("cell9").innerHTML = "";fives_final =0}
if (document.getElementById("cell11").className != "cells1"){
document.getElementById("cell11").innerHTML = "";sixes_final=0}
if (document.getElementById("cell27").className != "cells1"){
chance = 0
document.getElementById("cell27").innerHTML = ""}
one_num = 0; two_num = 0; three_num = 0; four_num = 0; five_num = 0; six_num = 0
if (document.getElementById("cell21").className != "cells1"){
full_house = 0
document.getElementById("cell21").innerHTML = ""}
if (document.getElementById("cell17").className != "cells1"){
three_kind = 0;
document.getElementById("cell17").innerHTML = ""}
if (document.getElementById("cell19").className != "cells1"){
four_kind = 0;
document.getElementById("cell19").innerHTML = ""}
if (document.getElementById("cell23").className != "cells1"){
sm_staight = 0;
document.getElementById("cell23").innerHTML = ""}
if (document.getElementById("cell25").className != "cells1"){
lg_staight = 0
document.getElementById("cell25").innerHTML = ""}
if (document.getElementById("cell29").className != "cells1"){
yatzee = 0
document.getElementById("cell29").innerHTML = ""}

for (i=0; i<die_value.length; i++){
if (die_value[i][0].charAt(35) == 1){
ones++; one_num++;
if (document.getElementById("cell1").className != "cells1"){
document.getElementById("cell1").innerHTML = ones; ones_final = Number(ones)}
}
//2's
if (die_value[i][0].charAt(35) == 2){
tous += 2; two_num++;
if (document.getElementById("cell3").className != "cells1"){
document.getElementById("cell3").innerHTML = tous; twos_final = Number(tous)}
}
//3's
if (die_value[i][0].charAt(35) == 3){
threes += 3; three_num++; 
if (document.getElementById("cell5").className != "cells1"){
document.getElementById("cell5").innerHTML = threes; threes_final = Number(threes)}
}
//4's
if (die_value[i][0].charAt(35) == 4){
fours += 4; four_num++;
if (document.getElementById("cell7").className != "cells1"){
document.getElementById("cell7").innerHTML = fours; fours_final = Number(fours)}
}
//5's
if (die_value[i][0].charAt(35) == 5){
fives += 5; five_num++;
if ( document.getElementById("cell9").className != "cells1"){
document.getElementById("cell9").innerHTML = fives; fives_final = Number(fives)}
}
//6's
if (die_value[i][0].charAt(35) == 6){
sixes += 6; six_num++;
if (document.getElementById("cell11").className != "cells1"){
document.getElementById("cell11").innerHTML = sixes; sixes_final = Number(sixes)}
}
if (document.getElementById("cell27").className != "cells1"){
chance = ones+tous+threes+fours+fives+sixes
document.getElementById("cell27").innerHTML = chance;
}
//else{ chance = 0; document.getElementById("cell27").innerHTML = chance }

num_total = ones+tous+threes+fours+fives+sixes 
}

//full house
if (document.getElementById("cell21").className != "cells1"){
if (one_num >= 3){
if (two_num >= 2 || three_num >= 2 || four_num >= 2 || five_num >= 2 || six_num >= 2){
full_house = 25; document.getElementById("cell21").innerHTML = full_house;}
else {full_house = 0; document.getElementById("cell21").innerHTML = ""}}

if (two_num >= 3){
if (one_num >= 2 || three_num >= 2 || four_num >= 2 || five_num >= 2 || six_num >= 2){
full_house = 25; document.getElementById("cell21").innerHTML = full_house;}
else {full_house = 0; document.getElementById("cell21").innerHTML = ""}}

if (three_num >= 3){
if (one_num >= 2 || two_num >= 2 || four_num >= 2 || five_num >= 2 || six_num >= 2){
full_house = 25; document.getElementById("cell21").innerHTML = full_house;}
else {full_house = 0; document.getElementById("cell21").innerHTML = ""}}

if (four_num >= 3){
if (two_num >= 2 || three_num >= 2 || one_num >= 2 || five_num >= 2 || six_num >= 2){
full_house = 25; document.getElementById("cell21").innerHTML = full_house;}
else {full_house = 0; document.getElementById("cell21").innerHTML = ""}}

if (five_num >= 3){
if (two_num >= 2 || three_num >= 2 || four_num >= 2 || one_num >= 2 || six_num >= 2){
full_house = 25; document.getElementById("cell21").innerHTML = full_house;}
else {full_house = 0; document.getElementById("cell21").innerHTML = ""}}

if (six_num >= 3){
if (two_num >= 2 || three_num >= 2 || four_num >= 2 || five_num >= 2 || one_num >= 2){
full_house = 25; document.getElementById("cell21").innerHTML = full_house;}
else {full_house = 0; document.getElementById("cell21").innerHTML = ""}}

}
//three_kind
if (document.getElementById("cell17").className != "cells1"){
if (one_num >= 3 || two_num >= 3 || three_num >= 3 || four_num >= 3 || five_num >= 3 || six_num >= 3) {three_kind = num_total; document.getElementById("cell17").innerHTML = three_kind;
}

else {three_kind = 0; document.getElementById("cell17").innerHTML = "";}}
//four_kind
if (document.getElementById("cell19").className != "cells1"){
if (one_num >= 4 || two_num >= 4 || three_num >= 4 || four_num >= 4 || five_num >= 4 || six_num >= 4) {four_kind = num_total; document.getElementById("cell19").innerHTML = four_kind;}

else {four_kind = 0; document.getElementById("cell19").innerHTML = "";}}
//sm_staight
if (document.getElementById("cell23").className != "cells1"){
if (one_num >= 1 && two_num >= 1 && three_num >= 1 && four_num >= 1) {sm_staight = 30; document.getElementById("cell23").innerHTML = sm_staight}
else if (two_num >= 1 && three_num >= 1 && four_num >= 1 && five_num >= 1) {sm_staight = 30; document.getElementById("cell23").innerHTML = sm_staight}
else if (three_num >= 1 && four_num && five_num >= 1 && six_num >= 1) {sm_staight = 30; document.getElementById("cell23").innerHTML = sm_staight}}
else if (document.getElementById("cell23").className == "cells"){sm_staight = 0; document.getElementById("cell23").innerHTML = ""}

//lg_staight
if (document.getElementById("cell25").className != "cells1"){
if (one_num >= 1 && two_num >= 1 && three_num >= 1 && four_num >= 1 && five_num >= 1) {lg_staight = 40; document.getElementById("cell25").innerHTML = lg_staight}
else if (two_num >= 1 && three_num >= 1 && four_num >= 1 && five_num >= 1 && six_num >= 1) {lg_staight = 40; document.getElementById("cell25").innerHTML = lg_staight}}
else if (document.getElementById("cell25").className == "cells") {lg_staight = 0; document.getElementById("cell25").innerHTML = ""}

//yaztee
if (document.getElementById("cell29").className != "cells1"){
if (one_num == 5 || two_num == 5 || three_num == 5 || four_num == 5 || five_num == 5 || six_num == 5) {yatzee = 50; document.getElementById("cell29").innerHTML = yatzee; yatzee_counter = true;}
else {yaztee = 0; document.getElementById("cell29").innerHTML = ""}
}
//yaztee_second
if (document.getElementById("cell29").className == "cells1" && yatzee_counter == true){
if (one_num == 5 || two_num == 5 || three_num == 5 || four_num == 5 || five_num == 5 || six_num == 5) {yatzee = 100; document.getElementById("cell29").innerHTML = yatzee; }
}


}
}


function upper_score(){
//total
if (document.getElementById("cell17").className == "cells1" && document.getElementById("cell19").className == "cells1" && document.getElementById("cell21").className == "cells1" && document.getElementById("cell23").className == "cells1" && document.getElementById("cell25").className == "cells1" && document.getElementById("cell27").className == "cells1" && document.getElementById("cell29").className == "cells1" && document.getElementById("cell1").className == "cells1" && document.getElementById("cell3").className == "cells1" && document.getElementById("cell5").className == "cells1" && document.getElementById("cell7").className == "cells1" && document.getElementById("cell9").className == "cells1" && document.getElementById("cell11").className == "cells1" ) {final_total = bonus+four_kind+three_kind+sm_staight+lg_staight+chance+full_house+yaztee+sub_total ; console.log("sub: "+sub_total+" bonus: "+bonus+" fourkind: "+four_kind+" threekind: "+three_kind+"sm: "+sm_staight+"lg: "+lg_staight+"chance: "+chance+"full: "+full_house+"yatzee: "+yaztee);Number(final_total); document.getElementById("cell31").innerHTML = final_total;   document.getElementByName("name").value = prompt("Please enter your name"); document.getElementByName("name").value = final_total; }
}

function bottom_score(){
if (document.getElementById("cell1").className == "cells1" && document.getElementById("cell3").className == "cells1" && document.getElementById("cell5").className == "cells1" && document.getElementById("cell7").className == "cells1" && document.getElementById("cell9").className == "cells1" && document.getElementById("cell11").className == "cells1"){sub_total = 0;
sub_total = ones_final + twos_final + threes_final + fours_final + fives_final + sixes_final; document.getElementById("cell13").innerHTML = sub_total;console.log(sub_total+" sub;"+ones_final+" ones;"+twos_final+" twos;"+threes_final+" three;"+fours_final+" fours;"+fives_final+" fives;"+sixes_final+" sixes");
if ( sub_total >= 63){ bonus = 35; document.getElementById("cell15").innerHTML = bonus}
else if (sub_total < 63) {bonus = 0;document.getElementById("cell15").innerHTML = bonus }}
}

function die_gif(){
  document.getElementById('btn').onclick = ""
if (start == 1 && turn < 3){
for (i=0; i<die_value.length; i++){
if(die_value[i][1] == false){
die_value[i][0] = "<img class='dice_pic' src='../dice/die"+(i+1)+".gif' />";
}}
for (i=1, j=0; j<5; i++, j++){
document.getElementById("die"+i).innerHTML = die_value[j][0];
}}
setTimeout(shuffle_dice, 2000)


}


function shuffle_dice(){

turn_over = false;
if (start == 0){
for (i=0, j=1; i<die_value.length; i++, j++){
die_value[i][0] = "<img class='dice_pic' src='../dice/die"+j+".png' />"
hold_die_start = 1 }
turn_over = true;
}

if (start == 1 && turn < 3){
turn++;
document.getElementById("btn").innerHTML = "Roll!<br />"+turn
hold_die_start = 2
for (i=0; i<die_value.length; i++){
if(die_value[i][1] == false){
var rand = Math.floor(Math.random() * 6) + 1;
//die_value[i][0] = "<img class='dice_pic' src='die.gif' />"
die_value[i][0] = "<img class='dice_pic' src='../dice/die"+rand+".png' />"
}
}
update_board();
}
for (i=1, j=0; j<5; i++, j++){
document.getElementById("die"+i).innerHTML = die_value[j][0];
}
start = 1;
document.getElementById('btn').onclick = die_gif
}


function hold(cell){
if (hold_die_start == 2){
if (cell.className == "dice_pic" && turn_over == false){ cell.className = "dice_pic_hold";}
else if (cell.className == "dice_pic_hold" && turn_over == false) {cell.className = "dice_pic";}
//cell.className = "dice_pic_hold"
for (i=0, j=1; i<die_value.length; i++, j++){
if (document.getElementById("die"+j).className == "dice_pic_hold") die_value[i][1] = true;
if (document.getElementById("die"+j).className == "dice_pic") die_value[i][1] = false;
}
}
}

drawboard();
shuffle_dice();
//update_board();


</script>


</body>

</html>
