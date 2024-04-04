import BannerHeader from "./BannerHeader";

export default function About() {
    return (
        <section className='min-h-screen'>
            <BannerHeader />
            <div>
                <h3 className='text-3xl py-1 dark:text-white'>About Me</h3>
                <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
                    Since the beginning of my journey as a developer,
                    I've done both onsite and remote work for healthcare, government and aerospace agencies.
                    I have collaborated with talented people to create digital products for both business and consumer use.
                </p>
            </div>
        </section>
    );
}