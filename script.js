function addTask() {
    var taskInput = document.getElementById("taskInput").value;
    var taskType = document.getElementById("taskType").value;
    var taskImportance = document.getElementById("taskImportance").value;
    var taskTime = document.getElementById("taskTime").value;

    if (taskInput === "" || taskTime === "") {
        alert("Please enter both task and time!");
        return;
    }

    var container = document.getElementById("taskList");
    var taskDiv = document.createElement("div");
    taskDiv.className = "task";

    var taskDetails = document.createElement("span");
    taskDetails.innerHTML = "<strong>Task:</strong> " + taskInput +
        " | <strong>Type:</strong> " + taskType +
        " | <strong>Importance:</strong> " + taskImportance +
        " | <strong>Time:</strong> " + taskTime;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        if (confirm("Are you sure you want to delete this task?")) {
            container.removeChild(taskDiv);
        }
    };

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        var newTask = prompt("Enter the new task:");
        if (newTask !== null && newTask !== "") {
            taskDetails.innerHTML = "<strong>Task:</strong> " + newTask +
                " | <strong>Type:</strong> " + taskType +
                " | <strong>Importance:</strong> " + taskImportance +
                " | <strong>Time:</strong> " + taskTime;
        }
    };

    var completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.onclick = function () {
        taskDetails.classList.toggle("completed");
    };

    taskDiv.appendChild(taskDetails);
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(completeBtn);

    container.appendChild(taskDiv);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskType").value = "";
    document.getElementById("taskTime").value = "";
}
