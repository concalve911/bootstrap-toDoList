"use strict";

$(document).ready(function () {
  $("#todo-list").on("click", ".todo-item", function () {
    const taskText = $(this).contents().not("button").text().trim();
    $("#taskDetails").html(`<p>${taskText}</p>`);
    $("#taskModal").modal("show");
  });

  $("#add-task").on("click", function () {
    let newTask = prompt("Enter your task:");

    while (newTask === null || newTask.trim() === "") {
      newTask = prompt("Task cannot be empty. Please enter your task:");
    }

    if (newTask) {
      $("#todo-list").append(
        `<li class="list-group-item todo-item d-flex justify-content-between align-items-center">
           ${newTask}
           <button class="btn btn-danger btn-sm ms-2 delete-task">Delete</button>
         </li>`
      );
    }
  });

  $("#todo-list").on("click", ".delete-task", function () {
    const confirmed = confirm("Are you sure you want to delete this task?");

    if (confirmed) {
      $(this).closest(".todo-item").remove();
    }
  });
});
