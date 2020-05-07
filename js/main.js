let burger = document.querySelector('.nav-burger');
let menu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
});


// if window width is more than 992px hide mobile menu
function myFunction(x) {
    if (x.matches) { // If media query matches
        burger.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('lock');
    }
}

let x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction);
