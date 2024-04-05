import { Link } from "react-router-dom";

export default function () {
    const cv = 'CV.pdf';
    
    return (
        <section>
            <nav className='flex py-5 justify-center'>
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