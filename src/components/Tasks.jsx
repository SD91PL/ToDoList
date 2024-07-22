// import { useState, useRef } from 'react'
import Task from './Task.jsx'

export default function Tasks({ tasks }) {

	return (
		<section className='container p-4 mt-6'>
			<ul>
				{tasks.map((task, taskId) => (
                    <li key={taskId}>
                        <Task text={task}  />
                    </li>
				))}
			</ul>
		</section>
	)
}
