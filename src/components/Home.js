import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import devicon from '../images/decoderdude.png';
import BannerHeader from "./BannerHeader";

export default function Home({ darkMode: darkModeState, updateDarkModeState }) {
    const linkedinProfileUrl = 'https://www.linkedin.com/in/dan-e-hernandez/';
    const githubProfileUrl = 'https://github.com/dcoderdude';
    const cv = 'CV.pdf'

    const handleChange = () => {
        const newValue = darkModeState === 'dark' ? 'light' : 'dark';
        updateDarkModeState(newValue);
    }

    return (
        <section className='min-h-screen'>
            <nav className='flex py-10 mb-12 justify-between'>
                <BannerHeader />
                <ul className='flex items-center'>
                    <li>
                        <BsFillMoonStarsFill onClick={handleChange} className='cursor-pointer text-2xl dark:text-white' />
                    </li>
                    <li>
                        <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                            href={cv}
                            download='CV.pdf'>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>Dan Hernandez</h2>
                <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full Stack Developer</h3>
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                    Experienced Computer Scientist with 9+ years, offering tailored programming solutions to meet diverse content needs.
                </p>
            </div>
            <p className='text-center text-2xl py-2 dark:text-white'>Follow Me</p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
                <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
                <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96'>
                <img src={devicon} alt="decoderdude" />
            </div>
        </section>
    );
}