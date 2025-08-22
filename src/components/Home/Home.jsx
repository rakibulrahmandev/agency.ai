import assets from '../../assets/assets'

export default function Home() {
    return (
        <>
            <div id="home" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white dark:bg-gray-900/70">
                <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                    <img src={assets?.group_profile} alt="group profiles" className='w-20' />
                    <p className='text-xs font-medium'>Trusted by 10k+ people</p>
                </div>
                <div className='w-auto flex flex-col items-center gap-5'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.</h1>
                    <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
                    <div className='relative'>
                        <img src={assets?.hero_img} alt="hero image" className='w-full max-w-6xl' />
                    </div>
                </div>
            </div>
        </>
    )
}