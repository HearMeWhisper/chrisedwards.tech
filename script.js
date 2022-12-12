    var app = document.getElementById('type');
 let scroll = () => {
document.getElementById("type").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
var typewriter = new Typewriter(document.getElementById('type'), {
  loop: false,
  cursor: "_",
  delay: 120,
  // onCreateTextNode: scroll,
});

typewriter
  .typeString('name') 
  .pasteString('<br>')
  .pauseFor(2000)
  .pasteString('chris edwards')
  .pasteString('<br>')
  .pasteString("<span id='user'>user@localhost:</span>")
  .typeString(' whoami')
  .pauseFor(2000)
  .pasteString('<br>')
  .pasteString('computer science student and enthusist')
  .pasteString('<br>')
  .pasteString("<span id='user'>user@localhost:</span>")
  .typeString(' why does this exist?')
  .pauseFor(2000)  
  .pasteString('<br onload="scroll()">')
  .callFunction(scroll)
  .pasteString('this is a collection of games and utilities that i wrote on my learning path')
  .pasteString('<br>')
  .pasteString("<span onload='scroll()' id='user'>user@localhost:</span>")
  .callFunction(scroll)
  .typeString(' ls')
  .pauseFor(2000)
  .pasteString('<br>')
  .callFunction(scroll)
  .pasteString('<a class="link" href="/resume/">resume</a>  <a class="link" href="/yatzee/">yatzee</a>  <a class="link" href="/tictac/">tic tac touch</a><br>')
  .callFunction(scroll)
  .pasteString('<a class="link" href="/MTG/">mtg life counter</a>  <a class="link" href="/youtube_convert/">youtube downloader</a>  <a class="link" href="/binary/">binary to ascii converter</a>')
   .pasteString('<br>')
   .callFunction(scroll)
  .pasteString("<span id='user'>user@localhost:</span>")
  .start();


 

//    .pasteString("user@localhost:")  Computer Science Student and Enthusist