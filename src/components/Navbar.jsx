const Navbar = () => {
	return (
		<div className='bg-white shadow-lg fixed top-0 left-0 right-0 z-50'>
			<div className='max-w-7xl mx-auto px-8 py-5 flex justify-between items-center'>
				<h1 className='text-xl font-bold text-indigo-600'>My Portofolio</h1>
				<ul className='flex space-x-6 text-gray-700 font-medium'>
					<li>
						<a href='#aboutMe' className='hover:text-indigo-600 transition'>About Me</a>
					</li>
					<li>
						<a href='#experience' className='hover:text-indigo-600 transition'>Experience</a>
					</li>
					<li>
						<a href='#contact' className='hover:text-indigo-600 transition'>Contact Me</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar