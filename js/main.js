let burger = document.querySelector('.nav-burger');
let menu = document.querySelector('.mobile-menu');
let lang = document.querySelector('.lang');
let body = document.body;

lang.addEventListener('click', function() {
    toggle(this, 'active');
});

burger.addEventListener('click', function() {
    toggle(this, 'active');
    toggle(menu, 'active');
    toggle(body, 'lock');
});


let x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction);


window.addEventListener("scroll", function() {
    headerFixed();  
});


// Functions ==================
function headerFixed(){
    let nav = document.querySelector(".nav-bar");
    let offset_main = document.querySelector("main").offsetTop;

    if (offset_main <= window.scrollY) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
}


// if window width is more than 992px hide mobile menu
function myFunction(x) {
    if (x.matches) { // If media query matches
        burger.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('lock');
    }
}

// Toggle function
function toggle(element, add) {
    return element.classList.toggle(add);
} 
