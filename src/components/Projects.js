import styles from '../../src/modules/module.css'

const projects = [
    {
        title: "Hello World!",
        description: "my app description",
        link: "localhost:3000",
    },
];

export default function Projects () {
    return(
        <section id="projects">
            <div className={styles.heading_container}>
                <h1>Apps I've Built</h1>
            </div>
            <div className={styles.projects_links}>
                {projects.map((project) => (
                    <div>
                        <a
                            href={project.link}>
                            <div className={styles.heading_container}>
                                <h1>
                                    {project.title}
                                </h1>
                                <p className={styles.paragraph}>{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}