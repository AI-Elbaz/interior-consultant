const BREAKPOINT = 998;

var menuBtn = document.getElementById('menu-btn'),
    MenuWrapper = document.querySelector('nav'),
    MenuContainer = MenuWrapper.querySelector('.container'),

    content = document.querySelectorAll('#main, .MenuWrapper > footer'),
    width = window.innerWidth;

if (width <= BREAKPOINT) {
    MenuWrapper.classList.add('mobile');
}

menuBtn.addEventListener('click', () => {
    MenuContainer.classList.toggle('collapsed');
    menuBtn.classList.toggle('opened');
    content.forEach((e) => {
        e.classList.toggle('hide');
    });
});

window.addEventListener('resize', (e) => {
    let width = e['target']['innerWidth'];
    MenuWrapper.classList.toggle('mobile', width <= BREAKPOINT);
})