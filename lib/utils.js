"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getOffsetTop = getOffsetTop;
function getScrollTop() {
  // jQuery => $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function setScrollTop(position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

function getOffsetTop(element) {
  var _element$getBoundingC = element.getBoundingClientRect();

  var top = _element$getBoundingC.top;

  return top + getScrollTop();
}