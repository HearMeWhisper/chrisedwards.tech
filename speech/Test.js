
if ('speechSynthesis' in window) {
    //
}else{
    alert('error')
}
// alert("test");
var msg = new SpeechSynthesisUtterance(); 
var voices = window.speechSynthesis.getVoices(); 
msg.voice = voices[10]; 
msg.volume = 1; 
// From 0 to 1 
msg.rate = 1; 
// From 0.1 to 10 
msg.pitch = 0; 
// From 0 to 2 
msg.text = "1"; 
msg.lang = 'en';
speechSynthesis.speak(msg);