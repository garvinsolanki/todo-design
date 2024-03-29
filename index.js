const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const list_el = document.getElementById("tasks");
let count =0;
const todoarr = [];

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if(input.value === "")
	{
		alert('TextBox Is Empty...!","Sorry..! You Have To Enter Something In Box..!');
	}
	else{
	addTodo();
	}
	input.value = "";
});

function addTodo()
{
	 todoarr.push(input.value);
	disPlay();
	input.value = "";
}

function disPlay()
{
	
	for(let i = count;i<todoarr.length;i++)
	{
		count++;
		
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.id= todoarr[i];
		task_input_el.type = 'text';
		task_input_el.value = todoarr[i];
		task_input_el.setAttribute('readonly', 'readonly');

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.classList.add('checkbux');
		checkbox.id = i;
		
		

		task_content_el.appendChild(checkbox);
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

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

		checkbox.addEventListener('click',(e) => {
			let thm = document.getElementById(todoarr[i]);
			if(checkbox.checked == true)
			{
				
				alert(`Congrats...! You Done Your ${todoarr[i]}`);
				thm.classList.add("TaskDone");
			}	
			else
			{
				thm.classList.remove("TaskDone");
			}				
			
		});
	}
}
