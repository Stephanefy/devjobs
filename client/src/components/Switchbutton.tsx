import { useState } from 'react'
import useDarkTheme from '../hooks/useDarkTheme'
import SunSvg from '/assets/desktop/icon-sun.svg'
import MoonSvg from '/assets/desktop/icon-moon.svg'

function Switchbuton() {
    const [colorTheme, setTheme] = useDarkTheme()

    console.log(colorTheme)

    const [dark, setDark] = useState(colorTheme === 'light' ? true : false)

    const toggleDarkTheme = (checked: React.InputHTMLAttributes<HTMLInputElement>) : void => {
        setDark(!checked)

        console.log(checked)

        setTheme(colorTheme)
    }

    return (
        <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={dark} onChange={(e) => {
                setTheme(colorTheme)
                setDark(!dark)
            }} />
            {/* <div className="w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-app-midnight rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-app-violet after:hover:bg-app-light-violet after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div> */}
            <span className="ml-3 absolute -left-10 text-sm font-medium text-white dark:text-gray-300">
                <img src={SunSvg} alt="sun" />
            </span>
            <span className="ml-3 text-sm font-medium text-white dark:text-gray-300">
                <img src={MoonSvg} alt="moon" />
            </span>
        </label>
    )
}

export default Switchbuton
