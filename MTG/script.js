window.onunload = function () {
  localStorage.setItem("playerCount", playerCount);
  for (i = 1; i < 9; i++) {
    localStorage.setItem(
      "playerName" + i,
      document.getElementById("name" + i).innerHTML
    );
    localStorage.setItem(
      "lifeCount" + i,
      document.getElementById("lifeCount" + i).innerHTML
    );
  }
};
window.onload = function () {
  localStorage.getItem("playerCount");
  for (i = 1; i < 9; i++) {
    if (localStorage.getItem("playerName" + i)) {
      document.getElementById("name" + i).innerHTML = localStorage.getItem(
        "playerName" + i
      );
      console.log(document.getElementById("name" + i).innerHTML);
    }

    if (localStorage.getItem("lifeCount" + i)) {
      document.getElementById("lifeCount" + i).innerHTML = localStorage.getItem(
        "lifeCount" + i
      );
    }
  }
};

function isInstalled() {
  // For iOS
  if (window.navigator.standalone) return true;
  document.getElementById("nav").style.display = "none";

  // For Android
  if (window.matchMedia("(display-mode: standalone)").matches) return true;
  document.getElementById("nav").style.display = "none";
  // If neither is true, it's not installed
  return false;
}

// document.getElementById("add").addEventListener("click", addPlayer);
// document.getElementById("remove").addEventListener("click", removePlayer);
// document.getElementById("reset").addEventListener("click", reset);

let startLife = 20;
let playerCount;
if (!localStorage.getItem("playerCount")) {
  playerCount = 1;
  localStorage.setItem("playerCount", playerCount);
}
playerCount = localStorage.getItem("playerCount");
let playerCount1 = Number(playerCount) + 1;
for (i = playerCount1; i < 9; i++) {
  document.getElementById("player" + i).style.display = "none";
}

let lifeIncrease = (playerNum) => {
  let counter = Number(
    this.document.getElementById("lifeCount" + playerNum).innerHTML
  );
  counter++;
  if (counter >= 0)
    document.getElementById("lifeCount" + playerNum).style.color = "black";
  document.getElementById("lifeCount" + playerNum).innerHTML = counter;
};

let lifeDecrease = (playerNum) => {
  let counter = Number(
    document.getElementById("lifeCount" + playerNum).innerHTML
  );
  counter--;
  if (counter <= 0)
    document.getElementById("lifeCount" + playerNum).style.color = "red";
  document.getElementById("lifeCount" + playerNum).innerHTML = counter;
};

let lifeIncrease5 = (playerNum) => {
  for (i = 0; i < 5; i++) lifeIncrease(playerNum);
};

let lifeDecrease5 = (playerNum) => {
  for (i = 0; i < 5; i++) lifeDecrease(playerNum);
};

let reset = () => {
  Swal.fire({
    title: "What would you like to reset?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Life",
    denyButtonText: `Names`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Life reset", "", "success");
      resetLife();
    } else if (result.isDenied) {
      Swal.fire("All player names reset", "", "success");
      resetName();
    }
  });
};
let resetLife = () => {
  for (i = 1; i < 9; i++) {
    document.getElementById("lifeCount" + i).innerHTML = 20;
  }
  startLife = Number(20);
};

let resetName = () => {
  for (i = 1; i < 9; i++) {
    document.getElementById("name" + i).innerHTML = "Player " + i;
  }
};

let addPlayer = () => {
  if (playerCount != 8) {
    playerCount++;
    document.getElementById("player" + playerCount).style.display = "";
    localStorage.setItem("playerCount", playerCount);
  }
};

let removePlayer = () => {
  if (playerCount != 1) {
    document.getElementById("player" + playerCount).style.display = "none";
    playerCount--;
    localStorage.setItem("playerCount", playerCount);
  }
};

let commander = () => {
  Swal.fire({
    title: "Start Commander Match? (life will be reset to 40)",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "yes",
    denyButtonText: `no`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Match started!", "", "success");
      startCommander();
    } else if (result.isDenied) {
      return;
    }
  });
};

let startCommander = () => {
  for (i = 1; i < 9; i++) {
    document.getElementById("lifeCount" + i).innerHTML = 40;
  }
  startLife = Number(40);
};

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

// let rand = Math.floor(Math.random() * 20 +1);
let random = () => {
  spin();
  let rand = Math.floor(Math.random() * 20 + 1);
  console.log(rand);
  document.getElementById("d20-face").innerHTML = rand;
};

// function rolar(){
//   let rolagem = Math.floor(Math.random() * 20 +1);
//   let valor = 1
//   spin()
//   document.getElementById("result").innerHTML = rolagem;
//   document.getElementById("span").innerHTML = parseInt(valor)+rolagem;
//   if (rolagem === 20){
//       document.getElementById("result").style.color = "var(--green)";
//       document.getElementById("body").style.backgroundColor = "var(--dark-green)";
//   }
//   else if(rolagem === 1){
//       document.getElementById("result").style.color = "var(--red)";
//       document.getElementById("body").style.backgroundColor = "var(--dark-red)";
//   }
//   else{
//       document.getElementById("result").style.color = "black";
//       document.getElementById("body").style.backgroundColor = "var(--black)";
//   }
// }
function spin() {
  document.getElementById("d20").classList.add("spin");
  setTimeout(function () {
    document.getElementById("d20").classList.remove("spin");
  }, 500);
}
