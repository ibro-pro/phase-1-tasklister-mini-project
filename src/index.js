document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list container
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    // Get user input
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create task item
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      // Append delete button to task item
      taskItem.appendChild(deleteButton);
      
      // Append task item to task list
      taskList.appendChild(taskItem);
    }

    // Clear input field
    taskInput.value = "";
  });
});
