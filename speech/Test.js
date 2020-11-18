
if ('speechSynthesis' in window) {
    //
}else{
    alert('error')
}
let num = 1;
// alert("test");
var msg = new SpeechSynthesisUtterance(); 
var voices = window.speechSynthesis.getVoices(); 
// msg.voice = voices[01]; 
msg.volume = 1; 
// From 0 to 1 
msg.rate = 1; 
// From 0.1 to 10 
msg.pitch = 0; 
// From 0 to 2 
msg.text = num; 
msg.lang = 'en';
// 
function test(){
document.getElementById("out").onclick = "";
document.getElementById("out").innerHTML = num;
msg.text = num;
    speechSynthesis.speak(msg);
    num= num+1;
    document.getElementById("out").onclick = "out()";
}