const debounce = (f, ms) => {
  let timerID = null;

  return function(...args) {
    clearTimeout(timerID);

    timerID = setTimeout(f, ms, ...args);
  };
}

const input = document.querySelector('input');
const searchResults = document.querySelector('.searchResults');

const search = (event) => {
  const str = event.target.value;

  searchResults.innerHTML = '';

  if (!str) {
    return;
  }
  
  const results = document.createElement('div');
  results.innerHTML = `<br>Результаты поиска:<br> ${dataMock
    .filter(el => el.match(new RegExp(str, 'i'))).join('<br>')}`;
  searchResults.appendChild(results);
}

input.addEventListener('input', debounce(search, 1000));
