const Contact = () => {
    return (
        <section id='contact' className='py-16 text-gray-800 max-w-5xl mx-auto space-y-6'>
            <div className='max-w-5xl mx-auto space-y-6'>
                <h1 className='text-3xl font-bold border-b-2 border-indigo-500 inline-block pb-2'>CONTACT ME</h1>
                <h3 className='text-xl'>Feel free to reach out via email or connect with me on social platforms:</h3>
                <ul className='space-y-2 text-lg'>
                    <li>Email: 
                        <a href='irsyadalaudin333@gmail.com' className='text-indigo-600 pl-12'>irsyadalaudin333@gmail.com</a>
                    </li>
                    <li>Instagram: 
                        <a href='irsyadaldhr' className='text-indigo-600 pl-2'>irsyadaldhr</a>
                    </li>
                    <li>Jobstreet: 
                        <a href='jobstreet' className='text-indigo-600 pl-4'>jobstreet</a>
                    </li>
                    <li>Glints: 
                        <a href='glints' className='text-indigo-600 pl-12'>glints</a>
                    </li>
                    <li>Github: 
                        <a href='github' className='text-indigo-600 pl-8'>github</a>
                    </li>
                    <li>Gitlab: 
                        <a href='gitlab' className='text-indigo-600 pl-10'>gitlab</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact