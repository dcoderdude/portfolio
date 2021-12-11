import styles from '../../src/modules/about.module.css'

export default function About() 
{
    return (
        <section id ="about">
            <div className={styles.outer_container}>
                <div className={styles.inner_container}>
                    <h1 className={styles.header}>Hi, I'm Dan
                        <br/> Full Stack Web Developer
                    </h1>
                    <div className={styles.contact_info}>
                        <a href="#contact">
                            Quick Response
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}