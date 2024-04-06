import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function BannerFooter() {
    const linkedinProfileUrl = 'https://www.linkedin.com/in/dan-e-hernandez/';
    const githubProfileUrl = 'https://github.com/dcoderdude';

    return (
        <section>
            <div className='text-center p-10'>
                <p className='text-center text-2xl py-2 dark:text-white'>Follow Me</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
                    <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin />
                    </a>
                    <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </section>
    );
}