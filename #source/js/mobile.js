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
