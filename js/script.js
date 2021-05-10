var menuBtn = document.getElementById('menu-btn')
var menuContainer = document.querySelector('.mobile .container')

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('collapsed')
});