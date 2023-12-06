import { ref, computed } from 'vue';

export var toDoCounter = ref(0);
export var toDoList = ref(null);
export var jsonToDoData = ref([]);
export var jsonDoneLength = computed(() => jsonToDoData.value.length)

function filterText(message) {
  //Filter and text size limiter
  message = message.replace(/(?:\r\n|\r|\n)/g, " ");
  if (message.length > 40) {
    var newMessage = message.slice(0, 40)
    return newMessage += '...'
  }
  return message
}

function removeToDo(index) {
  jsonToDoData.value = jsonToDoData.value.filter(item => item.id !== index);
}

function addToDo(index, message, completion, online) {
  //Limits text size or formats to the correct default value
  message = filterText(message)

  const listBox = Object.assign(document.createElement("li"), {
    id: index,
    className: "todo"
  });

  const spanMessage = Object.assign(document.createElement("span"), {
    innerText: message,
  });

  //Actions Container (Done/Delete)
  const actionContainer = Object.assign(document.createElement("div"), {
    className: "actions",
  });

  //Create the buttons (Done/Delete)
  const doneBtn = Object.assign(document.createElement("button"), {
    className: "mdc-icon-button btn-check material-icons",
    innerText: "check_circle_outline"
  });

  const deleteBtn = Object.assign(document.createElement("button"), {
    className: "mdc-icon-button btn-delete material-icons",
    innerText: "delete"
  });

  //Done button handler
  doneBtn.addEventListener("click", () => {
    if (listBox.id == index) {
      listBox.classList.toggle("completed")
      doneBtn.classList.toggle("selected")
    }
  })

  //Delete button handler
  deleteBtn.addEventListener("click", () => {
    if (listBox.id == index) {
      //Remove item from HTML
      toDoList.removeChild(listBox)
      
      if (online) {
        //Remove item from cloud/database
        deleteTodo(index)
      } else {
        //Remove item from JSON storage
        removeToDo(index)
      }
    }
  })

  //Message update start handler
  spanMessage.addEventListener("dblclick", () => {
    if (listBox.id == index) {
      spanMessage.contentEditable = true
      spanMessage.focus()
      spanMessage.classList.toggle("editing")
    }
  })

  //Message update finished handler
  spanMessage.addEventListener("blur", () => {
    if (listBox.id == index) {
      spanMessage.contentEditable = false;
      spanMessage.innerText = filterText(spanMessage.innerText)
      spanMessage.classList.toggle("editing")
    }
  });

  if (completion == true) {
    listBox.classList.toggle("completed")
    doneBtn.classList.toggle("selected")
  }

  //Append buttons to actions container
  actionContainer.appendChild(doneBtn)
  actionContainer.appendChild(deleteBtn)

  //Append all to the list box
  listBox.appendChild(spanMessage)
  listBox.appendChild(actionContainer)

  return listBox
}


export function newToDoClickedOffline() {
  console.log("Running Add Todo Box")

  //Use prompt() only in a browser environment
  if (typeof prompt === 'function') {
    //Create dialog prompt to enter message
    var userToDoMessage = prompt("Enter Todo Message");

    //If the user clicks cancel then stop executing the function
    if (userToDoMessage === null) {
      return;
    }
  } else {
    //Ignores and sets default value (used in testing)
    var userToDoMessage = ""
  }


  //Default text when user inputs nothing
  if (userToDoMessage == "") {
    userToDoMessage = "Description " + toDoCounter.value
  }


  //Used as an index when creating IDs and default messages
  toDoCounter.value = toDoCounter.value + 1

  toDoList = document.getElementById("todo-list")

  //Add to JSON local storage
  jsonToDoData.value.push({
    id: toDoCounter.value,
    name: "",
    description: userToDoMessage,
    completion: false,
  })

  //Add to HTML
  toDoList.appendChild(addToDo(toDoCounter.value, userToDoMessage, false, false))
  //console.log("Spawned item " + toDoCounter.value + " with the following message " + userToDoMessage)
}

export function newTodoClickedOnline() {
  let userToDoMessage = prompt("Enter Todo Message");  
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
  addTodo(userToDoMessage)
  fetchTodos()
}

//POST HTTP todo
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

//GET Fetch Todos
export function fetchTodos() {
  fetch("http://localhost:8091/tasks")
    .then(response => {
      return response.json()
    })
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        todoList.appendChild(addToDo(data[i].id, data[i].description, data[i].completion, true))
      }
    })
    .catch(error => {
      console.error(error)
    })
}

//DELETE Todo
function deleteTodo(id) {
  fetch(`http://localhost:8091/tasks/${id}`, { method: 'DELETE' })
    .catch(error => {
      console.error(error)
    })
}