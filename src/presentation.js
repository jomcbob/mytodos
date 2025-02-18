import { folders, selectedFolderIndex, setSelectedFolderIndex } from "./folders"

const toggleHidden = function () {
    document.querySelector('#addNewFolder').classList.toggle('hidden')
    document.querySelector('#addNewFolder').classList.toggle('show')
}

const folderRefresh = () => {
    let content = document.querySelector('.yourFolders')
    content.innerHTML = ''
    folders.forEach((folder, index) => {
        const id = `folder-${index}`
        const div = document.createElement('div')
        div.classList.add('folderDiv', 'hasHover')
        div.id = id
        div.innerHTML = `📂 ${folder.name}`
        content.appendChild(div)
        div.addEventListener('click', () => {
            setSelectedFolderIndex(index)
        })
    })
}

const refresh = () => {
    const todos = folders[selectedFolderIndex].todos

    const content = document.querySelector('.content')
    content.innerHTML = ''
    const container = document.createElement('div')

    todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div')
        let more = document.createElement('div')
        more.classList.add('hover')
        more.textContent = "⊕ more"
        todoDiv.classList.add('domTodo')
        todoDiv.innerHTML = `
        <div class='box'>
            <input type='checkbox' id='isDone${index}' class='hover' name='check' value='${todo.isChecked}'>
        </div>
        <div class='box'>
            <div class='listOne'>Title: ${todo.title}</div>
        </div>
        <div class='box'>
            <div class='listThree'>By when: ${todo.dueDate}</div>
        </div>
        <div class='box'>
            <div class='listFour'>priority:<div class='toTurnColor'>&nbsp;${todo.priority}&nbsp;</div></div>
        </div>
        <div class='box'>
            <div id='delete${index}' class='hover'>❌</div>
        <div>
        `
        const toStyle = todoDiv.querySelector('.toTurnColor')
        checkpriority(todo, toStyle)

        todoDiv.appendChild(more)

        seeMoreValues(more, todo)

        const deleteBtn = todoDiv.querySelector(`#delete${index}`)
        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1)
            refresh()
        })

        const checkBoxMarkIsDone = todoDiv.querySelector(`#isDone${index}`)
        checkBoxMarkIsDone.checked = todo.isChecked;

        checkBoxMarkIsDone.addEventListener("click", () => {
            todo.isChecked = !todo.isChecked
            checkBoxMarkIsDone.isChecked = todo.isChecked
        })

        container.appendChild(todoDiv)
    })

    content.appendChild(container)
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

// Function to show more details when clicking on a "more" button
const seeMoreValues = (moreButton, todo) => {
    moreButton.addEventListener("click", () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <h2>${todo.title}</h2>
                <p><strong>Description:</strong> ${todo.description}</p>
                <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                <p><strong>Priority:</strong> ${todo.priority}</p>
                <button class="close-modal">Close</button>
            </div>
        `;
        document.body.appendChild(modal);

        // Close the modal when the close button is clicked
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener("click", () => {
            modal.remove();
        });
    });
};

export { toggleHidden, folderRefresh, refresh }