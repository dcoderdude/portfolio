export default function Education () {
    const edu_style = {
        display: 'flexbox',
    };

    return (
        <section id="education">
            <div style={edu_style}>
                <text>
                    <h2>
                        EDUCATION
                    </h2>
                    <table>
                        <tr>
                            <td>
                                B.S., Computer Science; California 
                                Polytechnic Pomona – Pomona, CA 2015
                            </td>
                        </tr>
                        <tr>
                            <td>
                                A.S., Computer Hardware Technology; 
                                El Camino College – Torrance, CA 2011
                            </td>
                        </tr>
                    </table>
                </text>
            </div>
        </section>
    );
}