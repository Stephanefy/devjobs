import { HTMLProps } from 'react'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    buttonType?: 'button' | 'submit' | 'reset' | undefined
    text1: string
    text2?: string
    extraClass?: string
    background?: string
    textColor?: string
    paddingX?: string
    paddingY?: string
    isMobile?: boolean
    width?: string
    handleNextLoad?: React.MouseEventHandler<HTMLButtonElement>
    onClick?: () => void
}

function Button({
    buttonType,
    text1,
    text2,
    background,
    textColor,
    paddingX,
    paddingY,
    isMobile,
    extraClass,
    handleNextLoad,
    width = "w-full",
    onClick,
}: ButtonProps) {
    let theme = localStorage.getItem('theme')

    console.log('currentTheme', theme)

    return (
        <button
            type={buttonType}
            className={`${width} ${background} ${paddingX} ${paddingY} rounded-md ${textColor} ${extraClass ? extraClass : ''} dark:text-white cursor-pointer hover:opacity-70 transition ease-in 300s flex items-center justify-center`}
            onClick={onClick}
        >
            <span className="inline-block text-base mr-1 font-semibold">{text1}</span>
            <span className="inline-block text-base font-semibold">{text2}</span>
        </button>
    )
}

export default Button
