import './tasklist.js';

const main = document.querySelector('.main');
const newListInput = document.createElement('input');

export const createList = () => {
  

  main.insertAdjacentHTML('afterbegin', `<task-list title="${null}"></task-list>`);

  newListInput.type = 'text';
  newListInput.name = 'description';
  newListInput.placeholder = 'Name new list';
  newListInput.classList.add('task', 'newTaskInput');

  main.querySelector('.null').querySelector('.taskListHead').firstChild.replaceWith(newListInput);
  newListInput.addEventListener('blur', saveList);
  newListInput.focus();
}

async function saveList () {
  const {taskLists, renderer} = await import('./renderer.js');

  if (newListInput.value) {
    const arr = newListInput.value.split(' ');
    const nameArr = [];
    nameArr.push(arr[0]); 
    for (let i = 1; i < arr.length; i++) {
      nameArr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1));
    }
    let name = nameArr.join('');
    name = name.slice(0, 1).toLowerCase() + name.slice(1);
    taskLists.unshift({title: name, issues: []});
    localStorage.setItem('tasks', JSON.stringify(taskLists));
    renderer();
  } else {
    main.firstChild.remove();
  }
  newListInput.value = '';
}
