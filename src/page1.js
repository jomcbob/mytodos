import "./styles.css";
export const greeting = "Hello, Odinite!";
// page for new folders

const addNewFolder = function() {
    document.querySelector('#addNewFolder').classList.toggle('hidden')
    document.querySelector('#addNewFolder').classList.toggle('show')
}

const addInFolder = function() {
    document.querySelector('#addToDoToFolder').classList.toggle('hidden')
    document.querySelector('#addToDoToFolder').classList.toggle('show')
}
export {addNewFolder, addInFolder}