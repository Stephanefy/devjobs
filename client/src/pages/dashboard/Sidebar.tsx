import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { updateSidebarState } from '../../utils/updateAction'
import { useStateMachine } from 'little-state-machine'

interface Props {
    role: 'JOB_SEEKER' | 'EMPLOYER' | string
}

const Sidebar: FC<Props> = (props): JSX.Element => {
    const [fullWidth, setFullWidth] = useState<boolean>(true)
    const [scrollY, setScrollY] = useState<number>(0)
    const { state, actions } = useStateMachine({ updateSidebarState })
    const { logout } = useLogout()

    useEffect(() => {
        window.document.addEventListener('scroll', () => {
            setScrollY(window.scrollY)
        })

        return () =>
            removeEventListener('scroll', () => {
                console.log('remove')
            })
    }, [])

    useEffect(() => {
        actions.updateSidebarState(fullWidth ? 1 : 0)
    }, [fullWidth])

    return (
        <div className="w-2/12 h-screen z-50">
            <nav
                className={`min-h-screen fixed bottom-0 top-0 left-0 bg-app-violet w-[250px]${
                    fullWidth
                        ? 'transform translate-x-0 ease-in duration-75'
                        : 'transform -translate-x-2/3 ease-in duration-75'
                } pt-32 lg:pt-48`}
            >
                <ul className="flex flex-col items-center flex-1 lg:items-start gap-y-16 text-white w-full pr-4 md:pr-8">
                    {props.role === 'EMPLOYER' && (
                        <li
                            className={`
                        ${
                            fullWidth
                                ? 'w-full transform translate-x-0'
                                : 'w-32 transform translate-x-28  ease-in duration-300'
                        }
                } 
                    `}
                        >
                            <Link
                                to="job-offers"
                                className="pl-3 flex gap-x-6 cursor-pointer dark:text-white hover:text-indigo-800 hover:ease-in transition duration-150 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 group-hover:indigo-800 group-hover:stroke-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                    />
                                </svg>
                                {fullWidth && (
                                    <span className={`hidden lg:block `}>
                                        Job posts
                                    </span>
                                )}
                            </Link>
                        </li>
                    )}
                    <li
                        className={`
                        ${
                            fullWidth
                                ? 'transform translate-x-0'
                                : 'w-32 transform translate-x-28  ease-in duration-300'
                        }
                `}
                    >
                        <Link
                            to="job-offers"
                            className="pl-3 flex gap-x-6  cursor-pointer dark:text-white  hover:text-indigo-800 w-full hover:ease-in transition duration-150 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 group-hover:indigo-800 group-hover:stroke-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                            {fullWidth && (
                                <span className="hidden lg:block">
                                    Messages
                                </span>
                            )}
                        </Link>
                    </li>
                    <li
                        className={`
                        ${
                            fullWidth
                                ? 'transform translate-x-0'
                                : 'w-32 transform translate-x-28  ease-in duration-300'
                        }
                `}
                    >
                        <Link
                            to="job-offers"
                            className="pl-3 flex gap-x-6  cursor-pointer dark:text-white hover:text-indigo-800 w-full hover:ease-in transition duration-150 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 group-hover:indigo-800 group-hover:stroke-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            {fullWidth && (
                                <span className="hidden lg:block">
                                    Settings
                                </span>
                            )}
                        </Link>
                    </li>
                    <div className="lg:hidden flex flex-col space-y-8 w-full items-end">
                        <button
                            className="mb-2 text-white hover:underline"
                            onClick={logout}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                />
                            </svg>
                        </button>
                        <Link to="/dashboard/main">
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    width={100}
                                    height={100}
                                    className="self-center w-6 h-6 stroke-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </ul>
            </nav>
            {!fullWidth ? (
                <div className="hidden md:block md:fixed bottom-10 md:bottom-0 lg:left-4">
                    <button
                        type="button"
                        onClick={() => {
                            setFullWidth(!fullWidth)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                </div>
            ) : (
                <div className="hidden md:block md:fixed bottom-10 md:bottom-0 left-10 lg:left-20">
                    <button
                        type="button"
                        onClick={() => {
                            setFullWidth(!fullWidth)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}

export default Sidebar
