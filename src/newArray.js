import { makeNewFolder } from "./page1"
let folder = []

const makeToDo = (title, description, dueDate, priority, isChecked) => {
    folder.push({ title, description, dueDate, priority, isChecked })
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
        <div class='box'>
            <input type='checkbox' id='isDone${index}' class='hover' name='check' value='${todo.isChecked}'>
        </div>
        <div class='box'>
            <div class='listOne'>Title: ${todo.title}</div>
        </div>
        <div class='box'>
            <div class='listTwo'>What: ${todo.description}</div>
        </div>
        <div class='box'>
            <div class='listThree'>By when: ${todo.dueDate}</div>
        </div>
        <div class='box'>
            <div class='listFour'>How urgent: ${todo.priority}</div>
        </div>
        <div class='box'>
            <div id='delete${index}' class='hover'>❌</div>
        <div>
        `

        const deleteBtn = todoDiv.querySelector(`#delete${index}`)
        deleteBtn.addEventListener("click", () => {
            folder.splice(index, 1)
            refresh()
        })

        const checkBoxMarkIsDone = todoDiv.querySelector(`#isDone${index}`)
        checkBoxMarkIsDone.checked = todo.isChecked;

        checkBoxMarkIsDone.addEventListener("click", () => {
            todo.isChecked = !todo.isChecked
            checkBoxMarkIsDone.isChecked = todo.isChecked
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
    addHidden()
    makeNewFolder(folderInput.value)
    folderInput.value = ''
}

const addHidden = function () {
    document.querySelector('#addNewFolder').classList.toggle('hidden')
    document.querySelector('#addNewFolder').classList.toggle('show')
};



export { makeFolder, addHidden, makeToDo }