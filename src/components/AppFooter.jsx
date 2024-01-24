import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const linkedinProfileUrl = 'https://www.linkedin.com/in/daniel-hernandez-b8829880/';
const githubProfileUrl = 'https://github.com/dcoderdude'

const AppFooter = () => {
    return (
        <section id="appfooter">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 md:flex lg:gap-x-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <h3 class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Follow Me</h3>
                        <div className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
                            </a>
                            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppFooter;