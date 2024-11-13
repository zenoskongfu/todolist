import { useEffect, useState } from "react";
import "./index.scss";
export default function TodoList() {
	const [taskList, setTaskList] = useState<any[]>([]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		setTaskList([{ id: 1, text: "123", completed: false }]);
	}, []);

	const checkboxChange = (task: any) => {
		task.completed = !task.completed;
		setTaskList([...taskList]);
	};

	const addTask = () => {
		if (inputValue.trim() === "") return;
		setTaskList([...taskList, { id: Date.now(), text: inputValue, completed: false }]);
		setInputValue("");
	};

	const deleteTask = (task: any) => {
		const newTaskList = taskList.filter((item) => item.id !== task.id);
		setTaskList(newTaskList);
	};

	return (
		<div className='todo-container'>
			<h1>To-Do List</h1>
			<input
				type='text'
				id='taskInput'
				placeholder='请输入任务'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button id='addTaskButton' onClick={addTask}>
				添加任务
			</button>
			<ul id='taskList'>
				{taskList.map((item) => {
					const { text, completed } = item;
					return (
						<li>
							<input
								type='checkbox'
								className={`complete-checkbox" ${completed ? "checked" : ""}`}
								onChange={() => checkboxChange(item)}></input>
							<span className={`task-text ${completed ? "completed" : ""}`}>{text}</span>
							<button className='delete-btn' onClick={() => deleteTask(item)}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
