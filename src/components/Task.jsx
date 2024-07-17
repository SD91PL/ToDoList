export default function Task() {
	return (
		<div className='flex justify-between mb-6 w-full h-12 bg-[#59746a] rounded-full outline-none'>
			<div className='flex-col content-center h-full px-8'>
				<p className='text-white'>Task</p>
			</div>
			<div className='flex-col flex-nowrap content-center h-full pe-4 ps-2'>
				<p className='flex text-[#b0bdc1] gap-1'>
					<button className='p-2'>
						<i className='icon-check'></i>
					</button>
					<button className='p-2'>
						<i className='icon-edit'></i>
					</button>
					<button className='p-2'>
						<i className='icon-delete'></i>
					</button>
				</p>
			</div>
		</div>
	)
}
