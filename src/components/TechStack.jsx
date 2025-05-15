import { FaDatabase, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const TechStack = () => {
    return (
        <section id='techStack' className='h-100 flex items-center px-8 bg-gray-50 text-gray-800'>
            <div className='max-w-4xl mx-auto space-y-6'>
                <h1 className='pb-2 text-3xl font-bold border-b-2 border-indigo-500 inline-block'>
                    MY TECH STACK
                </h1>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-center'>
                {/* <div className='flex flex-wrap justify-center gap-6 mt-8 text-center'> */}
                    <div className='py-4 px-6 bg-white shadow rounded-xl'>
                        {/* <p className='text-4xl font-bold text-yellow-400 mx-auto'>JS</p> */}
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
                {/* <h3>My main stack is the MERN stack:</h3>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>
                <br />
                <h3>I also have experience with:</h3>
                <ul>
                    <li>Redux</li>
                    <li>React Router</li>
                    <li>Mongoose</li>
                    <li>REST API</li>
                    <li>Vite</li>
                    <li>Git & Github</li>
                </ul> */}
            </div>
        </section>
    )
}

export default TechStack