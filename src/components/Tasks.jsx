// import { useState, useRef } from 'react'
import Task from './Task.jsx'

export default function Tasks({ tasks, onDelete }) {
	return (
		<section className='container p-4 mt-6'>
			<ul>
				{tasks.map(task => (
					<Task
						key={task.id}
						text={task.txt}
						handleDelete={() => onDelete(task.id)}
					/>
				))}
			</ul>
		</section>
	)
}
