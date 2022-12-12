var navString = '<nav class="navbar is-dark" role="navigation" aria-label="main navigation"> <div class="navbar-brand"> <a class="navbar-item" href="/index.html"> <img src="/cetechwhite.png" width="50" height="50"> </a> <a role="button" class="navbar-burger is-dark" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"> <span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span> </a> </div> <div id="navbarBasicExample" class="navbar-menu is-dark"> <div class="navbar-start is-dark"> <a class="navbar-item is-dark" href="/index.html"> Home </a> <a class="navbar-item" href="/resume/" > Resume </a> <div class="navbar-item has-dropdown is-hoverable"> <a class="navbar-link" > Games </a> <div class="navbar-dropdown"> <a class="navbar-item" href="/yatzee/"> Yatzee </a> <a class="navbar-item" href="/tictac/"> Tic Tac Toe </a> <a class="navbar-item" href="/bingo/"> Bingo </a> <a class="navbar-item" href="/memory/"> Memory </a> <a class="navbar-item" href="https://mtg.chrisedwards.tech"> MTG Life Counter </a> </div> </div> <div class="navbar-item has-dropdown is-hoverable is-dark"> <a class="navbar-link" > Ultilities </a> <div class="navbar-dropdown"> <a class="navbar-item" href="/speak"> Speak </a> <a class="navbar-item" href="/binary/"> Binary to ASCII </a> <a class="navbar-item" href="/youtube_convert/"> YouTube Converter </a> <a class="navbar-item" href="/nato/"> NATO Alpha </a> </div> </div> </div> </div> </nav>'
document.getElementById('navContainer').innerHTML = navString;

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
    
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
    
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    
      });
    });
    
    });
  