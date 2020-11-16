const backlog = document.querySelector('.taskList.backlog');
const backlogList = backlog.querySelector('.listOfTasks');
const ready = document.querySelector('.taskList.ready');
const readyList = ready.querySelector('.listOfTasks');
const inProgress = document.querySelector('.taskList.inProgress');
const inProgressList = inProgress.querySelector('.listOfTasks');
const finished = document.querySelector('.taskList.finished');
const finishedList = finished.querySelector('.listOfTasks');

const backlogAdd = backlog.querySelector('.addCard');
const newTaskInput = document.createElement('input');

const addCard = () => {
  newTaskInput.type = 'text';
  newTaskInput.name = 'description';
  newTaskInput.placeholder = 'Describe new task';
  newTaskInput.classList.add('task');
  newTaskInput.style = 'display: block; width: calc(100% - 7px);';
  backlogList.appendChild(newTaskInput);
  newTaskInput.focus();
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

backlogAdd.addEventListener('click', addCard);
newTaskInput.addEventListener('blur', saveTask);
