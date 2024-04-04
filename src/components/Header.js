import { Link } from "react-router-dom";

export default function () {
    return (
        <section>
            <nav className='flex px-10 py-5 justify-evenly'>
                <ul className='flex items-center'>
                    <li className='px-10'>
                        <Link className='dark:text-white' to='/portfolio'>HOME</Link>
                    </li>
                    <li className='px-10'>
                        <Link className='dark:text-white' to='/about'>ABOUT</Link>
                    </li>
                    <li className='px-10'>
                        <Link className='dark:text-white' to='/skills'>SKILLS</Link>
                    </li>
                    <li className='px-10'>
                        <Link className='dark:text-white' to='/projects'>PROJECTS</Link>
                    </li>
                </ul>
            </nav>
        </section>
    );
}