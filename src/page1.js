let folder = 'yo'

const makeNewFolder = (title) => {
    let currentFolder = [folder]
    currentFolder.push({title})
    console.log(currentFolder)
}

export {makeNewFolder}