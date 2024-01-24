import author from '../images/author.jpg';

const Home = () => {
    return (
        <section id="home">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 md:flex lg:gap-x-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Hello I'm Daniel Hernandez!</h2>
                        <div className="mx-auto max-w-3xl lg:mx-0">
                            <img class="h-48 rounded-full sm:h-56"
                                src={author}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;