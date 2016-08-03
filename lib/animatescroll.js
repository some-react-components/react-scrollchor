'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animateScroll;

var _utils = require('./utils');

function animateScroll(id, animate) {
  var element = id ? document.getElementById(id) : document.body;

  if (!element) {
    throw new Error('Don\'t found element with id \'#' + id + '\'');
  }

  scrollTo(element, animate);
}

function scrollTo(element) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$offset = _ref.offset;
  var offset = _ref$offset === undefined ? 0 : _ref$offset;
  var _ref$duration = _ref.duration;
  var duration = _ref$duration === undefined ? 400 : _ref$duration;
  var _ref$easing = _ref.easing;
  var easing = _ref$easing === undefined ? easeOutQuad : _ref$easing;

  var start = (0, _utils.getScrollTop)();
  var to = (0, _utils.getOffsetTop)(element) + offset;
  var change = to - start;
  var increment = 20;

  function animate(elapsedTime) {
    var elapsed = elapsedTime + increment;
    var position = easing(null, elapsed, start, change, duration);

    (0, _utils.setScrollTop)(position);

    if (elapsed < duration) {
      setTimeout(function () {
        animate(elapsed);
      }, increment);
    }
  }

  animate(0);
}

// jQuery easing 'swing'
function easeOutQuad(x, t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}