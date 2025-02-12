console.log("Working");

// Dom
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const counterTodo = document.querySelector(".counterTodo");
const counterDone = document.querySelector(".counterDone");
const counterInprogress = document.querySelector(".counterInprogress");
const counterBlocked = document.querySelector(".counterBlocked");

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

  let countVal = 0;
  let countVbl = 0;
  let countVcl = 0;
  let countVdl = 0;
  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 border-success rounded p-2 gap-2">
    <button class="btn"> <i class="bi bi-circle"></i></button>
    <span>${tasks[i].name}</span>
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
        countVal++;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        countVbl++;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        countVcl++;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        countVdl++;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }
  }
  counterTodo.textContent = countVal;
  counterDone.textContent = countVbl;
  counterInprogress.textContent = countVcl;
  counterBlocked.textContent = countVdl;
}
draw();

saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskStatus.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);
  }
  draw();
  taskInput.value = "";
  taskStatus.value = "TODO";
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
