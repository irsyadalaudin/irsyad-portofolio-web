import './App.css'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Home from './pages/Home'

const App = () => {
	return (
		<>
			<Home />
			<TechStack />
			<AboutMe />
		</>
	)
}

export default App