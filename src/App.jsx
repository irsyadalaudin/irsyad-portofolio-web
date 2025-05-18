import './App.css'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Home from './pages/Home'

const App = () => {
	return (
		<>
			{/* <nav></nav> */}
			<header>
				<Home />
			</header>
			<main>
				<TechStack />
				<AboutMe />
			</main>
			{/* <footer></footer> */}
		</>
	)
}

export default App