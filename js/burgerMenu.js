(function() {
let buttonMenu = document.querySelector('.burgerMenu');
let mainNav = document.querySelector('.mainNav');
let buttonClose = document.querySelector('.close');
let mainItemLink = document.querySelectorAll('.mainItem a');
buttonMenu.addEventListener('click', function(){
    mainNav.classList.add('visible')
});
function clickClose (e) {
    e.addEventListener('click', function(){
        mainNav.classList.remove('visible')
    });
}
clickClose(buttonClose);
mainItemLink.forEach(function(el) {
    clickClose(el);
});
})();
