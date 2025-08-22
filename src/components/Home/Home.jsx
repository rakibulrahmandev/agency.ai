import assets from '../../assets/assets'

export default function Home() {
    return (
        <>
            <div id="home" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white dark:bg-gray-900/70">
                <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                    <img src={assets?.group_profile} alt="group profiles" className='w-20' />
                    <p className='text-xs font-medium'>Trusted by 10k+ people</p>
                </div>
            </div>
        </>
    )
}