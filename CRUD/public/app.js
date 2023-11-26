$(document).ready(() => {
    const $taskForm = $('#todoForm');
    const $taskInput = $('#taskInput');
    const $taskList = $('#taskList');
    const $completedTaskList = $('#completedTaskList');

    function fetchTasks() {
        $.get('/tasks', (data) => {
            $taskList.empty();
            $completedTaskList.empty();
    
            data.forEach((task) => {
                const $taskItem = createTaskItem(task);
                task.completed ? $completedTaskList.append($taskItem) : $taskList.append($taskItem);
            });
        });
    }
    
    fetchTasks(); // to reload task when page is reloaded

    $taskForm.submit((e) => {
        e.preventDefault();
        const taskText = $taskInput.val();
        if (taskText) {
            $.post('/tasks', { task: taskText }, () => {
                $taskInput.val('');
                fetchTasks();
            });
        }
    });

    $taskList.on('click', '.deleteBtn', function () {
        const taskId = $(this).data('id');
        deleteTask(taskId);
    });

    $taskList.on('click', '.editBtn', function () {
        const taskId = $(this).data('id');
        const $taskItem = $(this).closest('li');
        const currentTaskText = $taskItem.find('span').text();

        const $editInput = $('<input>', { type: 'text', class: 'editInput', value: currentTaskText });
        const $updateBtn = $('<button>', { class: 'editBtn', text: 'Update' });

        $taskItem.find('span').replaceWith($editInput);
        $taskItem.find('.editBtn').replaceWith($updateBtn);

        $editInput.focus();

        $updateBtn.on('click', function () {
            const updatedTaskText = $editInput.val();
            updateTask(taskId, { task: updatedTaskText }, $taskItem);
        });
    });

    function createTaskItem(task) {
        const $taskItem = $(`
            <li>
                <span>${task.task}</span>
                <button class="editBtn" data-id="${task.id}">Edit</button>
                <button class="deleteBtn" data-id="${task.id}">Delete</button>
            </li>
        `);
        return $taskItem;
    }
    function updateTask(taskId, data, $taskItem) {
        $.ajax({
            url: `/tasks/${taskId}`,
            method: 'PUT',
            data,
            success: () => {
                    $taskItem.detach().appendTo('#taskList ul');
                fetchTasks();
            },
            error: (err) => {
                console.error('Error updating task:', err);
            }
        });
    }

    function deleteTask(taskId) {
        $.ajax({
            url: `/tasks/${taskId}`,
            method: 'DELETE',
            success: fetchTasks
        });
    }
});
