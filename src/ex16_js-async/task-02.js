const debounce = (f, ms) => {
  let timerID = null;

  return function(arg) {
    clearTimeout(timerID);

    timerID = setTimeout(f, ms, arg);
  };
}

const input = document.querySelector('input');
const searchResults = document.querySelector('.searchResults');

const search = (event) => {
  const str = event.target.value;
  
  if (!str) {
    searchResults.innerHTML = '';
    
    return;
  }

  searchResults.innerHTML = '';
  
  const results = document.createElement('div');
  results.innerHTML = `<br>Результаты поиска:<br> ${dataMock
    .filter(el => el.match(new RegExp(str, 'i'))).join('<br>')}`;
  searchResults.appendChild(results);
}

input.addEventListener('input', debounce(search, 1000));
