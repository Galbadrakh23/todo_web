console.log("Working");

// const addTaskButton = document.getElementById("addTaskButton");
// const taskModalElement = document.getElementById("taskModal");
// const taskForm = document.querySelector("#taskModal form");
// const taskNameInput = document.getElementById("taskName");
// const taskStatusSelect = document.getElementById("taskStatus");

function myFunction(x) {
  x.classList.toggle("fa-solid");
}

// <!-- <div class="task" id="taskTodoList">
//   <i
//     onclick="myFunction(this)"
//     class="fa-regular fa-circle fa-sm"
//   ></i>
//   <p>[loan-management] - Add card component</p>
//   <i class="fa-solid fa-pencil fa-sm"></i>
//   <i class="fa-regular fa-trash-can"></i>
// </div> -->

const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskButton");
const saveBtn = document.getElementById("save-Btn");

// const newTaskCard = `<div class="task" id="taskTodoList">
//   <i
//     onclick="myFunction(this)"
//     class="fa-regular fa-circle fa-sm"
//   ></i>
//   <p>[loan-management] - Add card component</p>
//   <i class="fa-solid fa-pencil fa-sm"></i>
//   <i class="fa-regular fa-trash-can"></i>
// </div>
// `;

// taskTodoList.innerHTML = newTaskCard;

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
  <div class="task" id="taskTodoList">
   <i onclick="myFunction(this)" class="fa-regular fa-circle fa-sm"></i>
   <p>${tasks[i].name}</p>
   <i class="fa-solid fa-pencil fa-sm"></i>
   <i class="fa-regular fa-trash-can"></i>
  </div>`;
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
addTaskBtn.addEventListener("click", function () {
  tasks[1].status = "DONE";
  draw();
  console.log("TASKS", tasks);
});

draw();
