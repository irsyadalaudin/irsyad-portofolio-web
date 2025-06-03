const Home = () => {
    return (
        <section id='home' className='h-screen px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
            <div className='md:w-2/3 space-y-6'>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight text-gray-800'>
                    Hi, I'm <span className='text-indigo-600'>Irsyad Alaudin Hariono</span>
                </h1>
                <h2 className='text-2xl text-gray-600'>
                    Fullstack JavaScript Developer (MERN)
                </h2>
                <p className='text-gray-500 text-lg leading-relaxed'>
                    A passionate Front-End & Fullstack Developer with experience in React.js, Node.js, and MongoDB. I build responsive, user-focused web apps with clean, scalable code, turning ideas into seamless web apps.
                </p>
                <div className='mt-4'>
                    <a href='#techStack' className='px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition'>
                        View Projects
                    </a>
                </div>
            </div>
            <div className='md:w-1/3'>
                <img src='/my-photo.jpg' alt='Irsyad Alaudin Hariono' className='rounded-full w-60 h-60 object-cover sadow-lg' />
            </div>
        </section>
    )
}

export default Home