import { makeToDo } from '../data/folders'
import { refresh } from '../index'

let newTodoButton = document.querySelector('.newButton')
newTodoButton.addEventListener('click', () => {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
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

// const checkIfChecked = (todo) => {
//     if (todo == false){
//         todo.classList.add('checked')
//     } else if (todo == false){
//         todo.classList.remove('checked')
//     } else return
// }

// export { checkIfChecked }