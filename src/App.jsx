import { useState, useEffect } from 'react'
import './icons.css'
import Heading from './components/Heading'
import Input from './components/Input'
import Info from './components/Info'
import Tasks from './components/Tasks'
import StylesOfTasks from './components/StylesOfTasks'

export default function App() {
	const [tasks, setTasks] = useState(() => {
		// Get state from localStorage or set empty array as default value
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	})

	useEffect(() => {
		// Save state to localStorage every time tasks change
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const addTask = newTask => {
		setTasks([...tasks, { txt: newTask, id: crypto.randomUUID(), done: false }])
	}
	const deleteTask = taskId => {
		setTasks(tasks.filter(task => task.id !== taskId))
	}
	const editTask = (taskId, updatedText) => {
		setTasks(tasks.map(task => (task.id === taskId ? { ...task, txt: updatedText } : task)))
	}
	const statusTask = taskId => {
		setTasks(tasks.map(task => (task.id === taskId ? { ...task, done: !task.done } : task)))
	}

	console.log(tasks) // checking for updates to the tasks array

	let maxLength

	if (window.innerWidth <= 1400) {
		maxLength = Math.floor((window.innerWidth - 150) / 12)
	} else if (window.innerWidth > 1400) {
		maxLength = 135
	}

	return (
		<main className='min-h-screen min-w-screen bg-[#172627]'>
			{/* Heading ✔ */}
			<Heading>ToDoList</Heading>

			{/* INPUT ✔ */}
			<Input
				onAdd={addTask}
				maxLength={maxLength}
			/>

			{/* INFO ✔ */}
			{tasks.length === 0 && <Info />}

			{/* TASKS ✔ */}
			<Tasks
				tasks={tasks}
				onDelete={deleteTask}
				onEdit={editTask}
				onStatus={statusTask}
				maxLength={maxLength}
			/>

			{/* STYLES OF TASKS ✔ */}
			<StylesOfTasks />
		</main>
	)
}
