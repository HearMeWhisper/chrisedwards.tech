var imgArray = [
    "vday/darwin.jpg",
    "vday/chem.jpg",
    "vday/doc.jpg",
    "vday/proton.jpg",
    "vday/periodic.jpg",
    "vday/slither.jpg",
    "vday/robot.jpg",
    "vday/bed.jpg"
];

var imgNoArray = [
    "vday/no/dontlike.gif",
    "vday/no/jimtryagain.gif",
    "vday/no/pleaseyes.gif",
    "vday/no/sure.gif",
    "vday/no/tryagain.gif",
    "vday/no/wrong.gif"
];
var rand;

function preload(ary) {
    for (i = 0; i < ary.length; i++) {
        document.getElementById("preload").src = ary[i];
        console.log(document.getElementById("preload").src);

    }
}

function preload_both() {
    preload(imgArray);
    preload(imgNoArray);
};

function yes(ary) {
    new_rand = Math.floor(Math.random() * ary.length);
    while (rand == new_rand) new_rand = Math.floor(Math.random() * ary.length);
    rand = new_rand;
    document.getElementById("result_img").style.display = "unset";
    document.getElementById('result_img').src = ary[rand];
}

function no(ary) {
    //  document.getElementById('no').style.display = "none";
    new_rand = Math.floor(Math.random() * ary.length);
    while (rand == new_rand) new_rand = Math.floor(Math.random() * ary.length);
    rand = new_rand;
    document.getElementById("result_img").style.display = "unset";
    document.getElementById('result_img').src = ary[rand];
}