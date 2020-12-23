import { renderer, taskLists } from './renderer.js';

const contextMenu = document.createElement('div');
contextMenu.classList.add('taskList', 'context-menu');
contextMenu.innerHTML = 'Delete list';

export const showContext = (event) => {
  event.currentTarget.append(contextMenu);
  contextMenu.addEventListener('click', deleteList);
}

const deleteList = (event) => {
  const allLists = document.getElementsByClassName('taskList');
  let title = '';
  
  for (let i = 0; i < allLists.length; i++) {
    if (allLists[i].contains(event.target)) {
      title = allLists[i].getAttribute('title');
      break;
    }
  }

  for (let i = 0; i < taskLists.length; i++) {
    if (taskLists[i].title === title) {
      taskLists.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(taskLists));
    }
  }

  renderer();
}
