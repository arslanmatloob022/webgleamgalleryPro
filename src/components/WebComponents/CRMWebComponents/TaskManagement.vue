<template>
  <section class="main">
    <div class="container">
      <div class="task-management">
        <h2>Task and Activity Management</h2>

        <!-- Task Creation -->
        <div class="task-creation">
          <h3>Create New Task</h3>
          <input
            type="text"
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Enter a new task"
          />
        </div>

        <!-- Task List -->
        <div class="task-list">
          <h3>Task List</h3>
          <ul>
            <li v-for="task in tasks" :key="task.id">
              {{ task.text }}
              <button @click="deleteTask(task.id)">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="code-container">
      <h2>Component Code</h2>
      <textarea name="code" id="codeText" cols="30" rows="20">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Task and Activity Management</title>
</head>
<body>
    <div class="task-management">
        <h2>Task and Activity Management</h2>
        
        <!-- Task Creation -->
        <div class="task-creation">
            <h3>Create New Task</h3>
            <input type="text" id="newTask" placeholder="Enter a new task" />
        </div>
        
        <!-- Task List -->
        <div class="task-list">
            <h3>Task List</h3>
            <ul id="taskList">
            </ul>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

<!-- JavaScript -->
document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    const tasks = [];
    let taskId = 1;

    function addTask() {
        const newTaskText = newTaskInput.value.trim();
        if (newTaskText !== "") {
            const task = { id: taskId++, text: newTaskText };
            tasks.push(task);
            newTaskInput.value = "";
            renderTasks();
        }
    }

    function deleteTask(taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            renderTasks();
        }
    }

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach(task => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${task.text}
                <button data-task-id="${task.id}" class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
        });

        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(button => {
            button.addEventListener("click", () => {
                const taskId = button.getAttribute("data-task-id");
                deleteTask(parseInt(taskId));
            });
        });
    }

    newTaskInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    renderTasks();
});

<!-- CSS -->
.task-management {
    padding: 20px;
}

.task-creation input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
}

.task-list ul {
    list-style: none;
    padding: 0;
}

.task-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
}

.task-list button {
    background-color: red;
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
}

      </textarea>
      <button id="copycode" @click="copyCode">Copy</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "TaskManagement",

  data() {
    return {
      tasks: [],
      newTask: "",
      taskId: 1,
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({ id: this.taskId++, text: this.newTask });
        this.newTask = "";
      }
    },
    deleteTask(taskId) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
  },
};
</script>
<style scoped>
.task-management {
  padding: 20px;
}

.task-creation input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.task-list ul {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.task-list button {
  background-color: rgb(233, 86, 33);
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
}
.main {
  margin: 0;
  display: flex;
  width: 100%;
  gap: 10px;
  box-shadow: 0px 0px 10px #333;
}
.container {
  width: 50%;
  z-index: 0;
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 10px;
}
.code-container {
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  padding: 10px;
  width: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  background-color: #ffffff;
}
h2 {
  font-size: 24px;
  margin: 10px;
}
textarea {
  font-family: monospace;
  padding: 10px;
  border-radius: 6px;
  width: 95%;
}
#copycode {
  margin: 10px;
  padding: 6px 4px;
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  box-shadow: 0px 0px 3px #afafaf;
}
#copycode:hover {
  transform: scale(1.07);
  box-shadow: 0px 0px 5px #afafaf;
}
* {
  margin: 0;
}
@media screen and (max-width: 760px) {
  .main {
    display: flex;
    flex-wrap: wrap;
  }
  .container {
    width: 100%;
  }
  .code-container {
    width: 100%;
  }
}
</style>
