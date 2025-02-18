import { folderRefresh, toggleHidden } from './presentation'


/* folders = [
    {
        name: bob,
        todos: [
            {title: 'foo', descriptiion: 'bob', dueDate: '', priority: 'low', isChecked: false}
        ]
    }
]
*/

let selectedFolderIndex = 0
let folders = [
    { name: 'Inbox', todos: [] }
]

const makeFolder = (title) => {
    folders.push({ name: title, todos: [] })
    folderRefresh()
    toggleHidden()
}

const setSelectedFolderIndex = (index) => {
    selectedFolderIndex = index
}

export { folders, makeFolder, selectedFolderIndex, setSelectedFolderIndex }