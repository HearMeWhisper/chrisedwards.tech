window.onunload = function(){
    localStorage.setItem('playerCount', playerCount);
    for (i=1; i<9; i++){
        localStorage.setItem('playerName'+i, document.getElementById('name'+i).innerHTML);
        localStorage.setItem('lifeCount'+i, document.getElementById('lifeCount'+i).innerHTML)
    }
};
window.onload = function(){
    localStorage.getItem('playerCount');
    for (i=1; i<9; i++){
        if (localStorage.getItem('playerName'+i)){
        document.getElementById('name'+i).innerHTML = localStorage.getItem('playerName'+i);
        console.log(document.getElementById('name'+i).innerHTML)
        }
  
        if (localStorage.getItem('lifeCount'+i)){
        
        document.getElementById('lifeCount'+i).innerHTML = localStorage.getItem('lifeCount'+i)
        }
       
    }
};



const startLife = 20;
let playerCount;
if (!localStorage.getItem('playerCount')) {playerCount = 1; localStorage.setItem('playerCount', playerCount);}
playerCount = localStorage.getItem('playerCount');
let playerCount1 = Number(playerCount)+1;
for (i=playerCount1; i<9; i++){document.getElementById("player"+i).style.display = "none" }

    let lifeIncrease1 = () => {
    let counter = Number(this.document.getElementById("lifeCount1").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount1").style.color = "black";
    document.getElementById("lifeCount1").innerHTML = counter;
    };

    // let fiveIncreaseLife1 = () => {
    //     let counter = Number(this.document.getElementById("lifeCount1").innerHTML);
    // counter +=5;
    // if (counter > 0) document.getElementById("lifeCount1").style.color = "black";
    // document.getElementById("lifeCount1").innerHTML = counter;
    // }

    
    let lifeIncrease = (playerNum) => {
      let counter = Number(this.document.getElementById("lifeCount"+playerNum).innerHTML);
      counter++;
      if (counter >= 0) document.getElementById("lifeCount"+playerNum).style.color = "black";
      document.getElementById("lifeCount"+playerNum).innerHTML = counter;
      };

      let lifeDecrease = (playerNum) => {
        let counter = Number(document.getElementById("lifeCount"+playerNum).innerHTML);
        counter--;
        if (counter <= 0) document.getElementById("lifeCount"+playerNum).style.color = "red";
        document.getElementById("lifeCount"+playerNum).innerHTML = counter;
        };

        let lifeIncrease5 = (playerNum) => {
        for (i=0; i<5; i++) lifeIncrease(playerNum);
          };
   
          let lifeDecrease5 = (playerNum) => {
            for (i=0; i<5; i++) lifeDecrease(playerNum);
              };

    let reset = () => {
        Swal.fire({
            title: 'What would you like to reset?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Life',
            denyButtonText: `Names`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Life reset', '', 'success');
              resetLife();
            } else if (result.isDenied) {
              Swal.fire('All player names reset', '', 'success');
              resetName();
            }
          })
        
        }
let resetLife = () => {
for (i=1; i<9; i++){
  document.getElementById("lifeCount"+i).innerHTML = 20  
}

}

let resetName = () => {
    for (i=1; i<9; i++){
      document.getElementById("name"+i).innerHTML = "Player " +i
    }
    
    }

let addPlayer = () => {
if (playerCount != 8){
   playerCount++;
document.getElementById("player"+playerCount).style.display = ""; 
localStorage.setItem('playerCount', playerCount);
}

}

let removePlayer = () => {
if (playerCount != 1){
document.getElementById("player"+playerCount).style.display = "none"; 
playerCount--;
localStorage.setItem('playerCount', playerCount);
}

}

