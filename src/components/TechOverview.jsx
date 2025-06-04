import { FaDatabase, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const TechOverview = () => {
        const projectList = [
        {
            image: 'image',
            title: 'MERN Ayo Masak',
            netlify: 'https://ayo-masak.netlify.app/',
            github: 'https://github.com/irsyadalaudin/MERN-warehouse'
        },
        {
            image: 'image',
            title: 'MERN Warehouse',
            netlify: 'https://mern-warehouse.netlify.app/',
            github: 'https://github.com/irsyadalaudin/MERN-warehouse'
        },
        {
            image: 'image',
            title: 'MERN Redux',
            netlify: 'https://mern-redux.netlify.app/',
            github: 'https://github.com/irsyadalaudin/MERN-warehouse'
        },
    ]

    return (
        <div className='h-screen px-8 flex flex-col justify-center space-y-12'>
            <section id='techStack' className='text-gray-800 dark:text-indigo-100 max-w-5xl mx-auto space-y-6 scroll-mt-28'>
                <h1 className='pb-2 text-3xl font-bold border-b-2 border-indigo-500 inline-block'>
                    MY TECH OVERVIEW
                </h1>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-center'>
                    <div className='py-4 px-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950'>
                        <SiJavascript className='text-4xl text-yellow-400 mx-auto' />
                        <p className='mt-2 font-semibold text-gray-800 dark:text-white'>Javascript</p>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950'>
                        <FaReact className='text-4xl text-blue-500 mx-auto' />
                        <p className='mt-2 font-semibold text-gray-800 dark:text-white'>React.js</p>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950'>
                        <FaNodeJs className='text-4xl text-green-600 mx-auto' />
                        <p className='mt-2 font-semibold text-gray-800 dark:text-white'>Node.js</p>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950'>
                        <FaDatabase className='text-4xl text-yellow-600 mx-auto' />
                        <p className='mt-2 font-semibold text-gray-800 dark:text-white'>MongoDB</p>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950'>
                        <FaGitAlt className='text-4xl text-orange-600 mx-auto' />
                        <p className='mt-2 font-semibold text-gray-800 dark:text-white'>Git & GitHub</p>
                    </div>
                    <div className='py-4 px-6 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950'>
                        <p className='text-2xl font-bold text-gray-800 dark:text-white'>+</p>
                        <p className='mt-2 font-semibolds break-words text-gray-800 dark:text-white'>Express.js, REST API, Redux, React Router</p>
                    </div>
                </div>
            </section>
            <section id='projects' className='text-gray-800 dark:text-indigo-100 max-w-5xl mx-auto space-y-6'>
                    <h1 className='pb-2 text-3xl font-bold border-b-2 border-indigo-500 inline-block'>
                        PROJECTS
                    </h1>
                    <div className='grid md:grid-cols-3 gap-6 mt-8'>
                        {projectList.map((project, index) => (
                            <div key={index} className='py-6 px-16 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950 transition'>
                                <img src={project.image} alt='image' className='border-indigo-500' />
                                <h3 className='text-xl font-semibold px-2 mb-2'>{project.title}</h3>
                                <div className='flex gap-4'>
                                    <a href={project.netlify} target='_blank' rel='noreferrer' className=' text-indigo-600 dark:text-indigo-400 hover:underline'>
                                        Live Demo
                                    </a>
                                    <a href={project.github} target='_blank' rel='noreferrer' className='text-gray-600 dark:text-indigo-300 hover:underline'>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
            </section>
        </div>
    )
}

export default TechOverview