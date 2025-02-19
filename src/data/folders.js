let selectedFolderIndex = 0
let folders = [
    { name: 'Inbox', todos: [] }
]

const loadFromLocalStorage = () => {
    const savedFolders = localStorage.getItem('folders')
    const savedSelectedFolderIndex = localStorage.getItem('selectedFolderIndex')

    if (savedFolders) {
        folders = JSON.parse(savedFolders)
    }
    if (savedSelectedFolderIndex) {
        let index = parseInt(savedSelectedFolderIndex, 10)
        if (index > folders.length - 1) {
            index = folders.length - 1
        }
        selectedFolderIndex = index
    }
}

const saveToLocalStorage = () => {
    localStorage.setItem('folders', JSON.stringify(folders))
    localStorage.setItem('selectedFolderIndex', selectedFolderIndex)
}

const makeFolder = (title, refresh) => {
    folders.push({ name: title, todos: [] })
    setSelectedFolderIndex(folders.length - 1, refresh)
}

const deleteFolder = (index, refresh) => {
    folders.splice(index, 1)
    setSelectedFolderIndexWithoutRefresh(index - 1)
    saveToLocalStorage()
    refresh()
}

const makeToDo = (title, description, dueDate, priority, isChecked, refresh) => {
    folders[selectedFolderIndex].todos.push({ title, description, dueDate, priority, isChecked })
    refresh()
}

const setSelectedFolderIndexWithoutRefresh = (index) => {
    if (index < 0) {
        index = 0
    } else if (index > folders.length - 1) {
        selectedFolderIndex = folders.length - 1
    } else {
        selectedFolderIndex = index
    }
}

const setSelectedFolderIndex = (index, refresh) => {
    setSelectedFolderIndexWithoutRefresh(index)
    refresh()
}



export { deleteFolder, folders, makeFolder, makeToDo, selectedFolderIndex, setSelectedFolderIndex, loadFromLocalStorage, saveToLocalStorage }