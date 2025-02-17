let folder = []

const makeNewFolder = (title) => {
    let currentFolder = [folder]
    currentFolder.push({title})
}

let checkpriority = (todo, toStyle) => {
    if (todo.priority == 'high') {
        toStyle.style.backgroundColor = 'red'
    } else if (todo.priority == 'medium') {
        toStyle.style.backgroundColor = 'yellow'
    } else {
        toStyle.style.backgroundColor = 'green'
    }
}

let seeMoreValues = (more, todo,) => {
    more.addEventListener("click", () => {
        let lookUpValueBody = document.querySelector('.appendToThis')
        let lookUpValue = document.querySelector('#lookUpValues')
        lookUpValue.classList.toggle('hidden')
        lookUpValue.classList.toggle('show')
        lookUpValueBody.innerHTML = ` 
        <div class='listTwo'>${todo.description}</div>
        `
    })
}
export {makeNewFolder, checkpriority, seeMoreValues}