import classNames from 'classnames'

const BurgerButton = ({ open }: any) => {
    console.log(open)

    return (
        <div
            className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md`}
        >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                    className={classNames(
                        `bg-white h-[2px] w-7`, {
                        'transform transition-all duration-300 origin-left translate-y-6 delay-100': open,
                        'transform transition-all duration-500 origin-left -translate-x-10 delay-100': open,
                    })}
                ></div>
                <div
                    className={classNames('bg-white h-[2px] w-7 rounded', {
                        'transform transition-all duration-300 translate-y-6 delay-75':open,
                        'transform transition-all duration-500 origin-left -translate-x-10 delay-100': open,
                    })}
                ></div>
                <div
                    className={classNames(`bg-white h-[2px] w-7`, {
                        'transform transition-all duration-300 origin-left translate-y-6': open,
                        'transform transition-all duration-500 origin-left -translate-x-10 delay-100': open,
                    })}
                ></div>

                <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                        !open && '-translate-x-10'
                    } ${open && 'translate-x-0'} flex ${!open && 'w-0'} ${
                        open && 'w-12'
                    }`}
                >
                    <div
                        className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                            open ? 'rotate-45' : 'rotate-0'
                        }`}
                    ></div>
                    <div
                        className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 ${
                            open ? '-rotate-45' : '-rotate-0'
                        }`}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default BurgerButton
