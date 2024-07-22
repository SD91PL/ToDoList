// import { useState, useRef } from 'react'
import Task from './Task.jsx'

export default function Tasks({ tasks, onDelete }) {
	return (
		<section className='container p-4 mt-6'>
			<ul>
				{tasks.map((task, taskId) => (
					<Task
						key={taskId}
						text={task}
						taskId={taskId}
						handleDelete={onDelete}
					/>
				))}
			</ul>
		</section>
	)
}
