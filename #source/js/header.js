let body = document.querySelector("body");
const logo = document.querySelector(".header__logo svg");

// БУРГЕР МЕНЮ
const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

const bodyy = document.body;
const mainWidth = bodyy.clientWidth;

burger.addEventListener("click", menuFunc);

function menuFunc() {
  logo.classList.toggle("rotate");
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  bodyy.classList.toggle("active");
}

// Закрывать бургер меню когда окно браузера больше 767
window.addEventListener("resize", function (e) {
  const size = e.currentTarget.outerWidth;

  if (size > 500) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    // bodyy.classList.remove("active");
  }
});

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  logo.classList.remove("rotate");
  burger.classList.remove("active");
  menu.classList.remove("active");
  bodyy.classList.remove("active");
}
