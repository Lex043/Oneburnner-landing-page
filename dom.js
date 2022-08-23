// Select hamburger

const hamBurger = document.querySelector(".hamburger");
const hamBurgerMark = document.querySelector(".hamburger__mark");

const linksEl = document.querySelector(".links");

const open = () => {
  linksEl.style.display = "flex";
  hamBurger.style.display = "none";
  hamBurgerMark.style.display = "flex";
};

const close = () => {
  linksEl.style.display = "none";
  hamBurgerMark.style.display = "none";
  hamBurger.style.display = "flex";
};

hamBurger.addEventListener("click", open);
hamBurgerMark.addEventListener("click", close);
