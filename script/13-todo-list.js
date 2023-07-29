const todoList = [{

  todo: 'wash clothes',
  dueDate: '2023-12-22',
  locale: "en-US"},
{

  todo: 'clean floor',
  dueDate: '2023-12-23',
  locale: "en-US"}
];
 
renderTodoList()

function renderTodoList(){

    let todolistHTML = '';

    todoList.forEach((todoObject, index) => {

      const {todo, dueDate} = todoObject;//destructuring of array
      const html = `
              

              <div class="todo_input_things">${todo}</div>
              <div class="todo_date">${dueDate}</div>
              <button 
              class="delete_todo_button  js-delete-todo-button">Delete</button>

              `///generating HTML
      
             todolistHTML += html
    });

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
    
    document.querySelectorAll('.js-delete-todo-button').forEach((deletButton, index) => {
         deletButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
         })
    })
};

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
     addTodo()
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const todo = inputElement.value;

  const dateElement = document.querySelector('.js-due-date-input');

  const dueDate = dateElement.value;

  todoList.push({
    // name : name,
    // dueDate: dueDate
    todo,
    dueDate//short hand property
  });
  console.log(todoList);

  inputElement.value = '';
  dateElement.value = '';

  renderTodoList()
}


//date and time format
const loginDate = document.querySelector('.date');

const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  weekday: "short",
};

loginDate.textContent = new Intl.DateTimeFormat(
  todoList.locale,
  options,
).format(now);