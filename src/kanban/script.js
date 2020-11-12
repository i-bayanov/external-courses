const dropDownMenu = document.createElement('div');
const account = document.createElement('div');
const tasks = document.createElement('div');
const hr = document.createElement('hr');
const logOut = document.createElement('div');
const userMenu = document.querySelector('.user_menu');
const arrow = document.querySelector('.arrow');

dropDownMenu.classList.add('dropDownMenu');
account.classList.add('account');
tasks.classList.add('tasks');
hr.classList.add('dropMenuHr');
logOut.classList.add('logOut');

account.innerText = 'My account';
tasks.innerText = 'My tasks';
logOut.innerText = 'Log out';

[account, tasks, hr, logOut].forEach(item => dropDownMenu.appendChild(item));

const showDropMenu = () => {
  userMenu.appendChild(dropDownMenu);
  arrow.classList.add('active');
  return document.addEventListener('click', isClickInside());
}

const hideDropMenu = () => {
  userMenu.removeChild(dropDownMenu);
  arrow.classList.remove('active');
  return document.removeEventListener('click', click1);
}

const isClickInside = (event) => {
  let inside = dropDownMenu.contains(event.target);
  if (!inside) {
    return setTimeout(hideDropMenu, 100);
  }
  return undefined;
}


// const setAndRemoveAttribute = () => {
//   document.body.setAttribute('onclick', 'return hideDropMenu()');
//   document.querySelector('.user_menu').removeAttribute('onclick');
//   document.querySelector('.dropDownMenu').setAttribute('onclick', 'event.stopPropagation()');
// }

// const removeAndSetAttribute = () => {
//   document.body.removeAttribute('onclick');
//   document.querySelector('.user_menu').setAttribute('onclick', 'return showDropMenu()');
// }

userMenu.addEventListener('click', showDropMenu);
