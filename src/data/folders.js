let selectedFolderIndex = 0
let folders = [
    { name: 'Inbox', todos: [] }
]

const makeFolder = (title, refresh) => {
    folders.push({ name: title, todos: [] })
    setSelectedFolderIndex(folders.length-1, refresh)
}

const makeToDo = (title, description, dueDate, priority, isChecked, refresh) => {
    folders[selectedFolderIndex].todos.push({ title, description, dueDate, priority, isChecked })
    refresh()
}

const setSelectedFolderIndex = (index, refresh) => {
    selectedFolderIndex = index
    refresh()
}

export { folders, makeFolder, makeToDo, selectedFolderIndex, setSelectedFolderIndex }