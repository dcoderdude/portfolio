import ehr from '../images/ehr.png';
import BannerHeader from './BannerHeader';

export default function Projects() {
    return (
        <section className='min-h-screen'>
            <div className='flex py-10 mb-12 justify-between'>
                <BannerHeader />
            </div>
            <div>
                <h3 className='text-3xl py-1 dark:text-white'>Checkout my portfolio</h3>
                <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
                    Projects I have worked on in the past
                </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'>
                    <img src={ehr} className='rounded-lg object-cover' width={'100%'} height={'100%'} alt="EHR" />
                </div>
            </div>
        </section>
    );
}