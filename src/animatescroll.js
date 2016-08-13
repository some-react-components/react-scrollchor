import { getScrollTop, setScrollTop, getOffsetTop } from './utils';
import warning from 'fbjs/lib/warning';

export default function animateScroll(id, animate) {
  const element = id ? document.getElementById(id) : document.body;

  warning(element, `Don't found element with id '#${id}'`);

  scrollTo(element, animate);
}

function scrollTo(element, { offset = 0, duration = 400, easing = easeOutQuad } = {}) {
  const start = getScrollTop();
  const to = getOffsetTop(element) + offset;
  const change = to - start;
  const increment = 20;

  function animate(elapsedTime) {
    const elapsed = elapsedTime + increment;
    const position = easing(null, elapsed, start, change, duration);

    setScrollTop(position);

    if (elapsed < duration) {
      setTimeout(function() {
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
