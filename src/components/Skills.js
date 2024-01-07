export default function Skills() {
    const sk_style = {
        display: 'flexbox',
    };

    return (
        <section id="skills">
            <div style={sk_style}>
                <text>
                    <h2>
                        SKILLS
                    </h2>
                    <table>
                        <tr>
                            <td>Languages:</td>
                            <td>
                                C#, C++, Java, JavaScript, 
                                SQL, MySQL, React, HTML, CSS
                            </td>
                        </tr>
                        <tr>
                            <td>Frameworks:</td>
                            <td>
                                .NET Framework, .NET Core, 
                                .NET, ASP.NET, WPF, WinForms
                            </td>
                        </tr>
                        <tr>
                            <td>
                                OS Platforms:
                            </td>
                            <td>
                                Windows, Linux
                            </td>
                        </tr>
                        <tr>
                            <td>Source Code:</td>
                            <td>Git, SVN</td>
                        </tr>
                        <tr>
                            <td>
                                DevOps:
                            </td>
                            <td>
                                GitLab CI/CD, Jenkins
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shells/Tools:
                            </td>
                            <td>
                                Vim, Bash
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Testing:
                            </td>
                            <td>
                                NUnit, Jest, Selenium
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Project Mgt:
                            </td>
                            <td>
                                Azure Boards, 
                                Atlassian (JIRA, Bitbucket, Confluence)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Soft Skills:
                            </td>
                            <td>
                                Remote Pair Programming, 
                                Test-Driven Development, Agile, Scrum
                            </td>
                        </tr>
                    </table>
                </text>
            </div>
        </section>
    );
}