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

//Smooth scroll

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
      bodyLock.classList.remove('lock');
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

