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
    // console.log(minimalHeight);
    mainElement.style.minHeight = '' + minimalHeight + 'px';
}

function manoItalianoDropdown() {
    var navigationElement = document.querySelector('nav');
    var hamburger = document.querySelector('.fa-bars');
    $(navigationElement).slideToggle(1500, function(){
        hamburger.classList.toggle('hamburgeractive');
    });
}