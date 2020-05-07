let burger = document.querySelector('.nav-burger');
let menu = document.querySelector('.mobile-menu');
let lang = document.querySelector('.lang');
let body = document.body;

lang.addEventListener('click', function() {
    togle(this, 'active');
});

burger.addEventListener('click', function() {
    togle(this, 'active');
    togle(menu, 'active');
    togle(body, 'lock');
});


let x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction);


$(window).scroll(function() {
    headerFixed();  
});


// Functions
function headerFixed(){
    var main = $( "main" );
    var offset_main = main.offset();

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

function togle(element, add) {
    return element.classList.toggle(add);
} 
