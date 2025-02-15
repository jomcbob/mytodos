let folder = []

const makeToDo = (title, description, dueDate, priority) => {
    folder.push({ title, description, dueDate, priority })
    refresh()
}

const refresh = () => {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    const container = document.createElement('div')

    folder.forEach((todo, index) => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('domTodo')
        todoDiv.innerHTML = `
            <div class='listOne'>Title: ${todo.title}</div>
            <div class='listTwo'>What: ${todo.description}</div>
            <div class='listThree'>By when: ${todo.dueDate}</div>
            <div class='listFour'>How urgent: ${todo.priority}</div>
            <div id='delete${index}' class='hover'>❌</div>
        `


        const deleteBtn = todoDiv.querySelector(`#delete${index}`)
        deleteBtn.addEventListener("click", () => {
            folder.splice(index, 1)
            refresh()
        })
        container.appendChild(todoDiv)
    })

    content.appendChild(container)
}

const makeFolder = function (appendTo) {
    let div = document.createElement("div")
    div.classList.add('folderDiv')
    div.classList.add('hasHover')
    let folderInput = document.querySelector('.folderInput')
    let folderValue = folderInput.value
    div.textContent = "📂 " + folderValue
    appendTo.appendChild(div)
    addHidden();
    folderInput.value = ''
}

const addHidden = function () {
    document.querySelector('#addNewFolder').classList.toggle('hidden')
    document.querySelector('#addNewFolder').classList.toggle('show')
};



export { makeFolder, addHidden, makeToDo }