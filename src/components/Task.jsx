import { useState, useRef } from 'react'

export default function Task({ text, handleDelete, taskId }) {
	const [doneTask, setDoneTask] = useState(false)

	let background = 'flex justify-between mb-6 w-full h-12 rounded-full outline-none'
	let paragraphStyle
	let checkBtnStyle = 'p-2'
	
	if (doneTask) {
		background += ' bg-[#666769]'
		paragraphStyle = 'text-[#8b8c8f] italic line-through'
		checkBtnStyle += ' text-[#20cd8d]'
	} else {
		background += ' bg-[#59746a]'
		paragraphStyle = 'text-white'
		checkBtnStyle
	}

	function handleDoneTask() {
		if (doneTask == false) {
			setDoneTask(true)
		} else {
			setDoneTask(false)
		}
	}

	return (
		<li className={background}>
			<div className='flex-col content-center h-full px-8'>
				<p className={paragraphStyle}>{text}</p>
			</div>
			<div className='flex-col flex-nowrap content-center h-full pe-4 ps-2'>
				<p className='flex text-[#b0bdc1] gap-1'>
					<button
						onClick={handleDoneTask}
						className={checkBtnStyle}>
						<i className='icon-check'></i>
					</button>
					<button className='p-2'>
						<i className='icon-edit'></i>
					</button>
					<button onClick={() => handleDelete(taskId)} className='p-2'>
						<i className='icon-delete'></i>
					</button>
				</p>
			</div>
		</li>
	)
}
