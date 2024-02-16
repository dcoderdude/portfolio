import './App.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import devicon from '../src/images/decoderdude.png';
import webdev from '../src/images/icon-development-black.svg'

const linkedinProfileUrl = 'https://www.linkedin.com/in/dan-e-hernandez/';
const githubProfileUrl = 'https://github.com/dcoderdude'

function App() {
    return (
        <main className='bg-white px-10'>
            <section className='min-h-screen'>
                <nav className='flex py-10 mb-12 justify-between'>
                    <h1 className='text-xl font-burtons'>dcoderdude</h1>
                    <ul className='flex items-center'>
                        <li>
                            <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                        </li>
                        <li>
                            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                                href='#' >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='text-center p-10'>
                    <h2 className='text-5xl py-2 text-teal-600 font-medium'>Dan Hernandez</h2>
                    <h3 className='text-2xl py-2'>Full Stack Developer</h3>
                    <p className='text-md py-5 leading-8 text-gray-800'>
                        Freelancer providing services for programming and design content needs.
                    </p>
                </div>
                <p className='text-center text-2xl py-2'>Follow Me</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin />
                    </a>
                    <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                </div>
                <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
                    <img src={devicon} alt="decoderdude" />
                </div>
            </section>

            <section>
                <div>
                    <h3 className='text-3xl py-1'>Services I offer</h3>
                    <p className='text-md py-2 leading-8 text-gray-80'>
                        Since the beginning of my journey as a developer,
                        I've done both onsite and remote work for healthcare, government and aerospace agencies.
                        I have collaborated with talented people to create digital products for both business and consumer use.
                    </p>
                    <p className='text-md py-2 leading-8 text-gray-800'>
                        I offer from a wide range of services, including web development, embedded solutions and desktop applications.
                    </p>
                </div>
                <div>
                    <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                        <img src={webdev} width={100} height={100} alt="web" />
                        <h3 className='text-lg font-medium pt-8 pb-2'>
                            Web Development
                        </h3>
                        <p className='py-2'>
                            Creating elegent web applications suited for your needs following core design theory.
                        </p>
                        <h4 className='py-4 text-teal-600'>Web development tools I use</h4>
                        <p className='text-gray-800 py-1'>React</p>
                        <p className='text-gray-800 py-1'>etc...</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;