import { refresh } from "./presentation"
import { folders, selectedFolderIndex } from "./folders"

const makeToDo = (title, description, dueDate, priority, isChecked) => {
    folders[selectedFolderIndex].todos.push({ title, description, dueDate, priority, isChecked })
    refresh()
}

export { makeToDo }