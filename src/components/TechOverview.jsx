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
        <div className='min h-screen flex flex-col justify-center items-center bg-gray-50'>
            <section id='techStack' className='flex items-center px-8 text-gray-800'>
                <div className='max-w-5xl mx-auto space-y-6'>
                    <h1 className='pb-2 text-3xl font-bold border-b-2 border-indigo-500 inline-block'>
                        MY TECH OVERVIEW
                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-center'>
                        <div className='py-4 px-6 bg-white shadow rounded-xl'>
                            <SiJavascript className='text-4xl text-yellow-400 mx-auto' />
                            <p className='mt-2 font-semibold'>Javascript</p>
                        </div>
                        <div className='py-4 px-6 bg-white shadow rounded-xl'>
                            <FaReact className='text-4xl text-blue-500 mx-auto' />
                            <p className='mt-2 font-semibold'>React.js</p>
                        </div>
                        <div className='py-4 px-6 bg-white shadow rounded-xl'>
                            <FaNodeJs className='text-4xl text-green-600 mx-auto' />
                            <p className='mt-2 font-semibold'>Node.js</p>
                        </div>
                        <div className='py-4 px-6 bg-white shadow rounded-xl'>
                            <FaDatabase className='text-4xl text-yellow-600 mx-auto' />
                            <p className='mt-2 font-semibold'>MongoDB</p>
                        </div>
                        <div className='py-4 px-6 bg-white shadow rounded-xl'>
                            <FaGitAlt className='text-4xl text-orange-600 mx-auto' />
                            <p className='mt-2 font-semibold'>Git & GitHub</p>
                        </div>
                        <div className='py-4 px-6 bg-white shadow rounded-xl'>
                            <p className='text-2xl font-bold'>+</p>
                            <p className='mt-2 break-words'>Express.js, REST API, Redux, React Router</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='projects' className='flex items-center px-8 text-gray-800'>
                <div className='max-w-5xl mx-auto space-y-6'>
                    <h1 className='pb-2 text-3xl font-bold border-b-2 border-indigo-500 inline-block'>
                        PROJECTS
                    </h1>
                    <div className='grid md:grid-cols-3 gap-6 mt-8'>
                        {projectList.map((project, index) => (
                            <div key={index} className='border rounded-xl py-6 px-16 shadow hover:shadow-lg transition'>
                                <img src={project.image} alt='image' className='border-indigo-500' />
                                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                                <div className='flex gap-4'>
                                    <a href={project.netlify} target='_blank' rel='noreferrer' className=' text-indigo-600 hover:underline'>
                                        Live Demo
                                    </a>
                                    <a href={project.github} target='_blank' rel='noreferrer' className='text-gray-600 hover:underline'>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechOverview