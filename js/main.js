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


$(window).scroll(function() {
    headerFixed();  
});


// Functions
function headerFixed(){
    let offset_main = $( "main" ).offset();

    if (offset_main.top<=$(window).scrollTop()) {
        $(".nav-bar").addClass("fixed");
    } else {
        $(".nav-bar").removeClass("fixed");
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

function toggle(element, add) {
    return element.classList.toggle(add);
} 
