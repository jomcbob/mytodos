import "./styles.css";
import { addNewFolder } from "./page1.js";
// Brainstorm what kind of properties your todo-items are going to have.
//  At a minimum they should have a title, description, dueDate and priority.
//   You might also want to include notes or even a checklist.
// The look of the User Interface is up to you, but it should be able to do the following:
// View all projects.
// View all todos in each project (probably just the title and duedate… perhaps changing color for different priorities).
// Expand a single todo to see/edit its details.
// Delete a todo.

let addNew = document.querySelector('#newFolder')
let close = document.querySelector('.close')
let add = document.querySelector('.add')
let folderInput = document.querySelector('.folderInput')
let myFolders = document.querySelector('.yourFolders')

close.addEventListener('click', () => {
    addNewFolder()
})
addNew.addEventListener('click', () => {
    folderInput.value = ""
    addNewFolder()
})
add.addEventListener('click', () => {
    let div = document.createElement("div")
    div.classList.add('folderDiv')
    div.classList.add('hasHover')
    let folderValue = folderInput.value
    div.textContent = "📂 " + folderValue
    myFolders.appendChild(div)
    addNewFolder()
    changBody(div)
})

let changBody = function(div){
    div.addEventListener('click', () => {
        document.querySelector('.content').innerHTML = '<button class="newToDo">new to do</button>'
    })
}
