let fish = [];
fish = [{
    color: "light blue",
    value: "1",
    img: ""
},
{
    color: "light blue",
    value: "2",
    img: ""
    }];

// Get the element
let elem = document.querySelector('.card');

// Update the ID and add a class
// clone.classList.add('text-large1');

// Inject it into the DOM
for (let i = 0; i < 100; i++){
    // elem.after(clone);
    let clone = elem.cloneNode(true);
    elem.after(clone);
    // elem.parentNode.appendChild(clone)
}

$('.card').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('flipped');
});