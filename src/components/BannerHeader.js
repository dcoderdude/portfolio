import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BannerHeader({ darkMode: darkModeState, updateDarkModeState }) {
    const cv = 'CV.pdf';
    const handleChange = () => {
        const newValue = darkModeState === 'dark' ? 'light' : 'dark';
        updateDarkModeState(newValue);
    }

    return (
        <section>
            <div className='flex py-10 mb-12 justify-between'>
                <nav className='flex py-5 justify-center'>
                    <ul className='flex items-center'>
                    <li className='px-2'>
                        <BsFillMoonStarsFill onClick={handleChange} className='cursor-pointer text-2xl dark:text-white' />
                    </li>
                        <li className=' px-2'>
                            <Link className='dark:text-white' to='/portfolio'>HOME</Link>
                        </li>
                        <li className=' px-2'>
                            <Link className='dark:text-white' to='/about'>ABOUT</Link>
                        </li>
                        <li className=' px-2'>
                            <Link className='dark:text-white' to='/skills'>SKILLS</Link>
                        </li>
                        <li className=' px-2'>
                            <Link className='dark:text-white' to='/projects'>PROJECTS</Link>
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
            </div>
        </section>
    );
}