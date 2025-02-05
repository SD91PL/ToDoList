export default function Info({ highlight }) {
	let highlighted = 'transition-colors duration-300'

	if (highlight) {
		highlighted += ' text-white'
	} else {
		highlighted
	}

	return (
		<div className='container mt-6 px-1 text-center text-[#2d4b4d] text-sm sm:text-base'>
			<p className='leading-loose'>
				<strong className={highlighted}>Write your first task</strong>{' '}
				<br className={`sm:hidden`} />
				and press <strong translate='no'>Enter</strong> or click
				<strong> Add</strong>
			</p>
		</div>
	)
}
