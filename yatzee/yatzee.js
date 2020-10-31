var i, j, q, p;
var str, hold_die_start;
var ones, twos, threes, fours, fives, sixes, sub, three_kind, four_kind, full_house, sm_staight, lg_straight, chance, yaztee;
var one_num, two_num, three_num, four_num, five_num, six_num, num_total;
var ones_final, twos_final, threes_final, fours_final, fives_final, sixes_final, bonus, sub_total, final_total;
var start = 0;
var rows = 32;
var columns = 2;
var turn_over = false;
var turn = 0;
var yatzee_counter = false;
var sub_total = 0;
var final_total = 0;
var die_value = [];
var game_over = false;
if (!localStorage.getItem('high_score')) {
    localStorage.setItem('high_score', 0);
}
//
for (i = 0; i < 5; i++) {
    die_value[i] = new Array(2);
}
for (i = 0, j = 1; i < 5; i++, j++) {
    die_value[i][0] = "<img src='dice/die" + j + ".png' />";
    die_value[i][1] = false;
}

document.getElementById("how-div").style.display = "none";
document.getElementById("how-div").style.zIndex = 1;

function how_to() {
    if (document.getElementById("how-div").style.display == "none") {
        document.getElementById("how-div").style.display = "block";
        document.getElementById("how-div").style.zIndex = 2;
    } else {
        document.getElementById("how-div").style.display = "none";
        document.getElementById("how-div").style.zIndex = 1
    }
};

function hold_score(cell) {
    if ((cell.className == "cells" && turn_over == false) || (document.getElementById("cell29").className == "cells1" && yatzee_counter == true)) {
        cell.className = "cells1";
        document.getElementById("cell1").style.borderTopRightRadius = "5px";
        turn_over = true;
        bottom_score();
        upper_score();
        sub_total = 0;
        final_total = 0;
        if (document.getElementById("cell1").className == "cells1") sub_total += ones_final;
        if (document.getElementById("cell3").className == "cells1") sub_total += twos_final;
        if (document.getElementById("cell5").className == "cells1") sub_total += threes_final;
        if (document.getElementById("cell7").className == "cells1") sub_total += fours_final;
        if (document.getElementById("cell9").className == "cells1") sub_total += fives_final;
        if (document.getElementById("cell11").className == "cells1") sub_total += sixes_final;
        console.log(Number(sub_total));

        if (document.getElementById("cell17").className == "cells1") final_total += three_kind;
        if (document.getElementById("cell19").className == "cells1") final_total += four_kind;
        if (document.getElementById("cell21").className == "cells1") final_total += full_house;
        if (document.getElementById("cell23").className == "cells1") final_total += sm_staight;
        if (document.getElementById("cell25").className == "cells1") final_total += lg_staight;
        if (document.getElementById("cell27").className == "cells1") final_total += chance;
        if (document.getElementById("cell29").className == "cells1") final_total += yatzee;
        final_total += sub_total;
        final_total += bonus;
        //final_total = bonus + four_kind + three_kind + sm_staight + lg_staight + chance + full_house + yaztee + sub_total;
        console.log(final_total + ' final');

        //sub_total = ones_final + twos_final + threes_final + fours_final + fives_final + sixes_final;
        turn = 0;
        document.getElementById("btn").innerHTML = "Roll!<br />" + turn;
        for (i = 0, j = 1; i < die_value.length; i++, j++) {
            document.getElementById("die" + j).className = "dice_pic";
            die_value[i][1] = false;
        }
        if (yatzee == 100) yatzee_counter = false;

        document.getElementById("cell13").innerHTML = sub_total;
        document.getElementById("cell31").innerHTML = final_total;
        if (game_over == true) document.getElementById('btn').innerHTML = "New Game?";
    }
    /*
    sub_total = 0;
    final_total=0;
    final_total = bonus+four_kind+three_kind+sm_staight+lg_staight+chance+full_house+yaztee+sub_total ; alert("sub: "+sub_total+" bonus: "+bonus+" fourkind: "+four_kind+" threekind: "+three_kind+"sm: "+sm_staight+"lg: "+lg_staight+"chance: "+chance+"full: "+full_house+"yatzee: "+yaztee);Number(final_total); document.getElementById("cell31").innerHTML = final_total;
    
    sub_total = ones_final + twos_final + threes_final + fours_final + fives_final + sixes_final; document.getElementById("cell13").innerHTML = sub_total;
    */
}

