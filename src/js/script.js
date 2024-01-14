const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuOpen = !menuOpen;
});

function toggleMenu() {
  const x = document.getElementById("myLinks");
  x.style.display = menuOpen ? "none" : "flex";
  menuOpen = !menuOpen;
}
