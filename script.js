    var app = document.getElementById('type');

var typewriter = new Typewriter(document.getElementById('type'), {
  loop: false,
  cursor: "_",
  delay: 150,
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
  .pasteString('<br>')
  .pasteString('this is a collection of games and utilities that i wrote on my learning path')
  .pasteString('<br>')
  .pasteString("<span id='user'>user@localhost:</span>")
  .typeString(' ls')
  .pauseFor(2000)
  .pasteString('<br>')
  .pasteString('<a class="link" href="/resume/">resume</a>  <a class="link" href="/yatzee/">yatzee</a>  <a class="link" href="/tictac/">tic tac touch</a><br>')
  .pasteString('<a class="link" href="/MTG/">mtg life counter</a>  <a class="link" href="/youtube_convert/">youtube downloader</a>  <a class="link" href="/binary/">binary to ascii converter</a>')
   .pasteString('<br>')
  .pasteString("<span id='user'>user@localhost:</span>")
  .start();


//    .pasteString("user@localhost:")  Computer Science Student and Enthusist