import './App.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import devicon from '../src/images/decoderdude.png';
import web from '../src/images/icon-web.svg';
import desktop from '../src/images/icon-desktop.svg';
import embedded from '../src/images/icon-embedded.svg';
import ehr from '../src/images/ehr.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
    const linkedinProfileUrl = 'https://www.linkedin.com/in/dan-e-hernandez/';
    const githubProfileUrl = 'https://github.com/dcoderdude';
    const pdfUrl = 'DanHernandez.pdf'
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
                <section className='min-h-screen'>
                    <nav className='flex py-10 mb-12 justify-between'>
                        <h1 className='text-xl font-burtons dark:text-white'>dcoderdude</h1>
                        <ul className='flex items-center'>
                            <li>
                                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' />
                            </li>
                            <li>
                                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                                    href={pdfUrl}
                                    download='Hernandez-Dan.pdf'>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='text-center p-10'>
                        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>Dan Hernandez</h2>
                        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full Stack Developer</h3>
                        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                            Freelancer providing services for programming content needs.
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

                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white'>About Me</h3>
                        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
                            Since the beginning of my journey as a developer,
                            I've done both onsite and remote work for healthcare, government and aerospace agencies.
                            I have collaborated with talented people to create digital products for both business and consumer use.
                        </p>
                    </div>
                </section>

                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
                        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
                            I offer from a wide range of services, including design, programming and teaching.
                        </p>
                    </div>
                    <div className='lg:flex gap-10'>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                            <img src={web} width={100} height={100} alt="web" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>
                                Web Development
                            </h3>
                            <p className='py-2'>
                                Creating elegent web applications suited for your needs following core design theory.
                            </p>
                            <h4 className='py-4'>Web development tools I use</h4>
                            <p className='text-gray-800 py-1'>React</p>
                            <p className='text-gray-800 py-1'>Tailwind</p>
                        </div>
                        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                            <img src={desktop} width={100} height={100} alt="web" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>
                                Desktop Development
                            </h3>
                            <p className='py-2'>
                                Creating simple easy to use desktop applications suited for your needs following core design theory.
                            </p>
                            <h4 className='py-4'>Desktop development tools I use</h4>
                            <p className='text-gray-800 py-1'>Windows Presentation Foundation(WPF)</p>
                            <p className='text-gray-800 py-1'>WinForm</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white'>Checkout my portfolio</h3>
                        <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
                            Projects I have worked on in the past
                        </p>
                    </div>
                    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                        <div className='basis-1/3 flex-1'>
                            <img src={ehr} className='rounded-lg object-cover' width={'100%'} height={'100%'} alt="EHR" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;