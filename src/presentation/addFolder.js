import { makeFolder } from '../data/folders'
import { refresh } from '../index'

let newFolderButton = document.querySelector('#newFolder')
newFolderButton.addEventListener('click', () => {
    toggleHidden()
})

let name = document.querySelector('.folderInput')

let addNewFolderButton = document.querySelector('.add')
addNewFolderButton.addEventListener('click', () => {
    let folderInput = document.querySelector('.folderInput')
    toggleHidden()
    makeFolder(folderInput.value, refresh)
    name.value = ''
})

let closeNewFolderButton = document.querySelector('.close')
closeNewFolderButton.addEventListener('click', () => {
    toggleHidden()
})

const toggleHidden = function () {
    document.querySelector('#addNewFolder').classList.toggle('hidden')
    document.querySelector('#addNewFolder').classList.toggle('show')
}