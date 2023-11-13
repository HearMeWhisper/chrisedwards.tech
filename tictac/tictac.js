var board = [];
var i = Number(i);
var j, a, error, xmove, omove, xwin, owin, draw, start;
var xwin = 0,
  owin = 0,
  draw = 0,
  bcount,
  endgame = false;

for (i = 1; i < 10; i++) board[i] = i;
rows = 4;
columns = 3;
function drawboard(ary) {
  // Empty previous board

  document.getElementById("tic").innerHTML = "";

  // Create an empty string

  var str = "";

  // Add the start of the table to the string

  str += '<table id="game">';

  // Iterate through each row

  for (var p = 1, q = 1; p < rows; p++) {
    // Add the start of a new row to the string

    str += "<tr>";

    // Iterate through each cell in the row

    for (var j = 0; j < columns; q++, j++) {
      // Add the cell to the string with its ID and content

      str +=
        '<td style = color:#FFFFFF class="cells" id="cell' +
        q +
        '">' +
        ary[q] +
        "</td>";
    }

    // Add the end of the row to the string

    str += "</tr>";
  }

  // Add the end of the table to the string

  str += "</table>";

  // Update the board's HTML with the new table

  document.getElementById("tic").innerHTML = str;
}
function score() {
  // Reset score element

  document.getElementById("score").innerHTML = "";

  // Generate score string

  var score =
    "</br> X Wins = " +
    xwin +
    "</br> O Wins = " +
    owin +
    "</br> Draws = &nbsp" +
    draw;

  // Display score in score element

  document.getElementById("score").innerHTML = score;
}

drawboard(board);
score();

var turn = "X";

