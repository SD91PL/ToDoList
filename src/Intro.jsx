import { useEffect, useState } from 'react'

export default function Intro({ onFinish }) {
	const [isVisible, setIsVisible] = useState(true)
	const [isFading, setIsFading] = useState(false) // Controls the fade-out animation

	useEffect(() => {
		const startFadeOut = setTimeout(() => {
			setIsFading(true) // Start fade-out animation
		}, 3200) // Start fading out after 4 seconds

		const hideIntro = setTimeout(() => {
			setIsVisible(false) // Hide the component
			document.body.style.overflow = 'auto' // Enable scrolling
			onFinish() // Notify about completion
		}, 4200) // Hide after 5 seconds (1 second for fade-out animation)

		document.body.style.overflow = 'hidden' // Disable scrolling

		return () => {
			clearTimeout(startFadeOut)
			clearTimeout(hideIntro)
			document.body.style.overflow = 'auto' // Ensure scrolling is enabled
		}
	}, [onFinish])

	if (!isVisible) return null // Do not render the component if it is not visible

	return (
		<div
			className={`absolute top-0 h-screen w-screen bg-[#172627] z-50 flex flex-col justify-center items-center transition duration-1000 ${
				isFading ? 'opacity-0' : 'opacity-100'
			}`}>
			<div className={`banner transition duration-1000 ${isFading ? 'scale-90' : 'scale-100'}`}>
				<div className='logo mb-12 flex flex-col justify-center items-center'>
					<svg
						width='94'
						height='99'
						viewBox='0 0 94 99'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M20.752 98.632C20.752 97.48 20.624 96.968 20.112 96.968L17.168 98.376C17.168 97.736 16.784 97.352 16.144 97.096L15.12 96.968C14.224 96.968 13.84 97.096 12.56 97.864C12.176 97.096 11.664 96.2 11.28 95.432C7.952 89.032 4.496 79.432 2.96 75.208C2.192 73.032 1.424 68.552 0.528 61.768C1.552 62.408 2.32 62.664 2.704 62.664C3.216 62.664 3.856 61.768 4.368 59.976C4.624 60.36 5.136 60.488 5.776 60.488C6.16 60.488 6.672 60.36 6.928 59.976L8.976 56.904L11.28 57.672H11.408C11.664 57.672 12.048 57.288 12.688 56.904C13.328 56.52 13.84 56.264 14.224 56.264L14.608 56.392C16.656 57.416 18.064 59.208 18.704 62.024C20.24 68.552 21.648 71.752 23.312 71.752C24.72 71.752 26.64 70.088 28.688 66.888C30.736 63.688 32.784 59.336 35.088 54.088C35.216 55.112 35.344 55.624 35.6 55.624C36.368 55.624 38.288 51.144 43.024 43.592C50.064 32.2 67.472 10.312 71.952 7.24C75.28 4.936 77.84 2.75999 79.632 0.839996C79.376 2.12 79.12 3.016 79.12 3.39999C79.12 3.784 79.376 3.91199 79.632 3.91199L83.216 2.12V2.632C83.216 3.272 83.344 3.656 83.728 3.656C84.24 3.656 86.288 1.60799 86.544 0.839996L86.288 2.632L90.64 0.0719986L89.616 2.376C90.896 1.48 91.92 0.967995 92.56 0.967995C93.2 0.967995 93.584 1.992 93.584 2.632C93.584 3.656 92.688 5.064 91.28 6.856C89.744 8.904 85.904 12.872 74.384 26.056C69.392 31.688 47.248 61.768 43.024 68.936L35.088 82.376C31.632 88.136 29.456 91.848 28.304 93.256C27.152 94.664 25.744 96.072 24.08 97.352L22.928 96.712L21.904 97.352L20.752 98.632Z'
							fill='#20cd8d'
						/>
					</svg>
				</div>
				<div className='title'>
					<svg
						width='274'
						height='50'
						viewBox='0 0 274 50'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M22.375 49H12.6875V11.375H0.28125V3.3125H34.7812V11.375H22.375V49ZM46.4688 31.4688C46.4688 34.9271 47.0312 37.5417 48.1562 39.3125C49.3021 41.0833 51.1562 41.9688 53.7188 41.9688C56.2604 41.9688 58.0833 41.0938 59.1875 39.3438C60.3125 37.5729 60.875 34.9479 60.875 31.4688C60.875 28.0104 60.3125 25.4167 59.1875 23.6875C58.0625 21.9583 56.2188 21.0938 53.6562 21.0938C51.1146 21.0938 49.2812 21.9583 48.1562 23.6875C47.0312 25.3958 46.4688 27.9896 46.4688 31.4688ZM70.625 31.4688C70.625 37.1562 69.125 41.6042 66.125 44.8125C63.125 48.0208 58.9479 49.625 53.5938 49.625C50.2396 49.625 47.2812 48.8958 44.7188 47.4375C42.1562 45.9583 40.1875 43.8438 38.8125 41.0938C37.4375 38.3438 36.75 35.1354 36.75 31.4688C36.75 25.7604 38.2396 21.3229 41.2188 18.1562C44.1979 14.9896 48.3854 13.4062 53.7812 13.4062C57.1354 13.4062 60.0938 14.1354 62.6562 15.5938C65.2188 17.0521 67.1875 19.1458 68.5625 21.875C69.9375 24.6042 70.625 27.8021 70.625 31.4688ZM117.156 25.7188C117.156 33.2396 115.01 39 110.719 43C106.448 47 100.271 49 92.1875 49H79.25V3.3125H93.5938C101.052 3.3125 106.844 5.28125 110.969 9.21875C115.094 13.1562 117.156 18.6562 117.156 25.7188ZM107.094 25.9688C107.094 16.1562 102.76 11.25 94.0938 11.25H88.9375V41H93.0938C102.427 41 107.094 35.9896 107.094 25.9688ZM133.469 31.4688C133.469 34.9271 134.031 37.5417 135.156 39.3125C136.302 41.0833 138.156 41.9688 140.719 41.9688C143.26 41.9688 145.083 41.0938 146.188 39.3438C147.312 37.5729 147.875 34.9479 147.875 31.4688C147.875 28.0104 147.312 25.4167 146.188 23.6875C145.062 21.9583 143.219 21.0938 140.656 21.0938C138.115 21.0938 136.281 21.9583 135.156 23.6875C134.031 25.3958 133.469 27.9896 133.469 31.4688ZM157.625 31.4688C157.625 37.1562 156.125 41.6042 153.125 44.8125C150.125 48.0208 145.948 49.625 140.594 49.625C137.24 49.625 134.281 48.8958 131.719 47.4375C129.156 45.9583 127.188 43.8438 125.812 41.0938C124.438 38.3438 123.75 35.1354 123.75 31.4688C123.75 25.7604 125.24 21.3229 128.219 18.1562C131.198 14.9896 135.385 13.4062 140.781 13.4062C144.135 13.4062 147.094 14.1354 149.656 15.5938C152.219 17.0521 154.188 19.1458 155.562 21.875C156.938 24.6042 157.625 27.8021 157.625 31.4688ZM166.25 49V3.3125H175.938V41H194.469V49H166.25ZM201.281 5.03125C201.281 1.92708 203.01 0.375 206.469 0.375C209.927 0.375 211.656 1.92708 211.656 5.03125C211.656 6.51042 211.219 7.66667 210.344 8.5C209.49 9.3125 208.198 9.71875 206.469 9.71875C203.01 9.71875 201.281 8.15625 201.281 5.03125ZM211.219 49H201.688V14.0625H211.219V49ZM245.625 38.625C245.625 42.2083 244.375 44.9375 241.875 46.8125C239.396 48.6875 235.677 49.625 230.719 49.625C228.177 49.625 226.01 49.4479 224.219 49.0938C222.427 48.7604 220.75 48.2604 219.188 47.5938V39.7188C220.958 40.5521 222.948 41.25 225.156 41.8125C227.385 42.375 229.344 42.6562 231.031 42.6562C234.49 42.6562 236.219 41.6562 236.219 39.6562C236.219 38.9062 235.99 38.3021 235.531 37.8438C235.073 37.3646 234.281 36.8333 233.156 36.25C232.031 35.6458 230.531 34.9479 228.656 34.1562C225.969 33.0312 223.99 31.9896 222.719 31.0312C221.469 30.0729 220.552 28.9792 219.969 27.75C219.406 26.5 219.125 24.9688 219.125 23.1562C219.125 20.0521 220.323 17.6562 222.719 15.9688C225.135 14.2604 228.552 13.4062 232.969 13.4062C237.177 13.4062 241.271 14.3229 245.25 16.1562L242.375 23.0312C240.625 22.2812 238.99 21.6667 237.469 21.1875C235.948 20.7083 234.396 20.4688 232.812 20.4688C230 20.4688 228.594 21.2292 228.594 22.75C228.594 23.6042 229.042 24.3438 229.938 24.9688C230.854 25.5938 232.844 26.5208 235.906 27.75C238.635 28.8542 240.635 29.8854 241.906 30.8438C243.177 31.8021 244.115 32.9062 244.719 34.1562C245.323 35.4062 245.625 36.8958 245.625 38.625ZM267.781 42.0312C269.448 42.0312 271.448 41.6667 273.781 40.9375V48.0312C271.406 49.0938 268.49 49.625 265.031 49.625C261.219 49.625 258.438 48.6667 256.688 46.75C254.958 44.8125 254.094 41.9167 254.094 38.0625V21.2188H249.531V17.1875L254.781 14L257.531 6.625H263.625V14.0625H273.406V21.2188H263.625V38.0625C263.625 39.4167 264 40.4167 264.75 41.0625C265.521 41.7083 266.531 42.0312 267.781 42.0312Z'
							fill='white'
						/>
					</svg>
				</div>
				<a
					href='https://github.com/SD91PL/'
					target='_blank'
					rel='noopener'>
					<div className='subtitle mt-8 flex flex-col justify-center items-center'>
						<svg
							width='142'
							height='17'
							viewBox='0 0 142 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M6.44531 2.67969C5.21615 2.67969 4.25 3.09115 3.54688 3.91406C2.84375 4.73698 2.49219 5.86198 2.49219 7.28906C2.49219 8.76302 2.83333 9.90104 3.51562 10.7031C4.19792 11.5 5.16927 11.8984 6.42969 11.8984C7.24219 11.8984 8.15625 11.7474 9.17188 11.4453V12.6953C8.6875 12.8724 8.22135 12.9922 7.77344 13.0547C7.32552 13.1224 6.8099 13.1562 6.22656 13.1562C4.54427 13.1562 3.2474 12.6458 2.33594 11.625C1.42969 10.599 0.976562 9.14844 0.976562 7.27344C0.976562 6.09635 1.19271 5.0651 1.625 4.17969C2.0625 3.29427 2.69531 2.61198 3.52344 2.13281C4.35677 1.65365 5.33594 1.41406 6.46094 1.41406C7.66927 1.41406 8.72135 1.63802 9.61719 2.08594L9.03906 3.30469C8.1276 2.88802 7.26302 2.67969 6.44531 2.67969ZM15.4688 4.26562C15.849 4.26562 16.1849 4.29688 16.4766 4.35938L16.3047 5.65625C15.987 5.58333 15.6771 5.54688 15.375 5.54688C14.9219 5.54688 14.5 5.67188 14.1094 5.92188C13.724 6.17188 13.4219 6.51823 13.2031 6.96094C12.9844 7.39844 12.875 7.88542 12.875 8.42188V13H11.4688V4.42188H12.625L12.7812 5.99219H12.8438C13.1719 5.42448 13.5599 4.99479 14.0078 4.70312C14.4557 4.41146 14.9427 4.26562 15.4688 4.26562ZM21.5703 13.1562C20.2839 13.1562 19.2734 12.7682 18.5391 11.9922C17.8099 11.2109 17.4453 10.138 17.4453 8.77344C17.4453 7.39844 17.7865 6.30469 18.4688 5.49219C19.151 4.67448 20.0729 4.26562 21.2344 4.26562C22.3125 4.26562 23.1719 4.61458 23.8125 5.3125C24.4531 6.00521 24.7734 6.94531 24.7734 8.13281V8.98438H18.8984C18.9245 9.95833 19.1719 10.6979 19.6406 11.2031C20.1094 11.7083 20.7734 11.9609 21.6328 11.9609C22.0911 11.9609 22.526 11.9219 22.9375 11.8438C23.349 11.7604 23.8307 11.6016 24.3828 11.3672V12.6016C23.9089 12.8047 23.4635 12.9479 23.0469 13.0312C22.6302 13.1146 22.138 13.1562 21.5703 13.1562ZM21.2188 5.41406C20.5469 5.41406 20.0156 5.63021 19.625 6.0625C19.2344 6.49479 19.0026 7.09635 18.9297 7.86719H23.2969C23.2865 7.0651 23.1016 6.45573 22.7422 6.03906C22.3828 5.6224 21.875 5.41406 21.2188 5.41406ZM32.25 13L31.9766 11.7812H31.9141C31.487 12.3177 31.0599 12.6823 30.6328 12.875C30.2109 13.0625 29.6771 13.1562 29.0312 13.1562C28.1875 13.1562 27.526 12.9349 27.0469 12.4922C26.5677 12.0495 26.3281 11.4245 26.3281 10.6172C26.3281 8.8776 27.7005 7.96615 30.4453 7.88281L31.8984 7.82812V7.32031C31.8984 6.66927 31.7578 6.1901 31.4766 5.88281C31.1953 5.57031 30.7448 5.41406 30.125 5.41406C29.6719 5.41406 29.2422 5.48177 28.8359 5.61719C28.4349 5.7526 28.0573 5.90365 27.7031 6.07031L27.2734 5.01562C27.7057 4.78646 28.1771 4.60677 28.6875 4.47656C29.1979 4.34635 29.7031 4.28125 30.2031 4.28125C31.2396 4.28125 32.0104 4.51042 32.5156 4.96875C33.0208 5.42708 33.2734 6.15625 33.2734 7.15625V13H32.25ZM29.3516 12.0234C30.138 12.0234 30.7552 11.8125 31.2031 11.3906C31.6562 10.9635 31.8828 10.3594 31.8828 9.57812V8.80469L30.6172 8.85938C29.6328 8.89583 28.9141 9.05208 28.4609 9.32812C28.013 9.60417 27.7891 10.0391 27.7891 10.6328C27.7891 11.0807 27.9245 11.4245 28.1953 11.6641C28.4714 11.9036 28.8568 12.0234 29.3516 12.0234ZM38.8047 12.0078C38.987 12.0078 39.2005 11.9896 39.4453 11.9531C39.6901 11.9167 39.875 11.875 40 11.8281V12.9062C39.8698 12.9635 39.6667 13.0182 39.3906 13.0703C39.1198 13.1276 38.8438 13.1562 38.5625 13.1562C36.8854 13.1562 36.0469 12.2734 36.0469 10.5078V5.51562H34.8359V4.84375L36.0625 4.28125L36.625 2.45312H37.4609V4.42188H39.9375V5.51562H37.4609V10.4688C37.4609 10.9635 37.5781 11.3438 37.8125 11.6094C38.0521 11.875 38.3828 12.0078 38.8047 12.0078ZM45.3672 13.1562C44.0807 13.1562 43.0703 12.7682 42.3359 11.9922C41.6068 11.2109 41.2422 10.138 41.2422 8.77344C41.2422 7.39844 41.5833 6.30469 42.2656 5.49219C42.9479 4.67448 43.8698 4.26562 45.0312 4.26562C46.1094 4.26562 46.9688 4.61458 47.6094 5.3125C48.25 6.00521 48.5703 6.94531 48.5703 8.13281V8.98438H42.6953C42.7214 9.95833 42.9688 10.6979 43.4375 11.2031C43.9062 11.7083 44.5703 11.9609 45.4297 11.9609C45.888 11.9609 46.3229 11.9219 46.7344 11.8438C47.1458 11.7604 47.6276 11.6016 48.1797 11.3672V12.6016C47.7057 12.8047 47.2604 12.9479 46.8438 13.0312C46.4271 13.1146 45.9349 13.1562 45.3672 13.1562ZM45.0156 5.41406C44.3438 5.41406 43.8125 5.63021 43.4219 6.0625C43.0312 6.49479 42.7995 7.09635 42.7266 7.86719H47.0938C47.0833 7.0651 46.8984 6.45573 46.5391 6.03906C46.1797 5.6224 45.6719 5.41406 45.0156 5.41406ZM53.7891 13.1562C52.6745 13.1562 51.8099 12.7708 51.1953 12C50.5807 11.2292 50.2734 10.138 50.2734 8.72656C50.2734 7.32552 50.5807 6.23177 51.1953 5.44531C51.8151 4.65885 52.6849 4.26562 53.8047 4.26562C54.9557 4.26562 55.8411 4.6875 56.4609 5.53125H56.5625C56.5469 5.42708 56.526 5.21875 56.5 4.90625C56.474 4.58854 56.4609 4.375 56.4609 4.26562V0.84375H57.8672V13H56.7344L56.5234 11.8516H56.4609C55.862 12.7214 54.9714 13.1562 53.7891 13.1562ZM54.0156 11.9922C54.8698 11.9922 55.4922 11.7604 55.8828 11.2969C56.2786 10.8281 56.4766 10.0625 56.4766 9V8.74219C56.4766 7.54948 56.276 6.70052 55.875 6.19531C55.4792 5.6849 54.8542 5.42969 54 5.42969C53.276 5.42969 52.7161 5.71875 52.3203 6.29688C51.9245 6.86979 51.7266 7.6901 51.7266 8.75781C51.7266 9.82031 51.9219 10.625 52.3125 11.1719C52.7083 11.7188 53.276 11.9922 54.0156 11.9922ZM68.8125 4.28125C69.9427 4.28125 70.8151 4.67188 71.4297 5.45312C72.0443 6.22917 72.3516 7.3151 72.3516 8.71094C72.3516 10.1276 72.0391 11.224 71.4141 12C70.7891 12.7708 69.9219 13.1562 68.8125 13.1562C68.2344 13.1562 67.7188 13.0521 67.2656 12.8438C66.8125 12.6354 66.4427 12.3255 66.1562 11.9141H66.0469C65.8854 12.5391 65.7891 12.901 65.7578 13H64.75V0.84375H66.1562V3.79688C66.1562 4.38542 66.1302 4.97396 66.0781 5.5625H66.1562C66.7344 4.70833 67.6198 4.28125 68.8125 4.28125ZM68.5781 5.44531C67.7135 5.44531 67.0938 5.6901 66.7188 6.17969C66.3438 6.66927 66.1562 7.4974 66.1562 8.66406V8.72656C66.1562 9.89844 66.3464 10.737 66.7266 11.2422C67.112 11.7422 67.7396 11.9922 68.6094 11.9922C69.3802 11.9922 69.9531 11.7109 70.3281 11.1484C70.7083 10.5807 70.8984 9.76302 70.8984 8.69531C70.8984 7.61198 70.7083 6.79948 70.3281 6.25781C69.9479 5.71615 69.3646 5.44531 68.5781 5.44531ZM73.0938 4.42188H74.6016L76.4531 9.30469C76.8438 10.3672 77.0833 11.1458 77.1719 11.6406H77.2344C77.2812 11.4479 77.388 11.0885 77.5547 10.5625C77.7214 10.0312 77.862 9.60677 77.9766 9.28906L79.7188 4.42188H81.2344L77.5391 14.1875C77.1797 15.1354 76.7526 15.8151 76.2578 16.2266C75.763 16.638 75.151 16.8438 74.4219 16.8438C74.0312 16.8438 73.6432 16.7995 73.2578 16.7109V15.5938C73.5182 15.6562 73.8307 15.6875 74.1953 15.6875C74.6432 15.6875 75.0234 15.5625 75.3359 15.3125C75.6484 15.0677 75.9036 14.6875 76.1016 14.1719L76.5469 13.0312L73.0938 4.42188ZM93.4219 9.94531C93.4219 10.9401 93.0625 11.724 92.3438 12.2969C91.625 12.8698 90.625 13.1562 89.3438 13.1562C87.9896 13.1562 86.9427 12.9766 86.2031 12.6172V11.2422C86.6875 11.4505 87.2161 11.6146 87.7891 11.7344C88.3672 11.8542 88.9062 11.9141 89.4062 11.9141C90.2604 11.9141 90.9036 11.75 91.3359 11.4219C91.7682 11.0938 91.9844 10.6432 91.9844 10.0703C91.9844 9.6901 91.9062 9.3776 91.75 9.13281C91.5938 8.88802 91.3307 8.65885 90.9609 8.44531C90.5964 8.23177 90.0417 7.98958 89.2969 7.71875C88.2396 7.33333 87.4844 6.88021 87.0312 6.35938C86.5781 5.83333 86.3516 5.15625 86.3516 4.32812C86.3516 3.4375 86.6849 2.72917 87.3516 2.20312C88.0234 1.67708 88.9062 1.41406 90 1.41406C91.1406 1.41406 92.1901 1.6276 93.1484 2.05469L92.7031 3.28906C91.724 2.88281 90.8125 2.67969 89.9688 2.67969C89.2917 2.67969 88.7604 2.82552 88.375 3.11719C87.9948 3.40885 87.8047 3.81771 87.8047 4.34375C87.8047 4.71875 87.8776 5.03125 88.0234 5.28125C88.1745 5.52604 88.4141 5.75 88.7422 5.95312C89.0755 6.15625 89.5964 6.38802 90.3047 6.64844C91.1536 6.96094 91.7865 7.26562 92.2031 7.5625C92.6198 7.85417 92.9271 8.19271 93.125 8.57812C93.3229 8.95833 93.4219 9.41406 93.4219 9.94531ZM104.875 7.17969C104.875 9.0651 104.359 10.5078 103.328 11.5078C102.302 12.5026 100.828 13 98.9062 13H95.7266V1.57812H99.2422C101.018 1.57812 102.401 2.06771 103.391 3.04688C104.38 4.02083 104.875 5.39844 104.875 7.17969ZM103.359 7.22656C103.359 5.77344 103 4.67448 102.281 3.92969C101.568 3.17969 100.487 2.80469 99.0391 2.80469H97.1641V11.7656H98.7188C101.812 11.7656 103.359 10.2526 103.359 7.22656ZM113.891 6.45312C113.891 7 113.862 7.54688 113.805 8.09375C113.753 8.63542 113.656 9.15365 113.516 9.64844C113.38 10.1432 113.193 10.6068 112.953 11.0391C112.714 11.4661 112.409 11.8359 112.039 12.1484C111.669 12.4609 111.227 12.7083 110.711 12.8906C110.195 13.0677 109.591 13.1562 108.898 13.1562C108.799 13.1562 108.69 13.1536 108.57 13.1484C108.451 13.1432 108.331 13.1328 108.211 13.1172C108.091 13.1068 107.974 13.0938 107.859 13.0781C107.745 13.0625 107.643 13.0417 107.555 13.0156V11.7969C107.737 11.8646 107.943 11.9141 108.172 11.9453C108.401 11.9766 108.628 11.9922 108.852 11.9922C109.555 11.9922 110.133 11.8698 110.586 11.625C111.039 11.3802 111.398 11.0495 111.664 10.6328C111.93 10.2109 112.117 9.72135 112.227 9.16406C112.341 8.60677 112.411 8.01823 112.438 7.39844H112.336C112.232 7.58594 112.107 7.76042 111.961 7.92188C111.815 8.08333 111.643 8.22396 111.445 8.34375C111.247 8.46354 111.023 8.55729 110.773 8.625C110.523 8.69271 110.245 8.72656 109.938 8.72656C109.443 8.72656 108.995 8.65104 108.594 8.5C108.193 8.34375 107.852 8.11719 107.57 7.82031C107.289 7.52344 107.07 7.16146 106.914 6.73438C106.763 6.30208 106.688 5.8099 106.688 5.25781C106.688 4.66406 106.768 4.13021 106.93 3.65625C107.096 3.17708 107.328 2.77344 107.625 2.44531C107.927 2.11198 108.292 1.85677 108.719 1.67969C109.151 1.5026 109.633 1.41406 110.164 1.41406C110.69 1.41406 111.18 1.51562 111.633 1.71875C112.086 1.92188 112.479 2.23177 112.812 2.64844C113.146 3.0651 113.409 3.59115 113.602 4.22656C113.794 4.85677 113.891 5.59896 113.891 6.45312ZM110.18 2.61719C109.867 2.61719 109.581 2.66927 109.32 2.77344C109.065 2.8776 108.844 3.03906 108.656 3.25781C108.469 3.47656 108.323 3.7526 108.219 4.08594C108.12 4.41406 108.07 4.80469 108.07 5.25781C108.07 5.6224 108.112 5.95052 108.195 6.24219C108.284 6.52865 108.414 6.77344 108.586 6.97656C108.758 7.17969 108.971 7.33594 109.227 7.44531C109.487 7.55469 109.789 7.60938 110.133 7.60938C110.487 7.60938 110.807 7.54948 111.094 7.42969C111.38 7.30469 111.625 7.14583 111.828 6.95312C112.031 6.75521 112.188 6.53125 112.297 6.28125C112.411 6.03125 112.469 5.78125 112.469 5.53125C112.469 5.18229 112.419 4.83594 112.32 4.49219C112.227 4.14323 112.083 3.83073 111.891 3.55469C111.703 3.27344 111.466 3.04688 111.18 2.875C110.893 2.70312 110.56 2.61719 110.18 2.61719ZM120.227 13H118.852V5.86719C118.852 5.64323 118.852 5.40365 118.852 5.14844C118.857 4.89323 118.862 4.64062 118.867 4.39062C118.878 4.13542 118.885 3.89323 118.891 3.66406C118.901 3.42969 118.909 3.22396 118.914 3.04688C118.826 3.14062 118.747 3.22135 118.68 3.28906C118.612 3.35677 118.542 3.42188 118.469 3.48438C118.401 3.54688 118.328 3.61458 118.25 3.6875C118.172 3.75521 118.078 3.83594 117.969 3.92969L116.812 4.875L116.062 3.91406L119.055 1.57812H120.227V13ZM132.352 4.9375C132.352 6.10417 131.953 7 131.156 7.625C130.359 8.24479 129.237 8.55469 127.789 8.55469H126.477V13H125.039V1.57812H128.062C130.922 1.57812 132.352 2.69792 132.352 4.9375ZM126.477 7.32031H127.625C128.76 7.32031 129.583 7.13802 130.094 6.77344C130.604 6.40365 130.859 5.8125 130.859 5C130.859 4.26562 130.622 3.71615 130.148 3.35156C129.674 2.98698 128.935 2.80469 127.93 2.80469H126.477V7.32031ZM134.727 13V1.57812H136.164V11.7188H141.156V13H134.727Z'
								fill='white'
							/>
						</svg>
					</div>
				</a>
			</div>
		</div>
	)
}
