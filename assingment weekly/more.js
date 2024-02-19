
const TODOS = 'todos';
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const sort = document.querySelector('#sort');

let todos = getData();

const addRow = () => {
    const newTodo = input.value;
    todos.push(newTodo);
    localStorage.setItem(TODOS, JSON.stringify(todos));

    const row = list.insertRow();
    const col1 = row.insertCell(0);
    const col2 = row.insertCell(1);

    col1.innerHTML = newTodo;
    col2.innerHTML = `<a href="#" onClick="deleteRow('${newTodo}')">X</a>`;

    input.value = '';
};

const addTableRow = (text) => {
    const row = list.insertRow();
    const col1 = row.insertCell(0);
    const col2 = row.insertCell(1);

    col1.innerHTML = text;
    col2.innerHTML = `<a href="#" onClick="deleteRow('${text}')">X</a>`;
};

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addRow();
    }
});

const deleteRow = (todo) => {
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    list.deleteRow(index);
    localStorage.setItem(TODOS, JSON.stringify(todos));
};

const renderArray = () => {
    for (let i = 0; i < todos.length; i++) {
        addTableRow(todos[i]);
    }
};

sort.addEventListener('click', () => {
    todos.sort();
    list.innerHTML = '';
    renderArray();
});

function getData() {
    const data = JSON.parse(localStorage.getItem(TODOS));
    return data !== null ? data : [];
}

renderArray();