import { currentFolderImIn } from "./folderlogic"
import { makeNewFolder, checkpriority, seeMoreValues} from "./page1"
let inbox = []

const makeToDo = (title, description, dueDate, priority, isChecked) => {
    inbox.push({ title, description, dueDate, priority, isChecked })
    refresh()
}

const refresh = () => {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    const container = document.createElement('div')

    inbox.forEach((todo, index) => {
        const todoDiv = document.createElement('div')
        let more = document.createElement('div')
        more.classList.add('hover')
        more.textContent = "⊕ more"
        todoDiv.classList.add('domTodo')
        todoDiv.innerHTML = `
        <div class='box'>
            <input type='checkbox' id='isDone${index}' class='hover' name='check' value='${todo.isChecked}'>
        </div>
        <div class='box'>
            <div class='listOne'>Title: ${todo.title}</div>
        </div>
        <div class='box'>
            <div class='listThree'>By when: ${todo.dueDate}</div>
        </div>
        <div class='box'>
            <div class='listFour'>priority:<div class='toTurnColor'>&nbsp;${todo.priority}&nbsp;</div></div>
        </div>
        <div class='box'>
            <div id='delete${index}' class='hover'>❌</div>
        <div>
        `
        const toStyle = todoDiv.querySelector('.toTurnColor')
        checkpriority(todo, toStyle)

        todoDiv.appendChild(more)

        seeMoreValues(more, todo)

        const deleteBtn = todoDiv.querySelector(`#delete${index}`)
        deleteBtn.addEventListener("click", () => {
            inbox.splice(index, 1)
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
}

const addHidden = function () {
    document.querySelector('#addNewFolder').classList.toggle('hidden')
    document.querySelector('#addNewFolder').classList.toggle('show')
}



export { makeFolder, addHidden, makeToDo }