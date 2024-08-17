import { useState, useEffect } from 'react'
import {
	closestCorners,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

import './icons.css'
import Heading from './components/Heading'
import Input from './components/Input'
import Info from './components/Info'
import Tasks from './components/Tasks'

export default function App() {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem('tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	})

	useEffect(() => {
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

	let maxLength

	if (window.innerWidth <= 1400) {
		maxLength = Math.floor((window.innerWidth - 150) / 12)
	} else if (window.innerWidth > 1400) {
		maxLength = 135
	}

	// dnd-kit functions

	const getTaskPos = id => tasks.findIndex(task => task.id === id)

	const handleDragEnd = event => {
		const { active, over } = event

		if (active.id === over.id) return

		setTasks(tasks => {
			const originalPos = getTaskPos(active.id)
			const newPos = getTaskPos(over.id)

			return arrayMove(tasks, originalPos, newPos)
		})
	}

	// keyboard moving - sensors

	const sensors = useSensors(
		useSensor(TouchSensor),
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	return (
		<main className='min-h-screen min-w-screen bg-[#172627]'>
			{/* HEADING */}
			<Heading>ToDoList</Heading>

			{/* INPUT */}
			<Input
				onAdd={addTask}
				maxLength={maxLength}
			/>

			{/* INFO */}
			{tasks.length === 0 && <Info />}

			{/* TASKS with dnd-kit */}
			<DndContext
				sensors={sensors}
				onDragEnd={handleDragEnd}
				collisionDetection={closestCorners}>
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onEdit={editTask}
					onStatus={statusTask}
					maxLength={maxLength}
				/>
			</DndContext>
		</main>
	)
}
