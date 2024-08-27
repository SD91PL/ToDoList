export default function Info({ highlight }) {
	let highlighted = 'transition-colors duration-300'

	if (highlight) {
		highlighted += ' text-white'
	} else {
		highlighted
	}

	return (
		<p className='container mt-6 text-center text-[#2d4b4d]'>
			<span className={highlighted}>Write a task </span> and press <strong>Enter</strong> or click <strong>Add</strong>
		</p>
	)
}
