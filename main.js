console.log("Working");

function circleMoveFunction(x) {
  x.classList.toggle("bi-circle-fill");
}

// Dom
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");

// Variables for

let isEdited = false;
let editedIndex = -1;

const tasks = [
  {
    name: "Task One",
    status: "TODO",
  },
  {
    name: "Task Two",
    status: "INPROGRESS",
  },
  {
    name: "Task Two",
    status: "DONE",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function draw() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 border-success rounded p-2 gap-2">
    <button class="btn" onmousemove="circleMoveFunction(this)"> <i class="bi bi-circle"></i></button>
    <span>${tasks[i].name}  - (indexCounter-${i})</span>
    <div class="d-flex justify-content-end">
        <button class="btn" data-bs-toggle="modal" data-bs-target="#taskModal" onclick="taskEdit(${i})">
        <i class="bi bi-pencil"></i>
        </button>
        <button class="btn"> 
        <i class="bi bi-trash3" onclick="deleteTask(${i})"></i>
        </button>
    </div>
    </div>
    `;
    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
}
draw();

saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskInput.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  draw();
});

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  draw();
};

const taskEdit = (taskIndex) => {
  console.log(taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;

  isEdited = true;
  editedIndex = taskIndex;
};
