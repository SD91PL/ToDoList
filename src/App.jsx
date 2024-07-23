import { useState } from 'react'
import './icons.css'
import Heading from './components/Heading'
import Input from './components/Input'
import Tasks from './components/Tasks'
import StylesOfTasks from './components/StylesOfTasks'

export default function App() {
	const [tasks, setTasks] = useState([])

	const addTask = newTask => {
		setTasks([...tasks, { txt: newTask, id: Math.random() }])
	}
	const deleteTask = taskId => {
		setTasks([...tasks.filter(task => task.id !== taskId)])
	}

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
			{tasks.length === 0 ? (
				<p className='container mt-6 text-center text-[#2d4b4d]'>
					Write a task and press <strong>Enter</strong> or click <strong>Add</strong>
				</p>
			) : undefined}

			{/* TASKS */}
			<Tasks
				tasks={tasks}
				onDelete={deleteTask}
			/>

			{/* STYLES OF TASKS ✔ */}
			<StylesOfTasks />
		</main>
	)
}
