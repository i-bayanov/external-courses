const userMenu = document.createElement('div');

userMenu.setAttribute('class', 'dropDownMenu');
userMenu.appendChild(document.createElement('div')).setAttribute('id', 'account');
userMenu.appendChild(document.createElement('div')).setAttribute('id', 'tasks');
userMenu.appendChild(document.createElement('hr'));
userMenu.appendChild(document.createElement('div')).setAttribute('id', 'log_out');

function showDropMenu () {
  document.querySelector('.user_menu').appendChild(userMenu);
  document.querySelector('#account').innerHTML = 'My account';
  document.querySelector('#tasks').innerHTML = 'My tasks';
  document.querySelector('#log_out').innerHTML = 'Log out';
  document.querySelector('.user_menu svg').setAttribute('style', 'transform: rotateX(180deg)');
  setTimeout(setAndRemoveAttribute, 100);
}

function hideDropMenu () {
  document.querySelector('.user_menu').removeChild(userMenu);
  document.querySelector('.user_menu svg').setAttribute('style', 'transform: rotateX(0deg)');
  setTimeout(removeAndSetAttribute, 100);
}

function setAndRemoveAttribute () {
  document.body.setAttribute('onclick', 'return hideDropMenu()');
  document.querySelector('.user_menu').removeAttribute('onclick');
  document.querySelector('.dropDownMenu').setAttribute('onclick', 'event.stopPropagation()');
}

function removeAndSetAttribute () {
  document.body.removeAttribute('onclick');
  document.querySelector('.user_menu').setAttribute('onclick', 'return showDropMenu()');
}
