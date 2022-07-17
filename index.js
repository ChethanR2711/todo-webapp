window.addEventListener("load", () => {
  const form = document.getElementById("to-do-form");
  const input = document.getElementById("to-do-input");
  const list_element = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please add a task...");
      return;
    }

    const task_element = document.createElement("div");
    task_element.classList.add("task");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");

    task_element.appendChild(task_content_element);

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");

    task_content_element.appendChild(task_input);

    const task_action = document.createElement("div");
    task_action.classList.add("actions");

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerHTML = '<i class="fa fa-edit" style="font-size: 24px"></i>';

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerHTML =
      '<i class="material-icons" style="font-size: 24px">delete</i>';

    task_action.appendChild(task_edit);
    task_action.appendChild(task_delete);

    task_element.appendChild(task_action);

    list_element.appendChild(task_element);

    input.value = "";

    task_edit.addEventListener("click", () => {
      if (
        task_edit.innerHTML ==
        '<i class="fa fa-edit" style="font-size: 24px"></i>'
      ) {
        task_input.removeAttribute("readonly");
        task_input.focus();
        task_edit.innerHTML =
          '<i class="fa fa-save" style="font-size: 24px"></i>';
      } else {
        task_input.setAttribute("readonly", "readonly");
        task_edit.innerHTML =
          '<i class="fa fa-edit" style="font-size: 24px"></i>';
      }
    });

    task_delete.addEventListener("click", () => {
      list_element.removeChild(task_element);
    });
  });
});
