//Slider
"use strict";
Number.isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' && isNaN(value);
}


var swiper = new Swiper('.intro__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiper2 = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 3
    }
  }
});


// Burger Menu
var burgerMenu = document.querySelector('.burger__menu');
var navMenu = document.querySelector('.nav');
var bodyLock = document.querySelector('body');
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  bodyLock.classList.toggle('lock');
});

var fixedHeader = document.querySelector('.header');
//Fixed header
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    fixedHeader.classList.add('fixed');
  } else {
    fixedHeader.classList.remove('fixed');
  }
});


//Form

function inputPlaceholder() {
  var inputList = document.querySelectorAll('.inputList');

  for (var i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('focus', function (e) {
      e.target.nextElementSibling.classList.add('active');
    });
    inputList[i].addEventListener('blur', function (e) {
      if (e.target.value !== '') return;
      e.target.nextElementSibling.classList.remove('active');
    });
  }
}

inputPlaceholder();


