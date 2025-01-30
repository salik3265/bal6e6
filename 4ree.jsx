document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector(".task-form");
    const taskList = document.querySelector(".task-list");
    const taskNameInput = document.getElementById("taskName");
    const taskPriorityInput = document.getElementById("taskPriority");
    
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addTask(taskNameInput.value, taskPriorityInput.value);
        taskForm.reset();
    });

    function addTask(name, priority) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <span class="task-name">${name}</span>
            <span class="priority priority-${priority}">${priority}</span>
            <div class="task-actions">
                <button class="edit-btn">✏️</button>
                <button class="delete-btn">🗑️</button>
            </div>
        `;
        
        taskList.appendChild(taskItem);

        taskItem.querySelector(".delete-btn").addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.querySelector(".edit-btn").addEventListener("click", () => {
            const newName = prompt("Изменить задачу:", name);
            if (newName) {
                taskItem.querySelector(".task-name").textContent = newName;
            }
        });
    }
});
