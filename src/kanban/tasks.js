const addCardButtons = document.getElementsByClassName('addCard');
const newTaskInput = document.createElement('input');
const prevTasksList = document.createElement('div');

const addTask = (event) => {
  for (let i= 0; i < addCardButtons.length; i++) {
    addCardButtons[i].removeEventListener('click', addTask);
    addCardButtons[i].disabled = true;
  }
  if (document.querySelector('.main').firstChild.contains(event.currentTarget)) {
    newTaskInput.type = 'text';
    newTaskInput.name = 'description';
    newTaskInput.placeholder = 'Describe new task';
    newTaskInput.classList.add('task');
    newTaskInput.style = 'display: block; width: calc(100% - 7px);';
    event.currentTarget.parentNode.querySelector('.listOfTasks').appendChild(newTaskInput);
    newTaskInput.addEventListener('blur', saveTask);
    newTaskInput.focus();
  } else {
    prevTasksList.innerHTML = '';
    prevTasksList.className = '';
    prevTasksList.style.top = '';
    prevTasksList.style.bottom = '';
    let prevTasks = [];
    for (let i = 1; i < taskLists.length; i++) {
      if (taskLists[i].title === event.currentTarget.parentNode.classList[1]) {
        prevTasks = taskLists[i - 1].issues;
      }
    }
    prevTasksList.classList.add('prevTasksList');
    prevTasksList.appendChild(document.createElement('ul'));
    for (let i = 0; i < prevTasks.length; i++) {
      const task = document.createElement('li');
      task.classList.add('task');
      task.addEventListener('click', moveTask);
      task.innerText = `${prevTasks[i].name}`;
      prevTasksList.firstElementChild.appendChild(task);
    }
    if (event.currentTarget.getBoundingClientRect().top > document.body.clientHeight - 360) {
      prevTasksList.classList.add('prevTasksListUp');
      prevTasksList.style.bottom = `-${document.body.clientHeight - 100 - event.currentTarget.getBoundingClientRect().top}px`;
      prevTasksList.classList.remove('prevTasksList');
    } else {
      prevTasksList.style.top = `${event.currentTarget.getBoundingClientRect().top - 30}px`;
    }
    event.currentTarget.parentNode.appendChild(prevTasksList);
    event.stopPropagation();
    document.addEventListener('click', isClickInsidePrevTasksList);
  }
}

const saveTask = () => {
  const newTask = document.createElement('li');
  newTask.classList.add('task');

  if (newTaskInput.value) {
    taskLists[0].issues.push({name: `${newTaskInput.value}`});
    localStorage.setItem('tasks', JSON.stringify(taskLists));
    renderer();
  } else {
    document.querySelector('.main').firstChild.querySelector('.listOfTasks').removeChild(newTaskInput);
  }
  newTaskInput.value = '';
  for (let i= 0; i < addCardButtons.length; i++) {
    addCardButtons[i].addEventListener('click', addTask);
    addCardButtons[i].disabled = false;
  }
}

const removeTaskList = () => {
  prevTasksList.parentNode.querySelector('.addCard').disabled = false;
  prevTasksList.parentNode.querySelector('.addCard').addEventListener('click', addTask);
  prevTasksList.parentNode.removeChild(prevTasksList);
  document.removeEventListener('click', isClickInsidePrevTasksList);
  for (let i= 0; i < addCardButtons.length; i++) {
    addCardButtons[i].addEventListener('click', addTask);
    addCardButtons[i].disabled = false;
  }
}

const isClickInsidePrevTasksList = (event) => {
  let inside = prevTasksList.contains(event.target);
  if (!inside) {
    removeTaskList();
  }
}

const moveTask = (event) => {
  const movedTaskText = event.currentTarget.innerText;
  for (let i=0; i < taskLists.length; i++) {
    if (taskLists[i].title === event.currentTarget.parentNode.parentNode.parentNode.classList[1]) {
      let index = taskLists[i - 1].issues.findIndex(element => element.name === movedTaskText);
      taskLists[i].issues.push(taskLists[i - 1].issues.splice(index, 1)[0]);
    }
  }
  document.removeEventListener('click', isClickInsidePrevTasksList);
  localStorage.setItem('tasks', JSON.stringify(taskLists));
  renderer();
}
