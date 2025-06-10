import { useEffect, useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TechOverview from './components/TechOverview'
import Home from './pages/Home'

const App = () => {
	// CHECK localStorage ON FIRST LOAD
	// IF 'darkMode' IS SAVED AS 'true', ENABLE DARK MODE BY DEFAULT
	const [darkMode, setDarkMode] = useState(() => {
		const saved = localStorage.getItem('darkMode')
		return saved === 'true'
	})

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode)
		if (darkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkMode])

	return (
		<div className='bg-white dark:bg-gray-900'>
			<nav>
				<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			</nav>
			<header>
				<Home />
			</header>
			<main>
				<TechOverview />
				<AboutMe />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default App