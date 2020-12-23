class TaskList extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute('title');

    this.classList.add('taskList', `${title}`);

    const titleArr = title.match(/[A-Z]/g);
    if (titleArr) {
      let index = 0;
      for (let elem of titleArr) {
        index = title.indexOf(elem, index);
        title = title.slice(0, index) + ' ' + title.slice(index);
        index += 2;
      }
    }

    this.innerHTML = `
      <div class='taskListHead'>
        ${title.slice(0, 1).toUpperCase() + title.slice(1)}
        <button type="button" title="context menu" class="context">•••</button>
      </div>
      <ul class="listOfTasks"></ul>
      <button type="button" title="add card" class="addCard">
        <svg height="14" width="14">
          <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M1 7h12M7 1v12"></path>
          </g>
        </svg>
        &nbsp;Add card
      </button>
    `;
  }
}

customElements.define('task-list', TaskList);
