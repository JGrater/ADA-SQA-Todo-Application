const todoList = document.getElementById("todo-list");
const newTodoBtn = document.getElementById("new-todo");

function createTodo(id, message) {
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

    // Append Buttons to actions container
    actionContainer.appendChild(checkBtn)
    actionContainer.appendChild(deleteBtn)

    // Append all to todo li
    todo_li.appendChild(spanMessage)
    todo_li.appendChild(actionContainer)

    // Focus on writing the title once created
    setTimeout(() => {
        spanMessage.contentEditable = true
        spanMessage.focus();
        spanMessage.classList.toggle("editing")
    }, 1);

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
    todoList.appendChild(createTodo(Date.now(), "new todo"))
})