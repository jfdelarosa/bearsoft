(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _parallax = require("./modules/parallax");

var _parallax2 = _interopRequireDefault(_parallax);

var _scrollTo = require("./modules/scrollTo");

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _form = require("./modules/form");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _parallax2.default)();
document.querySelectorAll(".nav__element").forEach(function (el) {
  el.addEventListener("click", function () {
    var to = document.querySelector(el.dataset.element);
    (0, _scrollTo2.default)(to);
  });
});

document.querySelector(".form").addEventListener("submit", function (e) {
  (0, _form2.default)(e.target);
  e.preventDefault();
});

},{"./modules/form":2,"./modules/parallax":3,"./modules/scrollTo":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  var form = new FormData(el);
  document.querySelectorAll(".form__controller").forEach(function (el) {
    form.append(el.getAttribute('name'), el.value);
  });
  fetch("/mail.php", {
    method: "POST",
    body: form
  }).then(function (res) {
    return res;
  }).then(function (data) {
    console.log(data);
    console.log(JSON.stringify(data));
  });
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  window.addEventListener("scroll", function () {
    var offset = 200,
        constante = 2;
    var offsetY = window.pageYOffset + offset;
    document.querySelectorAll(".section .container").forEach(function (el, index, array) {
      var limit = el.offsetTop + el.offsetHeight + offset;
      if (offsetY > el.offsetTop && offsetY <= limit) {
        el.style.backgroundPositionY = "calc(1rem + " + (offsetY - el.offsetTop) / constante + "px)";
      } else {
        el.style.backgroundPositionY = "1rem";
      }
    });
  });
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  if (el) {
    var requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }();

    var i = 0;
    var pos = el.offsetTop - el.scrollTop + el.clientTop;
    var animateScroll = function animateScroll() {
      window.scrollTo(0, i += 40);
      if (i < pos) {
        requestAnimFrame(animateScroll);
      }
    };
    animateScroll();
  }
};

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
