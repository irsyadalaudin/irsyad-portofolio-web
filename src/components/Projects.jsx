const Projects = () => {
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
        <section id='projects' className='h-100 flex items-center bg-white text-gray-800'>
            <div className='max-w-4xl mx-auto space-y-6'>
                <h1 className='pb-2 text-3xl font-bold border-b-2 border-indigo-500 inline-block'>
                    PROJECTS
                </h1>
                <div className='grid md:grid-cols-3 gap-6 mt-8'>
                    {projectList.map((project, index) => (
                        <div key={index} className='border rounded-xl py-6 px-12 shadow hover:shadow-lg transition'>
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
            {/* <h3>Here are some of the projects I have worked on:</h3>
            <div>
                <h4>MERN WAREHOUSE</h4>
                <link rel='stylesheet' href='netlify' />
                <link rel='stylesheet' href='github' />
            </div>
            <div>
                <h4>MERN RECIPE FINDER</h4>
                <link rel='stylesheet' href='netlify' />
                <link rel='stylesheet' href='github' />
            </div>
            <div>
                <h4>REACT REDUX</h4>
                <link rel='stylesheet' href='netlify' />
                <link rel='stylesheet' href='github' />
            </div>
            <div>
                <h4>REACT ROUTER</h4>
                <link rel='stylesheet' href='netlify' />
                <link rel='stylesheet' href='github' />
            </div>
            <div>
                <h4>MONGO DB</h4>
                <link rel='stylesheet' href='netlify' />
                <link rel='stylesheet' href='github' />
            </div> */}
        </section>
    )
}

export default Projects