import { makeToDo } from '../data/folders'
import { refresh } from '../index'

let newTodoButton = document.querySelector('.newButton')
newTodoButton.addEventListener('click', () => {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
    document.querySelector('.toDo').focus()
})

let title = document.querySelector('.toDo')
let description = document.querySelector('#description')
let date = document.querySelector('#when')
let priority = document.querySelector('#priority')

let addTodoButton = document.querySelector('.add2')
addTodoButton.addEventListener('click', () => {
    makeToDo(title.value, description.value, date.value, priority.value, false, refresh)
    toggleHidden()
    title.value = ''
    description.value = ''
    date.value = ''
    priority.value = 'high'
})

let closeNewToDoButton = document.querySelector('.closeToDoButton')
closeNewToDoButton.addEventListener('click', () => {
    toggleHidden()
})

const toggleHidden = function () {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
}

let closeAbout = document.querySelector('.closeAbout')
closeAbout.addEventListener('click', () => {
    document.querySelector('#lookUpValues').classList.toggle('hidden')
    document.querySelector('#lookUpValues').classList.toggle('show')

})

let editValues = (todo) => {
    let lookUpValueBody = document.querySelector('.appendToThis')
    let title = lookUpValueBody.querySelector('#editTitle')
    let description = lookUpValueBody.querySelector('#editDescription')
    let date = lookUpValueBody.querySelector('#editDate')
    let priority = lookUpValueBody.querySelector('#editPriority')
    todo.title = title.value
    todo.description = description.value
    todo.dueDate = date.value
    todo.priority = priority.value
    document.querySelector('#lookUpValues').classList.toggle('hidden')
    document.querySelector('#lookUpValues').classList.toggle('show')
    refresh()
 }

const checkIfChecked = (todo, todoDiv) => {
    if (todo.isChecked) {
        todoDiv.querySelector('.listOne').classList.add('lineThrough')
        todoDiv.querySelector('.listThree').classList.add('lineThrough')
        todoDiv.querySelector('.listFour').classList.add('lineThrough')
        todoDiv.classList.add('checked')
    }
}

function formatDate(dueDate) {
    if (dueDate === "") {
        dueDate = new Date().toISOString().split('T')[0]
    }
    const now = new Date()
    const targetDate = new Date(dueDate)
    // Set both dates to midnight (00:00:00) in UTC to avoid time zone issues
    const currentUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    const targetUTC = Date.UTC(targetDate.getUTCFullYear(), targetDate.getUTCMonth(), targetDate.getUTCDate())
    const timeDiff = targetUTC - currentUTC
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

    if (daysLeft === 0) {
        return 'Today'
    } else if (daysLeft === 1) {
        return `in ${daysLeft} day`
    } else if (daysLeft > 0) {
        return `in ${daysLeft} days`
    } else {
        return 'Past due'
    }
}




export { checkIfChecked, editValues, formatDate }