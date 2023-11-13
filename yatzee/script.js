  let die_value = [];
        for (i = 0; i < 5; i++) {
                die_value[i] = new Array(2);
            }
            for (i = 0, j = 1; i < 5; i++, j++) {
                die_value[i][0] = "<img src='dice/die" + j + ".png' />";
                die_value[i][1] = false;
            }
// let cellOrder = 0;
function hold(cell) {
    let length = document.getElementsByClassName("dice_pic").length;
    let length_hold = document.getElementsByClassName("dice_pic_hold").length;
    cellOrder = cell.style.order;
    console.log(length);
        if (cell.className == "dice_pic") {
            cell.className = "dice_pic_hold";
            // cell.style.order = cellOrder + 1;
            // console.log(`order${cell.style.order}`)
        } else {
            cell.className = "dice_pic"
    } 
    // cellOrder = 0;
}
 
function rollDice() {
    let dice = document.getElementsByClassName('dice_pic');
    let dice_hold = document.getElementsByClassName('dice_pic_hold'); 
    document.getElementById('roll').removeAttribute('onclick');
function shuffDice() {
   for ( i = 0; i < dice.length; i++) {
        var rand = Math.floor(Math.random() * 6) + 1;
   
       dice[i].src = 'dice/die' + rand + '.png';
       dice[i].setAttribute('onclick', 'hold(this)');
    }  
}
    for (i = 0, j= 1; i < dice.length; i++, j++) {
     dice[i].removeAttribute('onclick');
        dice[i].src = 'dice/die' + j + '.gif';
        console.log('gif')
        setTimeout(shuffDice, 700)

    }
    document.getElementById('roll').setAttribute('onclick', 'rollDice()');
}    
            
