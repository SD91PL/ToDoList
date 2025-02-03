export default function Info({ highlight }) {
	let highlighted = 'transition-colors duration-300'

	if (highlight) {
		highlighted += ' text-white'
	} else {
		highlighted
	}

	return (
		<div className='container flex flex-col gap-2 mt-6 text-center text-[#2d4b4d]'>
			<p className={highlighted}>Write your first task</p>
			<p>
				and press <strong>Enter</strong> or click <strong>Add</strong>
			</p>
		</div>
	)
}
