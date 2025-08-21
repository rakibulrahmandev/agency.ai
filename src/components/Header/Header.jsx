import { useState } from 'react'
import assets from '../../assets/assets'
import ThemeButton from '../ThemeTogglerButton/ThemeButton'

export default function Header({theme, setTheme}) {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div className="w-full flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
                <div className="w-auto">
                    <img src={theme === 'dark' ? assets?.logo_dark : assets?.logo} alt="logo" className='w-32 sm:w-40' />
                </div>
                <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all overflow-hidden`}>
                    <div className='w-auto cursor-pointer'>
                        <img src={assets?.close_icon} alt="close icon" className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSidebarOpen(false)}/>
                    </div>
                    <a onClick={() => setSidebarOpen(false)} href="#" className='border-gray-700/70 sm:hover:border-b dark:border-white'>Home</a>
                    <a onClick={() => setSidebarOpen(false)} href="#services" className='border-gray-700/70 sm:hover:border-b dark:border-white'>Services</a>
                    <a onClick={() => setSidebarOpen(false)} href="#our-work" className='border-gray-700/70 sm:hover:border-b dark:border-white'>Our Work</a>
                    <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='border-gray-700/70 sm:hover:border-b dark:border-white'>Contact Us</a>
                </div>
                <div className='flex items-center gap-3 sm:gap-3'>
                    <ThemeButton theme={theme} setTheme={setTheme} />
                    <div className='w-auto cursor-pointer'>
                        <img src={theme === 'dark' ? assets?.menu_icon_dark : assets?.menu_icon} alt="menu icon" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden' />
                    </div>
                    <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer'>
                        Connect <img src={assets?.arrow_icon} width={14} alt="arrow icon" />
                    </a>
                </div>
            </div>
        </>
    )
}