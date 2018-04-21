// Function that calculates the minimalheight of the main element
function mainElementMinHeight() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var minimalHeight;
    var mainElement = document.querySelector('main');
    if (width > 800) {
        minimalHeight = height - 67;
    } else {
        minimalHeight = height - 69;
    }
    mainElement.style.minHeight = '' + minimalHeight + 'px';
}

// Function that slide the hamburgermenu and it's content
function manoItalianoDropdown() {
    var navigationElement = document.querySelector('nav');
    var hamburger = document.querySelector('.fa-bars');
    $(navigationElement).slideToggle(1500, function(){
        hamburger.classList.toggle('hamburgeractive');
    });
}

function addToCartAlert() {
    alert("Du kan ej beställa denna produkt just nu. Försök igen senare.");
}