function drawboard() {
    document.getElementById('highscore').innerHTML = "Your High Score: " + localStorage.getItem('high_score');
    document.getElementById("scorecard").innerHTML = "";
    document.getElementById('btn').innerHTML = 'Start Game!';
    game_over = false;
    shuffle_dice();
    document.getElementById('btn').onclick = function() {
        die_gif();
    };
    str = '';
    str += '<table id="score">';
    for (q = 0; q < rows; q++) {
        str += '<tr><td class="cells"  id="cell' + q + '"></td>';
        q++;
        str += '<td class="cells" onclick="hold_score(this)" id="cell' + q + '"></td></tr>';
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

function update_board() {
    if (turn_over == false) {
        bonus = 0;
        ones = 0;
        tous = 0;
        threes = 0;
        fours = 0;
        fives = 0;
        sixes = 0;
        if (document.getElementById("cell1").className != "cells1") {
            document.getElementById("cell1").innerHTML = "";
            ones_final = 0
        }
        if (document.getElementById("cell3").className != "cells1") {
            document.getElementById("cell3").innerHTML = "";
            twos_final = 0
        }
        if (document.getElementById("cell5").className != "cells1") {
            document.getElementById("cell5").innerHTML = "";
            threes_final = 0
        }
        if (document.getElementById("cell7").className != "cells1") {
            document.getElementById("cell7").innerHTML = "";
            fours_final = 0
        }
        if (document.getElementById("cell9").className != "cells1") {
            document.getElementById("cell9").innerHTML = "";
            fives_final = 0
        }
        if (document.getElementById("cell11").className != "cells1") {
            document.getElementById("cell11").innerHTML = "";
            sixes_final = 0
        }
        if (document.getElementById("cell27").className != "cells1") {
            chance = 0
            document.getElementById("cell27").innerHTML = ""
        }
        one_num = 0;
        two_num = 0;
        three_num = 0;
        four_num = 0;
        five_num = 0;
        six_num = 0
        if (document.getElementById("cell21").className != "cells1") {
            full_house = 0
            document.getElementById("cell21").innerHTML = ""
        }
        if (document.getElementById("cell17").className != "cells1") {
            three_kind = 0;
            document.getElementById("cell17").innerHTML = ""
        }
        if (document.getElementById("cell19").className != "cells1") {
            four_kind = 0;
            document.getElementById("cell19").innerHTML = ""
        }
        if (document.getElementById("cell23").className != "cells1") {
            sm_staight = 0;
            document.getElementById("cell23").innerHTML = ""
        }
        if (document.getElementById("cell25").className != "cells1") {
            lg_staight = 0
            document.getElementById("cell25").innerHTML = ""
        }
        if (document.getElementById("cell29").className != "cells1") {
            yatzee = 0
            document.getElementById("cell29").innerHTML = ""
        }

        for (i = 0; i < die_value.length; i++) {
            if (die_value[i][0].charAt(35) == 1) {
                ones++;
                one_num++;
                if (document.getElementById("cell1").className != "cells1") {
                    document.getElementById("cell1").innerHTML = ones;
                    ones_final = Number(ones)
                }
            }
            //2's
            if (die_value[i][0].charAt(35) == 2) {
                tous += 2;
                two_num++;
                if (document.getElementById("cell3").className != "cells1") {
                    document.getElementById("cell3").innerHTML = tous;
                    twos_final = Number(tous)
                }
            }
            //3's
            if (die_value[i][0].charAt(35) == 3) {
                threes += 3;
                three_num++;
                if (document.getElementById("cell5").className != "cells1") {
                    document.getElementById("cell5").innerHTML = threes;
                    threes_final = Number(threes)
                }
            }
            //4's
            if (die_value[i][0].charAt(35) == 4) {
                fours += 4;
                four_num++;
                if (document.getElementById("cell7").className != "cells1") {
                    document.getElementById("cell7").innerHTML = fours;
                    fours_final = Number(fours)
                }
            }
            //5's
            if (die_value[i][0].charAt(35) == 5) {
                fives += 5;
                five_num++;
                if (document.getElementById("cell9").className != "cells1") {
                    document.getElementById("cell9").innerHTML = fives;
                    fives_final = Number(fives)
                }
            }
            //6's
            if (die_value[i][0].charAt(35) == 6) {
                sixes += 6;
                six_num++;
                if (document.getElementById("cell11").className != "cells1") {
                    document.getElementById("cell11").innerHTML = sixes;
                    sixes_final = Number(sixes)
                }
            }
            if (document.getElementById("cell27").className != "cells1") {
                chance = ones + tous + threes + fours + fives + sixes
                document.getElementById("cell27").innerHTML = chance;
            }
            //else{ chance = 0; document.getElementById("cell27").innerHTML = chance }

            num_total = ones + tous + threes + fours + fives + sixes
        }

        //full house
        if (document.getElementById("cell21").className != "cells1") {
            if (one_num >= 3) {
                if (two_num >= 2 || three_num >= 2 || four_num >= 2 || five_num >= 2 || six_num >= 2) {
                    full_house = 25;
                    document.getElementById("cell21").innerHTML = full_house;
                } else {
                    full_house = 0;
                    document.getElementById("cell21").innerHTML = ""
                }
            }

            if (two_num >= 3) {
                if (one_num >= 2 || three_num >= 2 || four_num >= 2 || five_num >= 2 || six_num >= 2) {
                    full_house = 25;
                    document.getElementById("cell21").innerHTML = full_house;
                } else {
                    full_house = 0;
                    document.getElementById("cell21").innerHTML = ""
                }
            }

            if (three_num >= 3) {
                if (one_num >= 2 || two_num >= 2 || four_num >= 2 || five_num >= 2 || six_num >= 2) {
                    full_house = 25;
                    document.getElementById("cell21").innerHTML = full_house;
                } else {
                    full_house = 0;
                    document.getElementById("cell21").innerHTML = ""
                }
            }

            if (four_num >= 3) {
                if (two_num >= 2 || three_num >= 2 || one_num >= 2 || five_num >= 2 || six_num >= 2) {
                    full_house = 25;
                    document.getElementById("cell21").innerHTML = full_house;
                } else {
                    full_house = 0;
                    document.getElementById("cell21").innerHTML = ""
                }
            }

            if (five_num >= 3) {
                if (two_num >= 2 || three_num >= 2 || four_num >= 2 || one_num >= 2 || six_num >= 2) {
                    full_house = 25;
                    document.getElementById("cell21").innerHTML = full_house;
                } else {
                    full_house = 0;
                    document.getElementById("cell21").innerHTML = ""
                }
            }

            if (six_num >= 3) {
                if (two_num >= 2 || three_num >= 2 || four_num >= 2 || five_num >= 2 || one_num >= 2) {
                    full_house = 25;
                    document.getElementById("cell21").innerHTML = full_house;
                } else {
                    full_house = 0;
                    document.getElementById("cell21").innerHTML = ""
                }
            }

        }
        //three_kind
        if (document.getElementById("cell17").className != "cells1") {
            if (one_num >= 3 || two_num >= 3 || three_num >= 3 || four_num >= 3 || five_num >= 3 || six_num >= 3) {
                three_kind = num_total;
                document.getElementById("cell17").innerHTML = three_kind;
            } else {
                three_kind = 0;
                document.getElementById("cell17").innerHTML = "";
            }
        }
        //four_kind
        if (document.getElementById("cell19").className != "cells1") {
            if (one_num >= 4 || two_num >= 4 || three_num >= 4 || four_num >= 4 || five_num >= 4 || six_num >= 4) {
                four_kind = num_total;
                document.getElementById("cell19").innerHTML = four_kind;
            } else {
                four_kind = 0;
                document.getElementById("cell19").innerHTML = "";
            }
        }
        //sm_staight
        if (document.getElementById("cell23").className != "cells1") {
            if (one_num >= 1 && two_num >= 1 && three_num >= 1 && four_num >= 1) {
                sm_staight = 30;
                document.getElementById("cell23").innerHTML = sm_staight
            } else if (two_num >= 1 && three_num >= 1 && four_num >= 1 && five_num >= 1) {
                sm_staight = 30;
                document.getElementById("cell23").innerHTML = sm_staight
            } else if (three_num >= 1 && four_num && five_num >= 1 && six_num >= 1) {
                sm_staight = 30;
                document.getElementById("cell23").innerHTML = sm_staight
            }
        } else if (document.getElementById("cell23").className == "cells") {
            sm_staight = 0;
            document.getElementById("cell23").innerHTML = ""
        }

        //lg_staight
        if (document.getElementById("cell25").className != "cells1") {
            if (one_num >= 1 && two_num >= 1 && three_num >= 1 && four_num >= 1 && five_num >= 1) {
                lg_staight = 40;
                document.getElementById("cell25").innerHTML = lg_staight
            } else if (two_num >= 1 && three_num >= 1 && four_num >= 1 && five_num >= 1 && six_num >= 1) {
                lg_staight = 40;
                document.getElementById("cell25").innerHTML = lg_staight
            }
        } else if (document.getElementById("cell25").className == "cells") {
            lg_staight = 0;
            document.getElementById("cell25").innerHTML = ""
        }

        //yaztee
        if (document.getElementById("cell29").className != "cells1") {
            if (one_num == 5 || two_num == 5 || three_num == 5 || four_num == 5 || five_num == 5 || six_num == 5) {
                yatzee = 50;
                document.getElementById("cell29").innerHTML = yatzee;
                yatzee_counter = true;
            } else {
                yaztee = 0;
                document.getElementById("cell29").innerHTML = ""
            }
        }
        //yaztee_second
        if (document.getElementById("cell29").className == "cells1" && yatzee_counter == true) {
            if (one_num == 5 || two_num == 5 || three_num == 5 || four_num == 5 || five_num == 5 || six_num == 5) {
                yatzee = 100;
                document.getElementById("cell29").innerHTML = yatzee;
            }
        }


    }
}


function upper_score() {
    //total
    if (document.getElementById("cell17").className == "cells1" && document.getElementById("cell19").className == "cells1" && document.getElementById("cell21").className == "cells1" && document.getElementById("cell23").className == "cells1" && document.getElementById("cell25").className == "cells1" && document.getElementById("cell27").className == "cells1" && document.getElementById("cell29").className == "cells1" && document.getElementById("cell1").className == "cells1" && document.getElementById("cell3").className == "cells1" && document.getElementById("cell5").className == "cells1" && document.getElementById("cell7").className == "cells1" && document.getElementById("cell9").className == "cells1" && document.getElementById("cell11").className == "cells1") {
        final_total = bonus + four_kind + three_kind + sm_staight + lg_staight + chance + full_house + yaztee + sub_total;
        console.log("sub: " + sub_total + " bonus: " + bonus + " fourkind: " + four_kind + " threekind: " + three_kind + "sm: " + sm_staight + "lg: " + lg_staight + "chance: " + chance + "full: " + full_house + "yatzee: " + yaztee);
        Number(final_total);
        document.getElementById("cell31").innerHTML = final_total;
        game_over = true;
        if (Number(localStorage.getItem('high_score')) < final_total) localStorage.setItem('high_score', final_total);
        document.getElementById('btn').onclick = function() {
            drawboard();
        };


        document.getElementById('highscore').innerHTML = "Your High Score: " + localStorage.getItem('high_score');

    }
}

function bottom_score() {
    if (document.getElementById("cell1").className == "cells1" && document.getElementById("cell3").className == "cells1" && document.getElementById("cell5").className == "cells1" && document.getElementById("cell7").className == "cells1" && document.getElementById("cell9").className == "cells1" && document.getElementById("cell11").className == "cells1") {
        sub_total = 0;
        sub_total = ones_final + twos_final + threes_final + fours_final + fives_final + sixes_final;
        document.getElementById("cell13").innerHTML = sub_total;
        console.log(sub_total + " sub;" + ones_final + " ones;" + twos_final + " twos;" + threes_final + " three;" + fours_final + " fours;" + fives_final + " fives;" + sixes_final + " sixes");
        if (sub_total >= 63) {
            bonus = 35;
            document.getElementById("cell15").innerHTML = bonus
        } else if (sub_total < 63) {
            bonus = 0;
            document.getElementById("cell15").innerHTML = bonus
        }
    }
}

function die_gif() {
    var cls = document.getElementsByClassName('dice_pic');

    for (var i = 0; i < cls.length; i++) {
        cls[i].removeAttribute('onclick');
    }
    if (start == 1 && turn < 3) {
        for (i = 0; i < die_value.length; i++) {
            if (die_value[i][1] == false) {
                die_value[i][0] = "<img class='dice_pic' src='dice/die" + (i + 1) + ".gif' />";
            }
        }
        for (i = 1, j = 0; j < 5; i++, j++) {
            document.getElementById("die" + i).innerHTML = die_value[j][0];
        }
    }
    setTimeout(shuffle_dice, 2000);




}


function shuffle_dice() {
    var cls = document.getElementsByClassName('dice_pic');

    turn_over = false;
    if (start == 0) {
        for (i = 0, j = 1; i < die_value.length; i++, j++) {
            die_value[i][0] = "<img class='dice_pic' src='dice/die" + j + ".png' />"
            hold_die_start = 1
        }
        turn_over = true;
    }

    if (start == 1 && turn < 3) {
        turn++;
        document.getElementById("btn").innerHTML = "Roll!<br />" + turn
        hold_die_start = 2
        for (i = 0; i < die_value.length; i++) {
            if (die_value[i][1] == false) {
                var rand = Math.floor(Math.random() * 6) + 1;
                //die_value[i][0] = "<img class='dice_pic' src='die.gif' />"
                die_value[i][0] = "<img class='dice_pic' src='dice/die" + rand + ".png' />"
            }
        }
        update_board();
    }
    for (i = 1, j = 0; j < 5; i++, j++) {
        document.getElementById("die" + i).innerHTML = die_value[j][0];
    }
    start = 1;

    for (var i = 0; i < cls.length; i++) {
        cls[i].setAttribute('onclick', 'hold(this)');
    }


}


function hold(cell) {

    if (hold_die_start == 2) {
        if (cell.className == "dice_pic" && turn_over == false) {
            //console.log("change");

            cell.className = "dice_pic_hold";
        } else if (cell.className == "dice_pic_hold" && turn_over == false) {
            cell.className = "dice_pic";
        }
        //cell.className = "dice_pic_hold"
        for (i = 0, j = 1; i < die_value.length; i++, j++) {
            if (document.getElementById("die" + j).className == "dice_pic_hold") die_value[i][1] = true;
            if (document.getElementById("die" + j).className == "dice_pic") die_value[i][1] = false;
        }
    }
}

function fullscreen() {
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}

drawboard();

//update_board();