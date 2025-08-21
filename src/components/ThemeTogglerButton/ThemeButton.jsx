import assets from "../../assets/assets";

export default function ThemeButton({theme, setTheme}) {
    return (
        <>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme('light')} src={assets?.sun_icon} alt="sun icon" className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer" />
                ) : (
                    <img onClick={() => setTheme('dark')} src={assets?.moon_icon} alt="moon icon" className="size-8.5 p-1.5 border border-gray-500 rounded-full cursor-pointer" />
                )}
            </button>
        </>
    )
}