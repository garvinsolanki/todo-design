window.addEventListener('load', () => {
	const form = document.getElementById("new-task-form");
	const input = document.getElementById("new-task-input");
	const list_el = document.getElementById("tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_check_el = document.createElement('input');
		task_check_el.type = 'checkbox';

		
		const task_input_el = document.createElement('label');
		task_input_el.classList.add('text');
		task_input_el.innerText = task;

		task_content_el.appendChild(task_check_el);
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		/*task_check_el.addEventListener('click', (e) => {
			if (task_check_el.innerText.toLowerCase() == "Check") {
				task_input_el.setAttribute("checked");
				task_check_el.focus();
			} else {
				task_check_el.innerText = "UnCheck";
				task_input_el.setAttribute("UNchecked");
			}
		});*/

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

//https://garvinsolanki.github.io/todo-design/