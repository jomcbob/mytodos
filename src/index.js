import "./styles.css"
import './newArray.js'
import { makeFolder, addHidden, makeToDo } from "./newArray.js"

let yourFolders = document.querySelector(".yourFolders")
let makePopUp = document.querySelector('.add')
makePopUp.addEventListener('click', () => {
    makeFolder(yourFolders)
})

let addNewFolder = document.querySelector('#newFolder')
addNewFolder.addEventListener('click', () => {
    addHidden()
})

let close = document.querySelector('.close')
close.addEventListener('click', () => {
    addHidden()
})

let closeNewToDoButton = document.querySelector('.closeToDoButton')
closeNewToDoButton.addEventListener('click', () => {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
})

let newTodoButton = document.querySelector('.newButton')
newTodoButton.addEventListener('click', () => {
    console.log('newTodoButton clicked')
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
})

let input1 = document.querySelector('.toDo')
let input2 = document.querySelector('#description')
let input3 = document.querySelector('#when')
let input4 = document.querySelector('#priority')
let addTodoButton = document.querySelector('.add2')
addTodoButton.addEventListener('click', () => {
    makeToDo(input1.value, input2.value, input3.value, input4.value)
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
    input1.value = ''; input2.value = '';
})


