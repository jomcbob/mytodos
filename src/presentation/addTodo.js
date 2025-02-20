import { makeToDo, folders, selectedFolderIndex } from '../data/folders'
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
    // If no due date is provided, use today's date
    if (dueDate === "") {
        dueDate = new Date().toISOString().split('T')[0]; // Use the current date + 1 day without time
    }

    const now = new Date();
    const targetDate = new Date(dueDate);

    // Normalize both dates to midnight in the local timezone (removes time information)
    now.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    // Calculate the difference in days between the two dates
    const oneDayInMs = 24 * 60 * 60 * 1000; // Milliseconds in one day
    const daysLeft = Math.round((targetDate - now) / oneDayInMs);

    // Return the appropriate message based on the difference
    if (daysLeft === -1) {
        return 'Today';
    } else if (daysLeft === 0) {
        return `in ${daysLeft + 1} day`;
    } else if (daysLeft > 0) {
        return `in ${daysLeft + 1} days`;
    } else {
        return 'Past due';
    }
}



let sortToDos = (high, medium, low) => {
    folders[selectedFolderIndex].todos.sort((a, b) => {
        const priorityOrder = { high: low, medium: medium, low: high }
        return priorityOrder[a.priority] - priorityOrder[b.priority]
    })
}




export { checkIfChecked, editValues, formatDate, sortToDos }