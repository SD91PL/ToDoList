import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export default function Task({ id, text, done, maxLength, handleDelete, handleEdit, handleStatus }) {
	const [doneTask, setDoneTask] = useState(done)
	const [editTask, setEditTask] = useState(false)
	const [editedTask, setEditedTask] = useState(text)

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	}

	let background = 'flex justify-between mb-6 w-full h-12 rounded-full outline-none bg-[#59746a] touch-none'
	let taskContainer = 'flex-col content-center h-full w-full px-8 whitespace-nowrap overflow-hidden touch-none'
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
		setDoneTask(!doneTask)
		handleStatus(id)
	}

	function handleEditTask() {
		setEditTask(!editTask)
		editTask && handleEdit(id, editedTask.trim())
	}

	function handleChange(event) {
		setEditedTask(event.target.value)
	}

	function handleClick() {
		if (editedTask.trim() === '') {
			return
		}
		setEditTask(false)
		handleEdit(id, editedTask.trim())
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			handleClick()
		}
	}

	return (
		<li
			className={background}
			ref={setNodeRef}
			{...attributes}
			style={style}>
			<div
				className={taskContainer}
				{...listeners}>
				{editTask === false && <p className={paragraphStyle}>{editedTask}</p>}
				{editTask && (
					<input
						onChange={handleChange}
						onKeyDown={handleKeyPress}
						value={editedTask}
						maxLength={maxLength}
						type='text'
						className='bg-[#b0bdc1] rounded-full px-6 h-5/6 outline-none w-full text-[#666769]'
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
