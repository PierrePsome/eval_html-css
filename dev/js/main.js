let burger = document.getElementsByClassName('burger')[0];
let overlay = document.getElementsByClassName('black-overlay')[0];
let menu = document.getElementsByClassName('menu-phone')[0];

console.log(burger);

burger.addEventListener('click', function() {
    overlay.classList.add('true');
    menu.style.left = "0px";
})

overlay.addEventListener('click', function() {
    overlay.classList.remove('true');
    menu.style.left = "-30%";
})