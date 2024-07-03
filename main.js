console.log("Working");

function myFunction(x) {
  x.classList.toggle("fa-solid");
}

// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");

// VARIABLES FOR TASK
const tasks = [
  {
    name: "Task Two",
    status: "INPROGRESS",
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

    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2 gap-2">
    <span>${tasks[i].name}</span>
    <div class="d-flex justify-content-end">
        <button class="btn">
        <i class="bi bi-pencil ms-auto"></i>
        </button>
        <button class="btn">
        <i class="bi bi-trash3 ms-auto"></i>
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

saveBtn.addEventListener("click", function () {
  const newTask = {
    name: taskInput.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  draw();
  console.log("TASKS", tasks);
});

draw();
function changeBorderColor(status) {
  switch (status) {
    case "TODO": {
      return "grey";
    }
    case "INPROGRESS": {
      return "yellow";
    }
    case "DONE": {
      return "green";
    }
    case "BLOCKED": {
      return "red";
    }
    default: {
      return "grey";
    }
  }
}

function updateBorderColor(element, status) {
  element.style.borderColor = changeBorderColor(status);
}
