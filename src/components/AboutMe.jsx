const AboutMe = () => {
    return (
        <section id='aboutMe' className='h-100 px-8 flex items-center text-gray-800'>
            <div className='max-w-4xl mx-auto space-y-6'>
                <h1 className='text-3xl font-bold border-b-2 border-indigo-500 inline-block pb-2'>
                    ABOUT ME
                </h1>
                <p className='text-lg leading-relaxed'>
                    I graduated from Al-Azhar University in Cairo, majoring in Islamic Studies. Despite my non-technical background, I discovered my passion for web development and pursue it seriously. 
                </p>
                <p className='text-lg leading-relaxed'>
                    I started learning through online courses at Dicoding and completed an intensive 5-month fullstack javascript bootcamp at GOMYCODE Egypt. Since then, I have been building real world projects using the MERN stack and continuously improving my skills through hands-on practice and constantly sharpening my skills
                </p>
            </div>
        </section>
    )
}

export default AboutMe