const todoText = document.querySelector('#todoText');
const todoList = document.querySelector('#todoList');
const addTodo = document.querySelector('#addTodo');


addTodo.addEventListener('click', InputCheck);

function InputCheck (e) {
    e.preventDefault();
    if (todoText.value === '') {
        alert('Please enter a todo');
    } else {
        addTodoItem();
    }
}


function addTodoItem() {
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoText.value;
    todoList.appendChild(newTodo);
    todoText.value = '';

}