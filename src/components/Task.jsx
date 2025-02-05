import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export default function Task({
	id,
	text,
	done,
	maxLength,
	handleDelete,
	handleEdit,
	handleStatus,
	isGrabbing = false,
}) {
	const [doneTask, setDoneTask] = useState(done)
	const [editTask, setEditTask] = useState(false)
	const [editedTask, setEditedTask] = useState(text)

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id })
	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
		opacity: isDragging ? 0 : 1,
	}

	let background =
		'flex justify-between mb-6 w-full h-12 rounded-full outline-none bg-[#59746a] touch-none overflow-hidden drop-shadow-[0px_0px_3px_rgba(23,38,39,0.25)]'
	let taskContainer =
		'flex-col content-center h-12 w-full px-8 whitespace-nowrap overflow-hidden touch-none'
	let paragraphStyle = 'h-6 text-white'
	let singleBtnStyle =
		'flex items-center justify-center h-12 w-8 outline-none focus-visible:text-white hover:drop-shadow-md focus-visible:drop-shadow-md'
	let checkBtnStyle = `${singleBtnStyle}`
	let editBtnStyle = `${singleBtnStyle} `
	let deleteBtnStyle = `${singleBtnStyle}`

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
			{editTask === false && (
				<div
					className={`${taskContainer} ${
						isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
					} outline-none ${doneTask ? 'onfocus-done-li' : 'onfocus-li'}`}
					{...listeners}
					tabIndex={0}>
					<p
						className={paragraphStyle}
						{...listeners}>
						{editedTask}
					</p>
				</div>
			)}
			{editTask && (
				<div className={`${taskContainer} cursor-default`}>
					<input
						onChange={handleChange}
						onKeyDown={handleKeyPress}
						value={editedTask}
						maxLength={maxLength}
						type='text'
						className='bg-[#b0bdc1] rounded-full px-6 h-5/6 outline-none w-full text-[#666769] transition-colors focus-visible:bg-[#d2e2e7]'
					/>{' '}
				</div>
			)}

			<div className='task-btns flex-col flex-nowrap content-center h-12 ps-2 pe-3 sm:pe-4'>
				<p className='flex items-center h-12 text-[#b0bdc1] gap-1'>
					<button
						onClick={handleDoneTask}
						className={checkBtnStyle}>
						<i className='icon-check'></i>
					</button>
					<button
						onClick={handleEditTask}
						className={editBtnStyle}>
						<i className='icon-edit pb-[2px] ps-[4px]'></i>
					</button>
					<button
						onClick={handleDelete}
						className={deleteBtnStyle}>
						<i className='icon-delete'></i>
					</button>
				</p>
			</div>
		</li>
	)
}
