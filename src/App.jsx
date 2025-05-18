import './App.css'
import AboutMe from './components/AboutMe'
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
			</main>
			{/* <footer></footer> */}
		</>
	)
}

export default App