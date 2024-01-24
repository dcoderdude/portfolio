const About = () => {
    return (
        <section id="about">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 md:flex lg:gap-x-10">
                <div class="container flex flex-col items-center py-16 md:py-20 lg:flex-row mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                        <h2
                            class="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl text-white mt-10"
                        >
                            Who am I?
                        </h2>
                        <h4
                            class="pt-6 font-header text-xl font-semibold text-white sm:text-2xl lg:text-3xl"
                        >
                            I'm Daniel Hernandez, a Full Stack Developer and Veteran
                        </h4>
                        <p class="pt-6 font-body leading-relaxed text-grey-20 text-white mt-10">
                            Software engineer with a degree in Computer Science and minior in Mathamatics.
                            Over 9 years of professional software development in Web, Embedded and Desktop applications.
                            Veteran of the United States Armed Services serving in the branch of the Navy.
                        </p>
                    </div>
                    <div class="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0 mt-10">
                        <div>
                            <div class="flex items-end justify-between">
                                <h4 class="font-body font-semibold uppercase text-white">
                                    HTML & CSS
                                </h4>
                                <h3 class="font-body text-3xl font-bold text-primary text-white">85%</h3>
                            </div>
                            <div class="mt-2 h-3 w-full rounded-full bg-lila">
                                <div class="h-3 rounded-full bg-primary" ></div>
                            </div>
                        </div>
                        <div class="pt-6">
                            <div class="flex items-end justify-between">
                                <h4 class="font-body font-semibold uppercase text-white">
                                    Javascript
                                </h4>
                                <h3 class="font-body text-3xl font-bold text-primary text-white">98%</h3>
                            </div>
                            <div class="mt-2 h-3 w-full rounded-full bg-lila">
                                <div class="h-3 rounded-full bg-primary" ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;