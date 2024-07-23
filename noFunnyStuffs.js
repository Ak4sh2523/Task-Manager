document.getElementById('addBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
});

document.getElementById('submitBtnNew').addEventListener('click', function() {
    const inputField = document.getElementById('inputField').value.trim();

    if (inputField !== '') {
        addTaskToDisplay_nfs(inputField);
        saveTask_nfs(inputField);
        document.getElementById('inputField').value = '';
    }
});

function saveTask_nfs(taskss) {
    let tasks_nfs = JSON.parse(sessionStorage.getItem('tasks')) || [];
    tasks_nfs.push(taskss);
    sessionStorage.setItem('tasks', JSON.stringify(tasks_nfs));
}

function loadTasks_nfs() {
    let tasks_nfs = JSON.parse(sessionStorage.getItem('tasks')) || [];
    tasks_nfs.forEach(taskss => addTaskToDisplay_nfs(taskss));
}

function addTaskToDisplay_nfs(taskss) {
    const taskDisplay = document.getElementById('taskDisplay');
    const p = document.createElement('p');
    p.textContent = taskss;

    const deleteBtnNew = document.createElement('button');
    deleteBtnNew.textContent = 'Delete';
    deleteBtnNew.classList.add('deleteBtnNew');
    deleteBtnNew.addEventListener('click', () => {
        p.remove();
        deleteTask_nfs(taskss);
        saveDeletedTask_nfs(taskss);
    });

    p.appendChild(deleteBtnNew);
    taskDisplay.appendChild(p);
}

function deleteTask_nfs(taskss) {
    let tasks_nfs = JSON.parse(sessionStorage.getItem('tasks')) || [];
    tasks_nfs = tasks_nfs.filter(t => t !== taskss);
    sessionStorage.setItem('tasks', JSON.stringify(tasks_nfs));
}

function saveDeletedTask_nfs(taskss) {
    let deletedTasks_nfs = JSON.parse(sessionStorage.getItem('deletedTasks_nfs')) || [];
    deletedTasks_nfs.push(taskss);
    sessionStorage.setItem('deletedTasks_nfs', JSON.stringify(deletedTasks_nfs));
}

document.addEventListener('DOMContentLoaded', loadTasks_nfs);