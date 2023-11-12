import classNames from "classnames"
import useDarkTheme from "../hooks/useDarkTheme"


const SunMoonButton = () => {

    const [colorTheme, setTheme] = useDarkTheme()

    console.log("colorTheme", colorTheme)


    return (
        <button
            className="theme-toggle"
            id="theme-toggle"
            title="Toggles light & dark"
            aria-label="auto"
            onClick={() => setTheme((colorTheme: string) => colorTheme === "light" ? "dark" : "light") }
        >
            <svg
                className="sun-and-moon"
                aria-hidden="true"
                width="30"
                height="30"
                viewBox="0 0 30 30"
            >
                <circle
                    className={classNames(`sun`, {
                        'transform scale-[1.05] transition ease-in duration-300': colorTheme === "dark"
                    })}
                    cx="12"
                    cy="12"
                    r="6"
                    mask="url(#moon-mask)"
                    fill="currentColor"
                />
                <g className={classNames(`sun-beams`, {
                    'opacity-0 transition ease-in duration-300': colorTheme === "light"
                })} stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
                <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle className={classNames({
                        'transform -translate-x-[-7px] transition ease-in duration-300 delay-500': colorTheme === "dark"
                    })}cx={colorTheme === "light" ? "17" : "24" } cy="10" r="6" fill="black" />
                </mask>
            </svg>
        </button>
    )
}

export default SunMoonButton
