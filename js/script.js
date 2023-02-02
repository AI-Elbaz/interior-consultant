const BREAKPOINT = 992;

let menuBtn = document.getElementById("menu-btn"),
  MenuWrapper = document.querySelector("nav"),
  MenuContainer = MenuWrapper.querySelector(".menu-container"),
  width = window.innerWidth;

if (width <= BREAKPOINT) {
  MenuWrapper.classList.add("mobile");
}

menuBtn.addEventListener("click", () => {
  MenuContainer.classList.toggle("collapsed");
  menuBtn.classList.toggle("opened");
});

window.addEventListener("resize", (e) => {
  let width = e.target.innerWidth;
  MenuWrapper.classList.toggle("mobile", width <= BREAKPOINT);
});
