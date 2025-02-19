import "./styles.css"
import './presentation/addFolder'
import './presentation/addTodo'
import { deleteFolder, folders, selectedFolderIndex, setSelectedFolderIndex, loadFromLocalStorage, saveToLocalStorage } from "./data/folders"
import { checkIfChecked, editValues, formatDate, sortToDos } from "./presentation/addTodo"


const folderRefresh = () => {
    let content = document.querySelector('.yourFolders')
    content.innerHTML = ''
    folders.forEach((folder, index) => {
        const id = `folder-${index}`
        const div = document.createElement('div')
        div.classList.add('folderDiv', 'hasHover')
        if (index == selectedFolderIndex) {
            div.classList.add('selected')
        }
        div.id = id
        if (index !== 0) {
            div.innerHTML = `📂 ${folder.name} <div id='delete-${index}'>❌</div>`
        } else {
            div.innerHTML = `📂 ${folder.name} <div id='delete-${index}'></div>`
        }
        content.appendChild(div)
        div.addEventListener('click', () => {
            document.querySelector('.content').innerHTML = ''
            setSelectedFolderIndex(index, refresh)
        })
        const deleteFolderButton = content.querySelector(`#delete-${index}`)
        deleteFolderButton.addEventListener("click", (e) => {
            deleteFolder(index, refresh)
        })
    })
}

const refresh = () => {
    folderRefresh()
    saveToLocalStorage()
    const todos = folders[selectedFolderIndex].todos

    const content = document.querySelector('.content')
    content.innerHTML = ''
    const container = document.createElement('div')

    todos.forEach((todo, index) => {
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
            <div class='listThree'>Due: ${formatDate(todo.dueDate)}</div>
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

        checkIfChecked(todo, todoDiv)

        const deleteBtn = todoDiv.querySelector(`#delete${index}`)
        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1)
            refresh()
            saveToLocalStorage()
        })

        const checkBoxMarkIsDone = todoDiv.querySelector(`#isDone${index}`)
        checkBoxMarkIsDone.checked = todo.isChecked;

        checkBoxMarkIsDone.addEventListener("click", () => {
            todo.isChecked = !todo.isChecked
            checkBoxMarkIsDone.isChecked = todo.isChecked
            saveToLocalStorage()
            refresh()
        })

        container.appendChild(todoDiv)
    })

    content.appendChild(container)
}

let checkpriority = (todo, toStyle) => {
    if (todo.priority == 'high') {
        toStyle.style.backgroundColor = 'red'
    } else if (todo.priority == 'medium') {
        toStyle.style.backgroundColor = 'yellow'
    } else if (todo.priority == 'low') {
        toStyle.style.backgroundColor = 'green'
    }
}

let seeMoreValues = (more, todo,) => {
    more.addEventListener("click", () => {
        let lookUpValueBody = document.querySelector('.appendToThis')
        let lookUpValue = document.querySelector('#lookUpValues')
        let toDoDivDescription = document.querySelector('.toDoDivDescription')
        lookUpValue.classList.toggle('hidden')
        lookUpValue.classList.toggle('show')
        lookUpValueBody.innerHTML = ` 
            <div id="addToDoToFolder">
                <div class="folderFormBackground">
                    <label for="ToDo">title</label>
                    <input type="text" name="toDo" id="editTitle" value='${todo.title}'>
                    <label for="description">description</label>
                    <input type="text" name="description" id="editDescription" value='${todo.description}'>
                    <label for="when">by when</label>
                    <input type="date" id="editDate" value='$${formatDate(todo.dueDate)}'>
                    <label for="priority">priority</label>
                    <select name="priority" id="editPriority" value='${todo.priority}'>
                        <option value="high" class="red">high</option>
                        <option value="medium" class="yellow">medium</option>
                        <option value="low" class="green">low</option>
                    </select>
                    <button class="addEditedValues">add</button>
                </div>
            </div>
        `
        toDoDivDescription.textContent = todo.description
        lookUpValueBody.querySelector('.addEditedValues').addEventListener('click', () => {
            editValues(todo)
        })
    })
}

let credit = document.querySelector('.fixed')
credit.addEventListener('click', () => {
    document.querySelector('.creditForPhotos').classList.toggle('hidden')
    document.querySelector('.creditForPhotos').classList.toggle('show')
})

let sortByPriorityButtonHigh = document.querySelector('.sortByPriorityHigh')
sortByPriorityButtonHigh.addEventListener('click', () => {
    sortToDos(3, 2, 1)
    refresh()
})

let sortByPriorityButtonLow = document.querySelector('.sortByPriorityLow')
sortByPriorityButtonLow.addEventListener('click', () => {
    sortToDos(1, 2, 3)
    refresh()
})

const clearCompletedButton = document.querySelector('.clearCompleted')
clearCompletedButton.addEventListener('click', () => {
    folders[selectedFolderIndex].todos = folders[selectedFolderIndex].todos.filter(todo => !todo.isChecked)
    refresh()
})

loadFromLocalStorage()
refresh()

export { refresh, seeMoreValues }