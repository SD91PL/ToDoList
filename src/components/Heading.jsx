export default function Heading({ children }) {
	return (
		<div className='container p-4'>
			<h1 className='mt-8 px-4 text-3xl font-bold text-left text-white border-l-2 border-[#20cd8d] leading-normal'>
				{children}
			</h1>
		</div>
	)
}
