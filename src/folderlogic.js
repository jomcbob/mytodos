let currentFolderImIn = ""
let folderArray = []
let content = document.querySelector('.content')

const makeAFolder = (title) => {
    folderArray.push({title: title})
    let currentFolderImIn = title
    console.log(currentFolderImIn)
    folderRefresh(content.innerHTML)
}

const folderRefresh = (code) => {
    let folderName = document.querySelectorAll('.folderDiv')
    let folderInput = document.querySelector('.folderInput')
    let name = folderInput.value
        folderArray.push({title: name, code: code})
        console.log(folderArray)

        content.innerHTML = ''
        folderInput.value = ''
        folderName.forEach ((folder) => {
            folder.addEventListener('click', () => {
                folderName.forEach ((folder) => {
                    folder.style.backgroundColor = 'white'
                })
            folder.style.backgroundColor = 'gray'
            currentFolderImIn = folder.textContent
            // console.log(currentFolderImIn)
        })
})
}


export { makeAFolder, currentFolderImIn }
