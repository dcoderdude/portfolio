import devicon from '../images/decoderdude.png';

export default function Home() {
    return (
        <section className='min-h-screen'>
            <div className='text-center'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>Dan Hernandez</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full Stack Developer</h3>
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                    Experienced Computer Scientist with 9+ years, offering tailored programming solutions to meet diverse content needs.
                </p>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96'>
                <img src={devicon} alt="decoderdude" />
            </div>
        </section>
    );
}