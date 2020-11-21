const taskLists = JSON.parse(localStorage.getItem('tasks'));

const renderer = () => {
  document.querySelector('.main').innerHTML = '';

  for (let key = 0; key < taskLists.length; key++) {
    const taskList = document.createElement('div');
    taskList.classList.add('taskList', `${taskLists[key].title}`);
    
    const taskListHead = document.createElement('div');
    taskListHead.classList.add('taskListHead');
    let title = taskLists[key].title;
    const titleArr = title.match(/[A-Z]/g);
    if (titleArr) {
      let index = 0;
      for (let elem of titleArr) {
        index = title.indexOf(elem, index);
        title = title.slice(0, index) + ' ' + title.slice(index);
        index += 2;
      }
    }
    taskListHead.innerText = `${title.slice(0, 1).toUpperCase() + title.slice(1)}`;
    const context = document.createElement('button');
    context.type = 'button';
    context.title = 'context menu';
    context.classList.add('context');
    context.innerText = '•••';
    taskListHead.appendChild(context);
    taskList.appendChild(taskListHead);

    const listOfTasks = document.createElement('ul');
    listOfTasks.classList.add('listOfTasks');
    for (let i = 0; i < taskLists[key].issues.length; i++) {
      const task = document.createElement('li');
      task.classList.add('task');
      task.innerText = `${taskLists[key].issues[i].name}`;
      listOfTasks.appendChild(task);
    }
    taskList.appendChild(listOfTasks);

    const addCard = document.createElement('button');
    addCard.type = 'button';
    addCard.title = 'add card';
    addCard.classList.add('addCard');
    const plus = document.createElement('span');
    plus.innerText = '+';
    addCard.appendChild(plus);
    const textAdd = document.createElement('span');
    textAdd.innerText = 'Add card';
    addCard.appendChild(textAdd);
    if ((key > 0) && (taskLists[key-1].issues.length === 0)) {
      addCard.disabled = true;
    } else {
      addCard.addEventListener('click', addTask)
    }
    taskList.appendChild(addCard);

    document.querySelector('.main').appendChild(taskList);
  }
}

renderer();
