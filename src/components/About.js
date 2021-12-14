import styles from '../../src/modules/about.module.css'
import Logo from '../../src/assets/pengu.svg'

export default function About() 
{
    return (
        <section id ="about">
            <div  className={styles.heading_container}>
                <h1>Hi, I'm Dan
                    <br/> Full Stack Web Developer
                </h1>
            </div>
            <div className={styles.links_container}>
                <a 
                    href="#contact">
                    DM contact me directly!
                </a>
                <a
                    href="#projects">
                    See my other projects!
                </a>
            </div>
            <div className={styles.portfolio_picture}>
                <img src={Logo} alt="logo"/>
            </div>
        </section>
    );
}