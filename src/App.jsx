import { useState, useRef } from 'react'
import './icons.css'
import Heading from './components/Heading'
import Input from './components/Input'
import Tasks from './components/Tasks'
import StylesOfTasks from './components/StylesOfTasks'

export default function App() {
	return (
		<main className='h-screen w-screen bg-[#172627]'>
			{/* Heading ✔ */}
			<Heading>ToDoList</Heading>

			{/* INPUT */}
			<Input/>

			{/* TASKS */}
			<Tasks/>


			{/* STYLES OF TASKS ✔ */}
			<StylesOfTasks/>
		</main>
	)
}
