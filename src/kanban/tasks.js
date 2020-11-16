const backlog = document.querySelector('.taskList.backlog');
const backlogList = backlog.querySelector('.listOfTasks');
const ready = document.querySelector('.taskList.ready');
const readyList = ready.querySelector('.listOfTasks');
const inProgress = document.querySelector('.taskList.inProgress');
const inProgressList = inProgress.querySelector('.listOfTasks');
const finished = document.querySelector('.taskList.finished');
const finishedList = finished.querySelector('.listOfTasks');

const addTask = document.getElementsByClassName('addCard');
const newTaskInput = document.createElement('input');

const addCard = (event) => {
  if (event.currentTarget.parentNode === backlog) {
    newTaskInput.type = 'text';
    newTaskInput.name = 'description';
    newTaskInput.placeholder = 'Describe new task';
    newTaskInput.classList.add('task');
    newTaskInput.style = 'display: block; width: calc(100% - 7px);';
    backlogList.appendChild(newTaskInput);
    newTaskInput.focus();
  } else {
    const prevTasks = event.currentTarget.parentNode.previousElementSibling.getElementsByClassName('task');
    prevTasksList = document.createElement('div');
    prevTasksList.classList.add('prevTasksList');
    prevTasksList.appendChild(document.createElement('ul'));
    for (let i = 0; i < prevTasks.length; i++) {
      prevTasksList.firstElementChild.appendChild(prevTasks[i].cloneNode(true));
    }
    event.currentTarget.parentNode.appendChild(prevTasksList);
  }
}

const saveTask = () => {
  const newTask = document.createElement('li');
  newTask.classList.add('task');

  if (newTaskInput.value) {
    newTask.innerText = newTaskInput.value;
    backlogList.appendChild(newTask);
  }

  backlogList.removeChild(newTaskInput);
  newTaskInput.value = '';
}

for (let i = 0; i < addTask.length; i++) {
  addTask[i].addEventListener('click', addCard);
}

newTaskInput.addEventListener('blur', saveTask);
