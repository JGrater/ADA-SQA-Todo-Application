const newTodoBtn = document.getElementById("new-todo")
const todoList = document.getElementById("todo-list")
fetchTodos()

function createTodo(id, message, completion) {
  const todo_li = document.createElement("li")
  todo_li.id = id
  todo_li.className = "todo"
  const spanMessage = document.createElement("span")
  spanMessage.innerText = limitCharacters(message);

  // Actions Container
  const actionContainer = document.createElement("div")
  actionContainer.className = "actions"

  // Create the buttons
  const checkBtn = document.createElement("button")
  checkBtn.className = "mdc-icon-button btn-check material-icons"
  checkBtn.innerText = "check_circle_outline"

  const deleteBtn = document.createElement("button")
  deleteBtn.className = "mdc-icon-button btn-delete material-icons"
  deleteBtn.innerText = "delete"

  // Add event listeners to the buttons
  checkBtn.addEventListener("click", () => {
    if (todo_li.id == id) {
      todo_li.classList.toggle("completed")
      checkBtn.classList.toggle("selected")
    }
  })
  
  deleteBtn.addEventListener("click", () => {
    if (todo_li.id == id) {
      todoList.removeChild(todo_li)
    }
    deleteTodo(id)
  })

  // Add event listener for double-click to update todo
  spanMessage.addEventListener("dblclick", () => {
    if (todo_li.id == id) {
      spanMessage.contentEditable = true
      spanMessage.focus()
      spanMessage.classList.toggle("editing")
    }
  })
  // Remove contentEditable after blur (when focus is lost)
  spanMessage.addEventListener("blur", () => {
    if (todo_li.id == id) {
      spanMessage.contentEditable = false;
      spanMessage.innerText = limitCharacters(spanMessage.innerText)
      spanMessage.classList.toggle("editing")
    }
  });

  if (completion == true) {
    todo_li.classList.toggle("completed")
    checkBtn.classList.toggle("selected")
  }
  
  // Append Buttons to actions container
  actionContainer.appendChild(checkBtn)
  actionContainer.appendChild(deleteBtn)

  // Append all to todo li
  todo_li.appendChild(spanMessage)
  todo_li.appendChild(actionContainer)
  
  return todo_li
}

function limitCharacters(message) {
  message = message.replace(/(?:\r\n|\r|\n)/g, " ");
  if (message.length > 40) {
    var newMessage = message.slice(0, 40)
    return newMessage += '...'
  }
  return message
}

// New Todo Button Listener
newTodoBtn.addEventListener("click", () => {
  let newMessage = prompt("Enter Todo Message");  
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
  addTodo(newMessage)
  fetchTodos()
})

// Add todo
function addTodo(message) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: message, description: '', completion: false, label: null })
  };
  fetch("http://localhost:8091/tasks", requestOptions)
    .then(response => response.json())
    .then(data => { console.log(data) })
    .catch(error => {
      console.error(error)
    })
}
  
// Fetch Todos
function fetchTodos() {
  fetch("http://localhost:8091/tasks")
    .then(response => {
      return response.json()
    })
    .then(data => {
      for(let i = 0; i < data.length; i++) {
        todoList.appendChild(createTodo(data[i].id, data[i].name, data[i].description, data[i].completion))
      }
    })
    .catch(error => {
      console.error(error)
    })
}

// Delete Todo
function deleteTodo(id) {
  fetch(`http://localhost:8091/tasks/${id}`, { method: 'DELETE' })
  .catch(error => {
    console.error(error)
  })
}