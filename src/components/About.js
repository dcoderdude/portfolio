export default function About() {
    const abt_style = {
        display: 'flexbox',
    };

    return (
        <section id="about">
            <div style={abt_style}>
                <text>
                    <h1>
                        Software Engineer
                    </h1>
                    <h2>
                        Daniel Hernandez
                    </h2>
                    <pr>
                        Moorpark CA | 
                        daniel.hernandez.dev@gmail.com |
                        dcoderdude.github.io | 
                        linkedin.com/in/daniel-hernandez-b8829880
                    </pr>
                    <hr />
                    <pr>
                        Software developer with a degree in Computer Science 
                        with over 9 years of professional development experience 
                        in desktop, web, and embedded software solutions, 
                        seeking a remote mid-grade 
                        Software Engineer, software development position.
                    </pr>
                </text>
            </div>
        </section>
    );
}