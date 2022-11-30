
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

let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

let bodyU = document.body;

if (isMobile.any()) {
  bodyU.classList.add("touch");
} else {
  bodyU.classList.add("mouse");
}

// // burger menu
// const burger = document.querySelector(".header__burger");
// const menu = document.querySelector(".menu");
// const bodyy = document.body;
// const mainWidth = bodyy.clientWidth;
// console.log(mainWidth);

// burger.addEventListener("click", menuFunc);

// function menuFunc() {
//   burger.classList.toggle("active");
//   menu.classList.toggle("active");
//   bodyy.classList.toggle("active");
// }

// // Закрывать бургер меню когда окно браузера больше 767
// window.addEventListener("resize", function (e) {
//   const size = e.currentTarget.outerWidth;

//   if (size > 767) {
//     burger.classList.remove("active");
//     menu.classList.remove("active");
//     bodyy.classList.remove("active");
//   }
// });


ScrollReveal().reveal(".up-amim", {
  delay: 100,
  duration: 1000,
});

ScrollReveal().reveal(".app", {
  delay: 100,
  duration: 1000,
});

ScrollReveal().reveal(".find", {
  delay: 100,
  duration: 1000,
});
ScrollReveal().reveal(".c1-anim", {
  delay: 100,
  duration: 1000,
});

ScrollReveal().reveal(".c2-anim", {
  delay: 200,
  duration: 1000,
});

ScrollReveal().reveal(".c3-anim", {
  delay: 300,
  duration: 1000,
});
ScrollReveal().reveal(".baner", {
  delay: 100,
  duration: 1000,
});
