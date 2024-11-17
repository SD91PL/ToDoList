import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Intro from './Intro.jsx'
import './index.css'

const Main = () => {
	const [showIntro, setShowIntro] = useState(true)

	return (
		<>
			{showIntro && <Intro onFinish={() => setShowIntro(false)} />}
			<App />
		</>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
)
