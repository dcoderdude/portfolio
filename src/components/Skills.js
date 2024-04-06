import web from '../images/icon-web.svg';
import desktop from '../images/icon-desktop.svg';

export default function Skills() {
    return (
        <section className='min-h-screen'>
            <div>
                <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
                <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
                    I offer from a wide range of services, including design, programming and teaching.
                </p>
            </div>
            <div className='lg:flex gap-10'>
                <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                    <img src={web} width={100} height={100} alt="web" />
                    <h3 className='text-lg font-medium pt-8 pb-2'>
                        Web Development
                    </h3>
                    <p className='py-2'>
                        Creating elegent web applications suited for your needs following core design theory. Web development tools I use:
                    </p>
                    <p className='text-gray-800 py-1'>React</p>
                    <p className='text-gray-800 py-1'>Tailwind</p>
                </div>
                <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
                    <img src={desktop} width={100} height={100} alt="web" />
                    <h3 className='text-lg font-medium pt-8 pb-2'>
                        Desktop Development
                    </h3>
                    <p className='py-2'>
                        Creating simple easy to use desktop applications suited for your needs following core design theory. Desktop development tools I use:
                    </p>
                    <p className='text-gray-800 py-1'>Windows Presentation Foundation(WPF)</p>
                    <p className='text-gray-800 py-1'>WinForm</p>
                </div>
            </div>
        </section>
    );
}