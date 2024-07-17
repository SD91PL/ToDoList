export default function Input({}) {
	return (
		<div className='container p-4'>
			<div className='relative h-12'>
				<input
					type='text'
					className='w-full px-8 h-full bg-[#20cd8d] text-[#172627] rounded-full outline-none'
				/>
				<button className='absolute bottom-0 right-0 bg-[#2a8463] px-10 h-full text-white text-lg rounded-full outline-none'>
					Add +
				</button>
			</div>
		</div>
	)
}
