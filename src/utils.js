export function getScrollTop () {
  // jQuery => $('html, body').scrollTop
  return document.documentElement.scrollTop || document.body.scrollTop;
}

export function setScrollTop (position) {
  document.documentElement.scrollTop = document.body.scrollTop = position;
}

export function getOffsetTop (element) {
  const { top } = element.getBoundingClientRect();
  return top + getScrollTop();
}
