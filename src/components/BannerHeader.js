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
        <nav className='flex py-10 justify-center'>
            <ul className='flex py-5 items-center'>
                <li>
                    <BsFillMoonStarsFill onClick={handleChange} className='cursor-pointer text-2xl dark:text-white' />
                </li>
                <li>
                    <Link className='px-3 dark:text-white' to='/portfolio'>HOME</Link>
                </li>
                <li>
                    <Link className='px-3 dark:text-white' to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link className='px-3 dark:text-white' to='/skills'>SKILLS</Link>
                </li>
                <li>
                    <Link className='px-3 dark:text-white' to='/projects'>PROJECTS</Link>
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

        </section>
    );
}