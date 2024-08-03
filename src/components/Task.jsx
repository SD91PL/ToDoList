import { useState } from 'react'

export default function Task({ text, handleDelete }) {
	const [doneTask, setDoneTask] = useState(false)
	const [editTask, setEditTask] = useState(false)

	let background = 'flex justify-between mb-6 w-full h-12 rounded-full outline-none bg-[#59746a]'
	let taskContainer = 'flex-col content-center h-full px-8'
	let paragraphStyle = 'text-white'
	let checkBtnStyle = 'p-2'
	let editBtnStyle = 'p-2'

	if (doneTask) {
		background += ' bg-[#666769]'
		paragraphStyle = 'text-[#8b8c8f] italic line-through'
		checkBtnStyle += ' text-[#20cd8d]'
	} else {
		background
		paragraphStyle
		checkBtnStyle
	}

	if (editTask) {
		background += ' bg-[#8e99a2]'
		paragraphStyle = 'text-[#8b8c8f]'
		taskContainer += ' pe-0 ps-2 w-full'
		editBtnStyle += ' text-white'
	} else {
		background
		paragraphStyle
	}

	function handleDoneTask() {
		if (doneTask == false) {
			setDoneTask(true)
		} else {
			setDoneTask(false)
		}
	}

	function handleEditTask() {
		if (editTask == false) {
			setEditTask(true)
		} else {
			setEditTask(false)
		}
	}

	return (
		<li className={background}>
			<div className={taskContainer}>
				{editTask === false && <p className={paragraphStyle}>{text}</p>}
				{editTask && (
					<input
						type='text'
						className='bg-[#b0bdc1] rounded-full px-6 h-5/6 outline-none w-full text-[#666769]'
						defaultValue={text}
					/>
				)}
			</div>
			<div className='flex-col flex-nowrap content-center h-full pe-4 ps-2'>
				<p className='flex text-[#b0bdc1] gap-1'>
					<button
						onClick={handleDoneTask}
						className={checkBtnStyle}>
						<i className='icon-check'></i>
					</button>
					<button
						onClick={handleEditTask}
						className={editBtnStyle}>
						<i className='icon-edit'></i>
					</button>
					<button
						onClick={handleDelete}
						className='p-2'>
						<i className='icon-delete'></i>
					</button>
				</p>
			</div>
		</li>
	)
}
