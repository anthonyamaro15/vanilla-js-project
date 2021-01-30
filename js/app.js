const todoForm = document.querySelector('.form-todo');
const todoContainer = document.querySelector('.display-todos');
const todoInput = document.querySelector('#addTodo');


todoForm.addEventListener('submit', addNewTodo);
todoContainer.addEventListener('click', deleteTodo);


function addNewTodo(e) {
   e.preventDefault();
   let value = todoInput.value;
   
   const singleTodoDiv = document.createElement('div');
   const todo = document.createElement('li');
   const deleteButton = document.createElement('button');

   singleTodoDiv.classList.add('single-todo');

   singleTodoDiv.appendChild(todo);
   todo.textContent = value;

   singleTodoDiv.appendChild(deleteButton);
   deleteButton.textContent = 'del';
   deleteButton.classList.add('delete-todo');

   todoContainer.appendChild(singleTodoDiv);

   todoInput.value = '';
};

function deleteTodo(e) {
   const todo = e.target.parentElement;
   const button = e.target.classList[0];
   
   if(button === 'delete-todo') {
      todo.remove();
   }
}