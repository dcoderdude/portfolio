import styles from '../../src/modules/about.module.css'
import resume from '../../src/resume.pdf';

export default function About() 
{
    return (
        <div className={styles.container}>
            <h1>
                <div>Hi, I'm Dan</div>
                <br />Full-stack & Web developer.
            </h1>
            <button>
                <a href={resume} download="DanHernandez.pdf">Download Resume</a>
            </button>
        </div>
    );
}