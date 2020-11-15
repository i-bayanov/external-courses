const content = [
  'https://img3.goodfon.ru/original/1920x1200/d/5d/peyzazh-priroda-derevya-zeleno.jpg',
  'https://4tololo.ru/sites/default/files/images/20150211155414.jpg',
  'http://2.bp.blogspot.com/-wmKIRzogyrk/U9iqzb03H4I/AAAAAAAAIhc/O3LNcEXt7AI/s1600/canada-moraine-lake.jpg',
  'https://emigrantrus.ru/wp-content/uploads/2019/12/canada_main.jpg',
  'https://kaifolog.ru/uploads/posts/2018-05/1526699477_040.jpg',
];

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const maxIndex = content.length - 1;
let current = 0;

const autoplay = document.querySelector('.autoplay');

let timerId = setTimeout (turnAutoplay = () => {
  if (autoplay.checked) {
    showNext();
    timerId = setTimeout (turnAutoplay, 2000);
  } else {
    clearTimeout(timerId);
  }
}, 2000);

const getSlides = () => {
  const left = document.querySelector('.left');
  const center = document.querySelector('.center');
  const right = document.querySelector('.right');
  return {left, center, right};
}

const {left, center, right} = getSlides();
left.style.backgroundImage = `url(${content[maxIndex]})`;
center.style.backgroundImage = `url(${content[current]})`;
right.style.backgroundImage = `url(${content[current + 1]})`;

const showNext = () => {
  const {left, center, right} = getSlides();
  if (current === maxIndex) {
    current = 0;
    left.style.backgroundImage = `url(${content[current + 1]})`;
  } else if (current + 1 === maxIndex) {
    current++;
    left.style.backgroundImage = `url(${content[0]})`;
  } else {
    current++;
    left.style.backgroundImage = `url(${content[current + 1]})`;
  }
  left.classList.remove('left', 'toRight');
  left.classList.add('right');
  right.classList.remove('right', 'toRight');
  right.classList.add('center', 'toLeft');
  center.classList.remove('center', 'toRight');
  center.classList.add('left', 'toLeft');
}

const showPrev = () => {
  const {left, center, right} = getSlides();
  if (current === 0) {
    current = maxIndex;
    right.style.backgroundImage = `url(${content[current - 1]})`;
  } else if (current - 1 === 0) {
    current--;
    right.style.backgroundImage = `url(${content[maxIndex]})`;
  } else {
    current--;
    right.style.backgroundImage = `url(${content[current - 1]})`;
  }
  left.classList.remove('left', 'toLeft');
  left.classList.add('center', 'toRight');
  right.classList.remove('right', 'toLeft');
  right.classList.add('left');
  center.classList.remove('center', 'toLeft');
  center.classList.add('right', 'toRight');
}

next.addEventListener('click', showNext);
prev.addEventListener('click', showPrev);
autoplay.addEventListener('change', turnAutoplay);
