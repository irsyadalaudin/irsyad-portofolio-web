const AboutMe = () => {
    const experienceList = [
        {
            year: '2025 - Present',
            role: 'Procruetment Staff',
            place: 'Food Additive Distribution Company, Surabaya',
            description: 'Handled procurement and sourcing for food-grade additives, coordinating with suppliers and internal teams in a reseller and distribution business model.'
        },
        {
            year: '2023 - 2024',
            role: 'Kitchen Staff',
            place: 'Heba Resto, Cairo, Egypt',
            description: 'Worked part time in a busy restaurnat environment, managing food preparation, customer service, and coordination with the kitchen team. Maintained high hyguene and service standarts under pressure'
        },
        {
            year: '2022',
            role: 'Scratch Programming Instructor',
            place: 'Sekolah Indonesia Cairo, Egypt',
            description: 'Taught basic extracurricular programming concept using Scratch to elementary students. Created lesson plans, guided interactive sessions, and inspired students to explore coding in a fun and structured way',
        },
        {
            year: '2019-2020',
            role: 'Community Teacher',
            place: 'Islamic Boarding School, Batu, Malang',
            description: 'Volunteered as teacher, delivering religious and general education classes to students. Developed learning materials and mentored students academycally and personally'
        }
    ]

    return (
        <div className='py-16 px-8 text-gray-800 space-y-12'>
            <section id='aboutMe' className='text-gray-800 dark:text-indigo-100 max-w-5xl mx-auto space-y-6 scroll-mt-24'>
                <h1 className='text-3xl font-bold border-b-2 border-indigo-500 inline-block pb-2'>
                    ABOUT ME
                </h1>
                <p className='text-lg leading-relaxed'>
                    I graduated from Al-Azhar University in Cairo, majoring in Islamic Studies. Despite my non-technical background, I discovered my passion for web development and pursue it seriously. 
                </p>
                <p className='text-lg leading-relaxed'>
                    I started learning through online courses at Dicoding and completed an intensive 4-month fullstack javascript bootcamp at GOMYCODE, Cairo, Egypt. Since then, I have been building real world projects using the MERN stack and continuously improving my skills through hands-on practice and constantly sharpening my skills
                </p>
            </section>
            <section id='experience' className='text-gray-800 dark:text-indigo-100 max-w-5xl mx-auto space-y-6 scroll-mt-24'>
                <h1 className='text-3xl font-bold border-b-2 border-indigo-500 inline-block pb-2'>
                    EXPERIENCE
                </h1>
                <div className='grid gap-6'>
                    {experienceList.map((exp, index) => (
                        <div key={index} className='p-6 rounded-l bg-white dark:bg-gray-900 shadow hover:shadow-lg dark:shadow-gray-950 transition duration-200 border-l-4 border-indigo-600'>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>{exp.year}</p>
                            <h2 className='text-xl font-semibold'>{exp.role}</h2>
                            <p className='italic text-gray-600 dark:text-gray-100'>{exp.place}</p>
                            <p className='mt-2 text-gray-700 dark:text-gray-300'>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AboutMe