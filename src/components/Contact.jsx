const Contact = () => {
    return (
        <section id='contact' className='text-gray-800 dark:text-indigo-100 py-20 px-8 mx-auto space-y-6'>
            <div className='max-w-5xl mx-auto space-y-6'>
                <h1 className='text-3xl font-bold border-b-2 border-indigo-500 inline-block pb-2'>CONTACT ME</h1>
                <h3 className='text-xl'>Feel free to reach out via email or connect with me on social platforms:</h3>
                <ul className='space-y-2 text-lg'>
                    <li>Email: 
                        <a href='irsyadalaudin333@gmail.com' className='text-indigo-600 dark:text-indigo-400 pl-13'>irsyadalaudin333@gmail.com</a>
                    </li>
                    <li>Instagram:
                        <a href='irsyadaldhr' className='text-indigo-600 dark:text-indigo-400 pl-2'>irsyadaldhr</a>
                    </li>
                    <li>Jobstreet:
                        <a href='jobstreet' className='text-indigo-600 dark:text-indigo-400 pl-5'>jobstreet</a>
                    </li>
                    <li>Glints:
                        <a href='glints' className='text-indigo-600 dark:text-indigo-400 pl-13.3'>glints</a>
                    </li>
                    <li>Github:
                        <a href='github' className='text-indigo-600 dark:text-indigo-400 pl-10'>github</a>
                    </li>
                    <li>Gitlab:
                        <a href='gitlab' className='text-indigo-600 dark:text-indigo-400 pl-12'>gitlab</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact