import { useState } from 'react'
import plusImg from '../assets/img/plus.svg'

export default function Input({ onAdd, maxLength }) {
	const [enteredTask, setEnteredTask] = useState('')

	function handleChange(event) {
		setEnteredTask(event.target.value)
	}

	function handleClick() {
		if (enteredTask.trim() === '') {
			return
		}
		onAdd(enteredTask.trim())
		setEnteredTask('')
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			handleClick()
		}
	}

	return (
		<div className='container p-4'>
			<div className='relative h-12'>
				<input
					onChange={handleChange}
					onKeyDown={handleKeyPress}
					value={enteredTask}
					maxLength={maxLength}
					type='text'
					className='w-full px-8 h-full bg-[#20cd8d] text-[#172627] rounded-full outline-none'
				/>
				<button
					onClick={handleClick}
					className='absolute bottom-0 right-0 bg-[#2a8463] px-10 pe-6 h-full text-white text-lg rounded-full outline-none'>
					Add
					<img
						className='inline max-h-6 size-7 ms-1 pb-1'
						src={plusImg}
						alt=''
					/>
				</button>
			</div>
		</div>
	)
}
