import "./styles.css"
import './todos.js'
import { makeToDo } from "./todos.js"
import { makeFolder } from "./folders"
import { folderRefresh, toggleHidden } from './presentation'

let yourFolders = document.querySelector(".yourFolders")
let makePopUp = document.querySelector('.add')
makePopUp.addEventListener('click', () => {
    let folderInput = document.querySelector('.folderInput')
    makeFolder(folderInput.value)
})

let addNewFolder = document.querySelector('#newFolder')
addNewFolder.addEventListener('click', () => {
    toggleHidden()
})

let close = document.querySelector('.close')
close.addEventListener('click', () => {
    toggleHidden()
})

let closeNewToDoButton = document.querySelector('.closeToDoButton')
closeNewToDoButton.addEventListener('click', () => {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
})

let newTodoButton = document.querySelector('.newButton')
newTodoButton.addEventListener('click', () => {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
})

let input1 = document.querySelector('.toDo')
let input2 = document.querySelector('#description')
let input3 = document.querySelector('#when')
let input4 = document.querySelector('#priority')
let addTodoButton = document.querySelector('.add2')
addTodoButton.addEventListener('click', () => {
    makeToDo(input1.value, input2.value, input3.value, input4.value,)
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
    input1.value = ''; input2.value = ''; input3.value = '';
})

let closeAbout = document.querySelector('.closeAbout')
closeAbout.addEventListener('click', () => {
    document.querySelector('#lookUpValues').classList.toggle('hidden')
    document.querySelector('#lookUpValues').classList.toggle('show')
})

folderRefresh()