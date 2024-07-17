export default function StylesOfTasks() {
	return (
		<section className='container p-4 mt-6'>

        	<p className='text-white m-4'>Styles of tasks</p>
        
    	    {/* TASK */}
			<div className='flex justify-between mb-6 w-full h-12 bg-[#59746a] rounded-full outline-none'>
				<div className='flex-col content-center h-full px-8'>
					<p className='text-white'>Task</p>
				</div>
				<div className='flex-col flex-nowrap content-center h-full pe-4 ps-2'>
					<p className='flex text-[#b0bdc1] gap-1'>
						<button className='p-2'><i className='icon-check'></i></button>
						<button className='p-2'><i className='icon-edit'></i></button>
						<button className='p-2'><i className='icon-delete'></i></button>
					</p>
				</div>
			</div>

       		{/* TASK-DONE*/}
    		<div className='flex justify-between mb-6 w-full h-12 bg-[#666769] rounded-full outline-none'> {/* bg change */}
				<div className='flex-col content-center h-full px-8'>
					<p className='text-[#20cd8d] italic line-through'>Done Task</p> {/* style change */}
				</div>
				<div className='flex-col flex-nowrap content-center h-full pe-4 ps-2'>
					<p className='flex text-[#b0bdc1] gap-1'>
						<button className='p-2 text-[#20cd8d]'><i className='icon-check'></i></button> {/* color change */}
						<button className='p-2'><i className='icon-edit'></i></button>
						<button className='p-2'><i className='icon-delete'></i></button>
					</p>
				</div>
			</div>
			
       		{/* TASK-EDIT*/}
    		<div className='flex justify-between mb-6 w-full h-12 bg-[#8e99a2] rounded-full outline-none'> {/* bg change */}
				<div className='flex-col content-center h-full w-full ps-2'> {/* style change */}
          			<input type="text" className='bg-[#b0bdc1] rounded-full px-6 h-5/6 outline-none w-full'/> {/* toggle p and input */}
				</div>
				<div className='flex-col flex-nowrap content-center h-full pe-4 ps-2'>
					<p className='flex text-[#b0bdc1] gap-1 relative top-0 right-0'>
						<button className='p-2'><i className='icon-check'></i></button>
						<button className='p-2 text-white'><i className='icon-edit'></i></button> {/* color change */}
						<button className='p-2'><i className='icon-delete'></i></button>
					</p>
				</div>
			</div>

		</section>
	)
}
