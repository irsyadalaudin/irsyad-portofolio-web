import { useEffect } from 'react'

const Navbar = ({ darkMode, setDarkMode}) => {
	useEffect(() => {
		// SELECT ALL SECTION WITH ID
		const sections = document.querySelectorAll('section[id]')
		let currentSection = ''

		// CREATE INTERSECTION OBSERVER
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// CHECK IF SECTION IS IN VIE
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('id')

						// ONLY UPDATE IF SECTION CHANGES
						if (id !== currentSection) {
							currentSection = id
							// SET CLEAN URL BASED ON SECTION
							const newUrl = id === 'home' ? '/' : `${id}`
							// UPDATE URL WITHOUT RELOADING THE PAGE
							window.history.replaceState(null, '', newUrl)
						}
					}
				})
			},
			{
				rootMargin: '-50% 0px -50% 0px',
				threshold: 0,
			}
		)
		sections.forEach((section) => observer.observe(section))
		// CLEANUP OBSERVER WHEN COMPONENT IS UNMOUNT
		return () => sections.forEach((section) => observer.unobserve(section))
	}, [])

	return (
		<div className='bg-white dark:bg-indigo-700 text-indigo-600 dark:text-indigo-100 shadow-lg fixed top-0 left-0 right-0 z-50 '>
			<div className='max-w-7xl mx-auto px-8 py-5 flex justify-between items-center'>
				<h1 className='flex items-center'>
					{/* My Portofolio */}
					<a href='/' className='text-xl font-bold text-indigo-600 dark:text-indigo-200 hover:cursor-pointer hover:underline'>My Portofolio</a>
				</h1>

				{/* RIGHT SIDE: nav LINKS + DARK MODE TOGGLE */}
				<div className='flex items-center space-x-6'>
					<ul className='flex space-x-6 font-medium'>
						<li>
							<a href='#aboutMe' className='text-indigo-600 dark:text-indigo-100 hover:text-indigo-800 dark:hover:text-gray-300 hover:cursor-pointer hover:underline transition'>
								About Me
							</a>
						</li>
						<li>
							<a href='#experience' className='text-indigo-600 dark:text-indigo-100 hover:text-indigo-800 dark:hover:text-gray-300 hover:cursor-pointer hover:underline transition'>
								Experience
							</a>
						</li>
						<li>
							<a href='#contact' className='text-indigo-600 dark:text-indigo-100 hover:text-indigo-800 dark:hover:text-gray-300 hover:cursor-pointer hover:underline transition'>
								Contact Me
							</a>
						</li>
					</ul>
					<button onClick={() => setDarkMode(!darkMode)} className='px-4 py-2 rounde-md bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 shadow appearance-none'>
						{darkMode ? '☀️' :  '🌙 '}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar