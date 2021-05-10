var menuBtn = document.getElementById('menu-btn'),
    menuContainer = document.querySelector('nav .container'),
    mobileStyleWrapper = document.getElementsByTagName('nav')[0],
    width = window.innerWidth;

mobileStyleWrapper.classList.toggle('mobile', width <= 1200)

menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('collapsed');
    menuBtn.classList.toggle('opened');
});

window.addEventListener('resize', (e) => {
    let width = e['target']['innerWidth'];
    mobileStyleWrapper.classList.toggle('mobile', width <= 998);
})