import "./styles.css";
import { addNewFolder, addInFolder  } from "./page1.js";
import { createToDos } from "./newArray.js";
// import { createToDos } from "./newArray.js";

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

let input1 = document.querySelector(".toDo")
let input2 = document.querySelector("#description")
let input3 = document.querySelector("#when")
let input4 = document.querySelector("#priority")
let changBody = function(div){
    div.addEventListener('click', () => {
        document.querySelector('.content').innerHTML = '<button class="newToDo">new to do</button>'
        let newToDoButton = document.querySelector('.newToDo')
        newToDoButton.addEventListener('click', () => {
            addInFolder()
            let add2 = document.querySelector('.add2')
            add2.addEventListener('click', () => {
                addInFolder()
                let content = document.querySelector('.content')
                content.innerHTML += `
                <div class="domTodo">
                    <div class='listOne'>${input1.value}</div>
                    <div class='listTwo'>${input2.value}</div>
                    <div class='listThree'>${input3.value}</div>
                    <div class='listFour'>${input4.value}</div>
                </div>
                `
                input1.value = ''
                input2.value = ''
                input3.value = ''
                input4.value = ''
            })
        })
    })
}