var cellfunc = [
  function cell0() {},
  function cell1() {
    if (board[1] == 1 && endgame == false) {
      board[1] = turn;
      document.getElementById("cell1").innerHTML = turn;
      document.getElementById("cell1").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell2() {
    if (board[2] == 2 && endgame == false) {
      board[2] = turn;
      document.getElementById("cell2").innerHTML = turn;
      document.getElementById("cell2").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell3() {
    if (board[3] == 3 && endgame == false) {
      board[3] = turn;
      document.getElementById("cell3").innerHTML = turn;
      document.getElementById("cell3").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell4() {
    if (board[4] == 4 && endgame == false) {
      board[4] = turn;
      document.getElementById("cell4").innerHTML = turn;
      document.getElementById("cell4").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell5() {
    if (board[5] == 5 && endgame == false) {
      board[5] = turn;
      document.getElementById("cell5").innerHTML = turn;
      document.getElementById("cell5").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell6() {
    if (board[6] == 6 && endgame == false) {
      board[6] = turn;
      document.getElementById("cell6").innerHTML = turn;
      document.getElementById("cell6").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell7() {
    if (board[7] == 7 && endgame == false) {
      board[7] = turn;
      document.getElementById("cell7").innerHTML = turn;
      document.getElementById("cell7").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell8() {
    if (board[8] == 8 && endgame == false) {
      board[8] = turn;
      document.getElementById("cell8").innerHTML = turn;
      document.getElementById("cell8").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
  function cell9() {
    if (board[9] == 9 && endgame == false) {
      board[9] = turn;
      document.getElementById("cell9").innerHTML = turn;
      document.getElementById("cell9").style.color = "#00007A";
      changeTurn();
      checkO();
      checkX();
      draw1();
    }
  },
];

function changeTurn() {
  if (turn == "X") {
    // document.getElementsByTagName("td").style.color = "#19FF19";

    turn = "O";
  } else {
    turn = "X";
  }
}

function game() {
  if (start == true) {
    removeevent();
    start = false;
    reset();
    drawboard(board);
  }
  start = true;
  document.getElementById("level").innerHTML = "<h1> LEVEL: MULTIPLAYER</h1>";
  endgame = false;
  turn = "X";

  reset();

  document.getElementById("cell1").onclick = cellfunc[1];
  document.getElementById("cell2").onclick = cellfunc[2];
  document.getElementById("cell3").onclick = cellfunc[3];
  document.getElementById("cell4").onclick = cellfunc[4];
  document.getElementById("cell5").onclick = cellfunc[5];
  document.getElementById("cell6").onclick = cellfunc[6];
  document.getElementById("cell7").onclick = cellfunc[7];
  document.getElementById("cell8").onclick = cellfunc[8];
  document.getElementById("cell9").onclick = cellfunc[9];

  document
    .getElementById("cell1")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell2")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell3")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell4")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell5")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell6")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell7")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell8")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
  document
    .getElementById("cell9")
    .addEventListener("click", function gameend() {
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    });
}

function game1() {
  if (start == true) {
    removeevent();
    start = false;
    reset();
    drawboard(board);
  }
  start = true;
  document.getElementById("level").innerHTML = "<h1> LEVEL: EASY</h1>";
  turn = "X";
  endgame = false;
  reset();
  document.getElementById("cell1").onclick = cellfunc[1];
  document.getElementById("cell2").onclick = cellfunc[2];
  document.getElementById("cell3").onclick = cellfunc[3];
  document.getElementById("cell4").onclick = cellfunc[4];
  document.getElementById("cell5").onclick = cellfunc[5];
  document.getElementById("cell6").onclick = cellfunc[6];
  document.getElementById("cell7").onclick = cellfunc[7];
  document.getElementById("cell8").onclick = cellfunc[8];
  document.getElementById("cell9").onclick = cellfunc[9];

  document.getElementById("cell1").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell2").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell3").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell4").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell5").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell6").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell7").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell8").addEventListener("click", function error() {
    ogame1();
  });
  document.getElementById("cell9").addEventListener("click", function error() {
    ogame1();
  });
  function ogame1() {
    if (endgame == true)
      document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    if (endgame == false) {
      error = 1;
      while (error == 1) {
        error = 0;
        omove = omovenum(1, 9);
        if (omove < 1 || omove > 9) error = 1;
        if (isNaN(board[omove]) == true) error = 1;
      }
      document.getElementById("cell" + omove).style.color = " #19FF19";
      document.getElementById("cell" + omove).innerHTML = turn;
      board[omove] = turn;

      changeTurn();
      checkO();
      checkO();
      draw1();
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    }
  }
}

function game2() {
  if (start == true) {
    removeevent();
    start = false;
    reset();
    drawboard(board);
  }
  start = true;
  document.getElementById("level").innerHTML = "<h1> LEVEL: MEDIUM</h1>";
  turn = "X";
  endgame = false;
  reset();
  document.getElementById("cell1").onclick = cellfunc[1];
  document.getElementById("cell2").onclick = cellfunc[2];
  document.getElementById("cell3").onclick = cellfunc[3];
  document.getElementById("cell4").onclick = cellfunc[4];
  document.getElementById("cell5").onclick = cellfunc[5];
  document.getElementById("cell6").onclick = cellfunc[6];
  document.getElementById("cell7").onclick = cellfunc[7];
  document.getElementById("cell8").onclick = cellfunc[8];
  document.getElementById("cell9").onclick = cellfunc[9];

  document.getElementById("cell1").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell2").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell3").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell4").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell5").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell6").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell7").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell8").addEventListener("click", function error() {
    ogame2();
  });
  document.getElementById("cell9").addEventListener("click", function error() {
    ogame2();
  });
  function ogame2() {
    if (endgame == true)
      document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    if (endgame == false && turn == "O") {
      error = 1;
      while (error == 1) {
        error = 0;

        if (board[1] == "X" && board[2] == "X" && board[3] == 3) {
          omove = 3;
          break;
        } //missing right end (horizontal)
        if (board[4] == "X" && board[5] == "X" && board[6] == 6) {
          omove = 6;
          break;
        }
        if (board[7] == "X" && board[8] == "X" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "X" && board[3] == "X" && board[2] == 2) {
          omove = 2;
          break;
        } //missing middle (horizontal)
        if (board[4] == "X" && board[6] == "X" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[7] == "X" && board[9] == "X" && board[8] == 8) {
          omove = 8;
          break;
        }

        if (board[2] == "X" && board[3] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing left end (horizontal)
        if (board[5] == "X" && board[6] == "X" && board[4] == 4) {
          omove = 4;
          break;
        }
        if (board[8] == "X" && board[9] == "X" && board[7] == 7) {
          omove = 7;
          break;
        }

        if (board[1] == "X" && board[4] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom one (vertical)
        if (board[2] == "X" && board[5] == "X" && board[8] == 8) {
          omove = 8;
          break;
        }
        if (board[3] == "X" && board[6] == "X" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "X" && board[7] == "X" && board[4] == 4) {
          omove = 4;
          break;
        } //missing middle one (vertical)
        if (board[2] == "X" && board[8] == "X" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[3] == "X" && board[9] == "X" && board[6] == 6) {
          omove = 6;
          break;
        }

        if (board[4] == "X" && board[7] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top one (vertical)
        if (board[5] == "X" && board[8] == "X" && board[2] == 2) {
          omove = 2;
          break;
        }
        if (board[6] == "X" && board[9] == "X" && board[3] == 3) {
          omove = 3;
          break;
        }

        if (board[1] == "X" && board[5] == "X" && board[9] == 9) {
          omove = 9;
          break;
        } //missing bottom (diagnal)\
        if (board[1] == "X" && board[9] == "X" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal)\
        if (board[5] == "X" && board[9] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top (diagnal) \

        if (board[3] == "X" && board[5] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom (diagnal) /
        if (board[3] == "X" && board[7] == "X" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal) /
        if (board[5] == "X" && board[7] == "X" && board[3] == 3) {
          omove = 3;
          break;
        } //missing top (diagnal) /
        else {
          omove = omovenum(1, 9);
        }
        if (omove < 1 || omove > 9) error = 1;
        if (isNaN(board[omove]) == true) error = 1;
      }
      document.getElementById("cell" + omove).style.color = " #19FF19";
      document.getElementById("cell" + omove).innerHTML = turn;
      board[omove] = turn;

      changeTurn();
      checkO();
      checkO();
      draw1();
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    }
  }
}

function game3() {
  if (start == true) {
    removeevent();
    start = false;
    reset();
    drawboard(board);
  }
  start = true;
  document.getElementById("level").innerHTML = "<h1> LEVEL: HARD</h1>";
  turn = "X";
  endgame = false;
  reset();

  document.getElementById("cell1").onclick = cellfunc[1];
  document.getElementById("cell2").onclick = cellfunc[2];
  document.getElementById("cell3").onclick = cellfunc[3];
  document.getElementById("cell4").onclick = cellfunc[4];
  document.getElementById("cell5").onclick = cellfunc[5];
  document.getElementById("cell6").onclick = cellfunc[6];
  document.getElementById("cell7").onclick = cellfunc[7];
  document.getElementById("cell8").onclick = cellfunc[8];
  document.getElementById("cell9").onclick = cellfunc[9];

  document.getElementById("cell1").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell2").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell3").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell4").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell5").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell6").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell7").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell8").addEventListener("click", function error() {
    ogame3();
  });
  document.getElementById("cell9").addEventListener("click", function error() {
    ogame3();
  });
  function ogame3() {
    if (endgame == true)
      document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    if (endgame == false && turn == "O") {
      error = 1;
      while (error == 1) {
        error = 0;

        if (board[1] == "O" && board[2] == "O" && board[3] == 3) {
          omove = 3;
          break;
        } //missing right end (horizontal)
        if (board[4] == "O" && board[5] == "O" && board[6] == 6) {
          omove = 6;
          break;
        }
        if (board[7] == "O" && board[8] == "O" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "O" && board[3] == "O" && board[2] == 2) {
          omove = 2;
          break;
        } //missing middle (horizontal)
        if (board[4] == "O" && board[6] == "O" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[7] == "O" && board[9] == "O" && board[8] == 8) {
          omove = 8;
          break;
        }

        if (board[2] == "O" && board[3] == "O" && board[1] == 1) {
          omove = 1;
          break;
        } //missing left end (horizontal)
        if (board[5] == "O" && board[6] == "O" && board[4] == 4) {
          omove = 4;
          break;
        }
        if (board[8] == "O" && board[9] == "O" && board[7] == 7) {
          omove = 7;
          break;
        }

        if (board[1] == "O" && board[4] == "O" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom one (vertical)
        if (board[2] == "O" && board[5] == "O" && board[8] == 8) {
          omove = 8;
          break;
        }
        if (board[3] == "O" && board[6] == "O" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "O" && board[7] == "O" && board[4] == 4) {
          omove = 4;
          break;
        } //missing middle one (vertical)
        if (board[2] == "O" && board[8] == "O" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[3] == "O" && board[9] == "O" && board[6] == 6) {
          omove = 6;
          break;
        }

        if (board[4] == "O" && board[7] == "O" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top one (vertical)
        if (board[5] == "O" && board[8] == "O" && board[2] == 2) {
          omove = 2;
          break;
        }
        if (board[6] == "O" && board[9] == "O" && board[3] == 3) {
          omove = 3;
          break;
        }

        if (board[1] == "O" && board[5] == "O" && board[9] == 9) {
          omove = 9;
          break;
        } //missing bottom (diagnal)\
        if (board[1] == "O" && board[9] == "O" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal)\
        if (board[5] == "O" && board[9] == "O" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top (diagnal) \

        if (board[3] == "O" && board[5] == "O" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom (diagnal) /
        if (board[3] == "O" && board[7] == "O" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal) /
        if (board[5] == "O" && board[7] == "O" && board[3] == 3) {
          omove = 3;
          break;
        } //missing top (diagnal) /

        if (board[1] == "X" && board[2] == "X" && board[3] == 3) {
          omove = 3;
          break;
        } //missing right end (horizontal)
        if (board[4] == "X" && board[5] == "X" && board[6] == 6) {
          omove = 6;
          break;
        }
        if (board[7] == "X" && board[8] == "X" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "X" && board[3] == "X" && board[2] == 2) {
          omove = 2;
          break;
        } //missing middle (horizontal)
        if (board[4] == "X" && board[6] == "X" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[7] == "X" && board[9] == "X" && board[8] == 8) {
          omove = 8;
          break;
        }

        if (board[2] == "X" && board[3] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing left end (horizontal)
        if (board[5] == "X" && board[6] == "X" && board[4] == 4) {
          omove = 4;
          break;
        }
        if (board[8] == "X" && board[9] == "X" && board[7] == 7) {
          omove = 7;
          break;
        }

        if (board[1] == "X" && board[4] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom one (vertical)
        if (board[2] == "X" && board[5] == "X" && board[8] == 8) {
          omove = 8;
          break;
        }
        if (board[3] == "X" && board[6] == "X" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "X" && board[7] == "X" && board[4] == 4) {
          omove = 4;
          break;
        } //missing middle one (vertical)
        if (board[2] == "X" && board[8] == "X" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[3] == "X" && board[9] == "X" && board[6] == 6) {
          omove = 6;
          break;
        }

        if (board[4] == "X" && board[7] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top one (vertical)
        if (board[5] == "X" && board[8] == "X" && board[2] == 2) {
          omove = 2;
          break;
        }
        if (board[6] == "X" && board[9] == "X" && board[3] == 3) {
          omove = 3;
          break;
        }

        if (board[1] == "X" && board[5] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom (diagnal)\
        if (board[1] == "X" && board[9] == "X" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal)\
        if (board[5] == "X" && board[9] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top (diagnal) \

        if (board[3] == "X" && board[5] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom (diagnal) /
        if (board[3] == "X" && board[7] == "X" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal) /
        if (board[5] == "X" && board[7] == "X" && board[3] == 3) {
          omove = 3;
          break;
        } //missing top (diagnal) /
        else {
          omove = omovenum(1, 9);
        }
        if (omove < 1 || omove > 9) error = 1;
        if (isNaN(board[omove]) == true) error = 1;
      }
      document.getElementById("cell" + omove).style.color = " #19FF19";
      document.getElementById("cell" + omove).innerHTML = turn;
      board[omove] = turn;

      changeTurn();
      checkO();
      checkO();
      draw1();
      if (endgame == true)
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    }
  }
}

function game4() {
  if (start == true) {
    removeevent();
    start = false;
    reset();
    drawboard(board);
  }
  start = true;
  document.getElementById("level").innerHTML = "<h1> LEVEL: EXPERT</h1>";
  turn = "X";
  var turnnum = 1;
  endgame = false;
  reset();
  if (endgame == false) {
    document.getElementById("cell1").onclick = cellfunc[1];
    document.getElementById("cell2").onclick = cellfunc[2];
    document.getElementById("cell3").onclick = cellfunc[3];
    document.getElementById("cell4").onclick = cellfunc[4];
    document.getElementById("cell5").onclick = cellfunc[5];
    document.getElementById("cell6").onclick = cellfunc[6];
    document.getElementById("cell7").onclick = cellfunc[7];
    document.getElementById("cell8").onclick = cellfunc[8];
    document.getElementById("cell9").onclick = cellfunc[9];

    document
      .getElementById("cell1")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell2")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell3")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell4")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell5")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell6")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell7")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell8")
      .addEventListener("click", function error() {
        ogame4();
      });
    document
      .getElementById("cell9")
      .addEventListener("click", function error() {
        ogame4();
      });
  }
  function ogame4() {
    if (endgame == true)
      document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
    else if (endgame == false && turn == "O") {
      error = 1;
      while (error == 1) {
        error = 0;

        if (board[1] == "O" && board[2] == "O" && board[3] == 3) {
          omove = 3;
          break;
        } //missing right end (horizontal)
        if (board[4] == "O" && board[5] == "O" && board[6] == 6) {
          omove = 6;
          break;
        }
        if (board[7] == "O" && board[8] == "O" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "O" && board[3] == "O" && board[2] == 2) {
          omove = 2;
          break;
        } //missing middle (horizontal)
        if (board[4] == "O" && board[6] == "O" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[7] == "O" && board[9] == "O" && board[8] == 8) {
          omove = 8;
          break;
        }

        if (board[2] == "O" && board[3] == "O" && board[1] == 1) {
          omove = 1;
          break;
        } //missing left end (horizontal)
        if (board[5] == "O" && board[6] == "O" && board[4] == 4) {
          omove = 4;
          break;
        }
        if (board[8] == "O" && board[9] == "O" && board[7] == 7) {
          omove = 7;
          break;
        }

        if (board[1] == "O" && board[4] == "O" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom one (vertical)
        if (board[2] == "O" && board[5] == "O" && board[8] == 8) {
          omove = 8;
          break;
        }
        if (board[3] == "O" && board[6] == "O" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "O" && board[7] == "O" && board[4] == 4) {
          omove = 4;
          break;
        } //missing middle one (vertical)
        if (board[2] == "O" && board[8] == "O" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[3] == "O" && board[9] == "O" && board[6] == 6) {
          omove = 6;
          break;
        }

        if (board[4] == "O" && board[7] == "O" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top one (vertical)
        if (board[5] == "O" && board[8] == "O" && board[2] == 2) {
          omove = 2;
          break;
        }
        if (board[6] == "O" && board[9] == "O" && board[3] == 3) {
          omove = 3;
          break;
        }

        if (board[1] == "O" && board[5] == "O" && board[9] == 9) {
          omove = 9;
          break;
        } //missing bottom (diagnal)\
        if (board[1] == "O" && board[9] == "O" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal)\
        if (board[5] == "O" && board[9] == "O" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top (diagnal) \

        if (board[3] == "O" && board[5] == "O" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom (diagnal) /
        if (board[3] == "O" && board[7] == "O" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal) /
        if (board[5] == "O" && board[7] == "O" && board[3] == 3) {
          omove = 3;
          break;
        } //missing top (diagnal) /

        if (board[1] == "X" && board[2] == "X" && board[3] == 3) {
          omove = 3;
          break;
        } //missing right end (horizontal)
        if (board[4] == "X" && board[5] == "X" && board[6] == 6) {
          omove = 6;
          break;
        }
        if (board[7] == "X" && board[8] == "X" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "X" && board[3] == "X" && board[2] == 2) {
          omove = 2;
          break;
        } //missing middle (horizontal)
        if (board[4] == "X" && board[6] == "X" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[7] == "X" && board[9] == "X" && board[8] == 8) {
          omove = 8;
          break;
        }

        if (board[2] == "X" && board[3] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing left end (horizontal)
        if (board[5] == "X" && board[6] == "X" && board[4] == 4) {
          omove = 4;
          break;
        }
        if (board[8] == "X" && board[9] == "X" && board[7] == 7) {
          omove = 7;
          break;
        }

        if (board[1] == "X" && board[4] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom one (vertical)
        if (board[2] == "X" && board[5] == "X" && board[8] == 8) {
          omove = 8;
          break;
        }
        if (board[3] == "X" && board[6] == "X" && board[9] == 9) {
          omove = 9;
          break;
        }

        if (board[1] == "X" && board[7] == "X" && board[4] == 4) {
          omove = 4;
          break;
        } //missing middle one (vertical)
        if (board[2] == "X" && board[8] == "X" && board[5] == 5) {
          omove = 5;
          break;
        }
        if (board[3] == "X" && board[9] == "X" && board[6] == 6) {
          omove = 6;
          break;
        }

        if (board[4] == "X" && board[7] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top one (vertical)
        if (board[5] == "X" && board[8] == "X" && board[2] == 2) {
          omove = 2;
          break;
        }
        if (board[6] == "X" && board[9] == "X" && board[3] == 3) {
          omove = 3;
          break;
        }

        if (board[1] == "X" && board[5] == "X" && board[9] == 9) {
          omove = 9;
          break;
        } //missing bottom (diagnal)\
        if (board[1] == "X" && board[9] == "X" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal)\
        if (board[5] == "X" && board[9] == "X" && board[1] == 1) {
          omove = 1;
          break;
        } //missing top (diagnal) \

        if (board[3] == "X" && board[5] == "X" && board[7] == 7) {
          omove = 7;
          break;
        } //missing bottom (diagnal) /
        if (board[3] == "X" && board[7] == "X" && board[5] == 5) {
          omove = 5;
          break;
        } //missing middle (diagnal) /
        if (board[5] == "X" && board[7] == "X" && board[3] == 3) {
          omove = 3;
          break;
        } //missing top (diagnal) /

        //alert(turnnum)

        if (turnnum == 1) {
          //alert(turnnum+" Turn");
          if (
            board[1] == "X" ||
            board[3] == "X" ||
            board[7] == "X" ||
            board[9] == "X"
          ) {
            omove = 5;
            break;
          } //first turn
          if (board[5] == "X") {
            omove = 1;
            break;
          } //first turn
          if (
            board[2] == "X" ||
            board[6] == "X" ||
            board[8] == "X" ||
            board[4] == "X"
          ) {
            omove = 5;
            break;
          } else {
            omove = omovenum(1, 9);
          }
          if (omove < 1 || omove > 9) error = 1;
          if (isNaN(board[omove]) == true) error = 1;
        }
        if (turnnum == 2) {
          //alert(turnnum+" Turn");
          if (board[5] == "X" && board[9] == "X" && board[3] == 3) {
            omove = 3;
            break;
          }
          if (board[4] == "X" && board[3] == "X" && board[7] == 7) {
            omove = 7;
            break;
          }
          if (board[4] == "X" && board[8] == "X" && board[7] == 7) {
            omove = 7;
            break;
          }
          if (board[6] == "X" && board[8] == "X" && board[9] == 9) {
            omove = 9;
            break;
          }
          if (board[1] == "X" && board[8] == "X" && board[4] == 4) {
            omove = 4;
            break;
          }
          if (board[2] == "X" && board[4] == "X" && board[1] == 1) {
            omove = 1;
            break;
          }
          if (board[2] == "X" && board[6] == "X" && board[3] == 3) {
            omove = 3;
            break;
          }
          if (board[2] == "X" && board[9] == "X" && board[6] == 6) {
            omove = 3;
            break;
          }
          if (board[1] == "X" && board[6] == "X" && board[4] == 4) {
            omove = 3;
            break;
          }
          if (board[1] == "X" && board[2] == 2) {
            omove = 2;
            break;
          }
          if (board[3] == "X" && board[4] == 4) {
            omove = 4;
            break;
          }
          if (board[7] == "X" && board[6] == 6) {
            omove = 6;
            break;
          }
          if (board[9] == "X" && board[8] == 8) {
            omove = 8;
            break;
          } else {
            omove = omovenum(1, 9);
          }
          if (omove < 1 || omove > 9) error = 1;
          if (isNaN(board[omove]) == true) error = 1;
        }
        if (turnnum == 3) {
          //alert(turnnum+" Turn");
          if (board[4] == "X" && board[6] == "X" && board[9] == 9) {
            omove = 9;
            break;
          }
          if (
            board[9] == "X" &&
            board[4] == "X" &&
            board[2] == "X" &&
            board[1] == 1
          ) {
            omove = 1;
            break;
          } else {
            omove = omovenum(1, 9);
          }
          if (omove < 1 || omove > 9) error = 1;
          if (isNaN(board[omove]) == true) error = 1;
        } else {
          omove = omovenum(1, 9);
        }
        //alert(omove+" omove");
        if (omove < 1 || omove > 9) error = 1;
        if (isNaN(board[omove]) == true) error = 1;
      }
      //alert(omove);
      document.getElementById("cell" + omove).style.color = " #19FF19";
      document.getElementById("cell" + omove).innerHTML = turn;
      board[omove] = turn;
      turnnum++;
      //alert("after turn "+turnnum)
      changeTurn();
      checkO();
      checkO();
      draw1();
      if (endgame == true) {
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
        error = 0;
      }
    }
  }
}

function omovenum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reset() {
  for (i = 1; i < 10; i++) board[i] = i;
  document.getElementById("cell1").innerHTML = 1;
  document.getElementById("cell2").innerHTML = 2;
  document.getElementById("cell3").innerHTML = 3;
  document.getElementById("cell4").innerHTML = 4;
  document.getElementById("cell5").innerHTML = 5;
  document.getElementById("cell6").innerHTML = 6;
  document.getElementById("cell7").innerHTML = 7;
  document.getElementById("cell8").innerHTML = 8;
  document.getElementById("cell9").innerHTML = 9;
}

function draw1() {
  if (endgame == false) {
    for (i = 0, bcount = 0; i <= 9; i++) if (isNaN(board[i]) == false) bcount++;
    if (bcount == 0) {
      alert("Draw");
      endgame = true;
      draw++;
      if (endgame == true) {
        document.getElementById("level").innerHTML = "<h1> CHOOSE A LEVEL</h1>";
        score();
        removeevent();
      }
    }
  }
}
function checkX() {
  if (endgame == false) {
    if (board[1] == "X" && board[2] == "X" && board[3] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[4] == "X" && board[5] == "X" && board[6] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[7] == "X" && board[8] == "X" && board[9] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[1] == "X" && board[5] == "X" && board[9] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[3] == "X" && board[5] == "X" && board[7] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    if (board[3] == "X" && board[6] == "X" && board[9] == "X") {
      alert("X wins!");
      endgame = true;
      xwin++;
      score();
      removeevent();
    }
    //if (endgame == true){ removeevent();alert("endgame "+endgame +" checkx")}
  }
}

function checkO() {
  if (endgame == false) {
    if (board[1] == "O" && board[2] == "O" && board[3] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[4] == "O" && board[5] == "O" && board[6] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[7] == "O" && board[8] == "O" && board[9] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[1] == "O" && board[5] == "O" && board[9] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[3] == "O" && board[5] == "O" && board[7] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    if (board[3] == "O" && board[6] == "O" && board[9] == "O") {
      alert("O wins!");
      endgame = true;
      owin++;
      score();
      removeevent();
    }
    //if (endgame == true) { removeevent();alert("endgame "+endgame +" checkO")}
  }
}
function removeevent() {
  document
    .getElementById("cell1")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell2")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell3")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell4")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell5")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell6")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell7")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell8")
    .removeEventListener("click", function error() {
      ogame4();
    });
  document
    .getElementById("cell9")
    .removeEventListener("click", function error() {
      ogame4();
    });

  document
    .getElementById("cell1")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell2")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell3")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell4")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell5")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell6")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell7")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell8")
    .removeEventListener("click", function error() {
      ogame3();
    });
  document
    .getElementById("cell9")
    .removeEventListener("click", function error() {
      ogame3();
    });

  document
    .getElementById("cell1")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell2")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell3")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell4")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell5")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell6")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell7")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell8")
    .removeEventListener("click", function error() {
      ogame2();
    });
  document
    .getElementById("cell9")
    .removeEventListener("click", function error() {
      ogame2();
    });

  document
    .getElementById("cell1")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell2")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell3")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell4")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell5")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell6")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell7")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell8")
    .removeEventListener("click", function error() {
      ogame1();
    });
  document
    .getElementById("cell9")
    .removeEventListener("click", function error() {
      ogame1();
    });

  document
    .getElementById("cell1")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell2")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell3")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell4")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell5")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell6")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell7")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell8")
    .removeEventListener("click", function error() {
      ogame();
    });
  document
    .getElementById("cell9")
    .removeEventListener("click", function error() {
      ogame();
    });
}
