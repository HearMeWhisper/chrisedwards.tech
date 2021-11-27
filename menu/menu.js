function slideout() {
    if (document.getElementById("ham").className == "ham-menu") {
        document.getElementById("ham").className = "ham-menu2";
        document.getElementById("ham").focus();
        document.getElementById("menu").onclick = null; // console.log("show");
    } else if (document.getElementById("ham").className == "ham-menu2") {
        document.getElementById("ham").className = "ham-menu";
        document.getElementById("menu").onclick = function() {
            slideout()
        }; // console.log("hide");
    }
}


function closemenu1() {
    setTimeout(function() {
        document.getElementById("ham").className = "ham-menu";
        document.getElementById("menu").onclick = function() {
            slideout()
        }
    }, 250); //console.log("off click");
}
var sites = [
    ["/", "Home"],
    ["/resume/", "Resume"],
    ["/tictac/", "Tic Tac Touch"],
    ["/bingo/", "Bingo!"],
    ["/memory/", "Memory"],
    ["/yatzee/", "Yatzee!"],
    ["/MTG/", "MTG"],
    ["/youtube_convert/", "Youtube Converter"],
    ["/binary/", "Binary Converter"],
    ["/rollDice", "Dice"],
    ["/be_mine/", "Be Mine!"],
    ["/media/Movies", "Movies"],
    ["/media/Tv%20Shows", "Tv Shows"]
];
var foobar = "";
for (i = 0; i < sites.length; i++) {
    // console.log(i)
    foobar += '<ul> <li><a href="' + sites[i][0] + '">' + sites[i][1] + '</a></li> <br />';
    // console.log(foobar)
    foobar += "</ul>"
}

//document.getElementById("ham").addEventListener('onmouseleave', function() {slideout(), alert('test')});
var foo = '<div  id="menu" onclick="slideout()"   ><img id="bars" src="/menu/3bar.png" /></div><div id="ham" class="ham-menu"  ><img id="bars" src="/menu/x.png" onclick="slideout()"/><div id="site"></div> </div>'

document.getElementById("nav_menu").innerHTML = foo;
document.getElementById("site").innerHTML = foobar;
