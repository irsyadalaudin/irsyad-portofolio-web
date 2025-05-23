import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechOverview from './components/TechOverview'
import Home from './pages/Home'

const App = () => {
	return (
		<>
			{/* <nav></nav> */}
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
		</>
	)
}

export default App