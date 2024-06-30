const addTaskButton = document.getElementById("addTaskButton");
const taskModalElement = document.getElementById("taskModal");
const taskModal = new bootstrap.Modal(taskModalElement);
const taskForm = document.querySelector("#taskModal form");
const taskNameInput = document.getElementById("taskName");
const taskStatusSelect = document.getElementById("taskStatus");

let tasks = [];

function addTask(name, status) {
  console.log("Adding task:", name, status); // Log statement
  tasks.push({ name, status });
  renderTasks();
}
