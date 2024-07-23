document.getElementById('showInputBtn').addEventListener('click', function() {
    document.getElementById('inputContainer').style.display = 'block';
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value.trim();

    if (textInput !== '') {
        addTaskToDisplay(textInput);
        saveTask(textInput);
        document.getElementById('textInput').value = '';
    }
});

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDisplay(task));
}

function addTaskToDisplay(task) {
    const displayContainer = document.getElementById('displayContainer');
    const p = document.createElement('p');
    p.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        p.remove();
        deleteTask(task);
        saveDeletedTask(task);
    });

    p.appendChild(deleteBtn);
    displayContainer.appendChild(p);
}

function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function saveDeletedTask(task) {
    let deletedTasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
    deletedTasks.push(task);
    localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
}

document.addEventListener('DOMContentLoaded', loadTasks);

function onlyDateMonth() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${day} ${month}`;
}

document.getElementById("datee").innerHTML = onlyDateMonth();