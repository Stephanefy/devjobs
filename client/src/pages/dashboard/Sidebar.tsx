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

    console.log('state ', state)

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
        <div className="h-screen z-50">
            <nav
                className={`min-h-screen fixed bottom-0 top-0 bg-app-violet w-[130px] left-[60px] ${
                    state.sidebarState?.status === 1
                        ? 'transform translate-x-0 ease-in duration-75'
                        : 'transform -translate-x-full ease-in duration-75'
                } pt-32 lg:pt-48`}
            >
                <ul className="relative flex flex-col items-center flex-1 lg:items-start gap-y-16 text-white w-full pr-4 md:pr-8">
                    {props.role === 'EMPLOYER' && (
                        <li
                            className={`
                        ${
                            state.sidebarState?.status === 1
                                ? 'w-full transform translate-x-0'
                                : 'w-24 transform translate-x-28  ease-in duration-300'
                        }
                } 
                    `}
                        >
                            <Link
                                to="job-offers"
                                className="pl-3 flex gap-x-6 cursor-pointer dark:text-white hover:text-indigo-800 hover:ease-in transition duration-150 group"
                            >
                                {state.sidebarState?.status === 1 && (
                                    <span className={`hidden lg:block `}>
                                        Job posts
                                    </span>
                                )}
                            </Link>
                        </li>
                    )}
                    {props.role === 'JOB_SEEKER' && (
                        <li
                            className={`
                        ${
                            state.sidebarState?.status === 1
                                ? 'w-full transform translate-x-0'
                                : 'w-24 transform translate-x-28  ease-in duration-300'
                        }
                } 
                    `}
                        >
                            <Link
                                to="applications/listing"
                                className="pl-3 flex gap-x-6 cursor-pointer dark:text-white hover:text-indigo-800 hover:ease-in transition duration-150 group"
                            >
                                {state.sidebarState?.status === 1 && (
                                    <span className={`hidden lg:block `}>
                                        Applications
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
                                : 'w-32 transform translate-x-28 ease-in duration-300'
                        }
                `}
                    >
                        
                            {state.sidebarState?.status === 1 && props.role === 'EMPLOYER' ? (
                                <Link
                                to="job-offers"
                                className="pl-3 flex gap-x-6 cursor-pointer dark:text-white  hover:text-indigo-800 w-full hover:ease-in transition duration-150 group"
                            >
                                {state.sidebarState?.status === 1 && props.role === 'EMPLOYER' && (
                                    <span className="hidden lg:block">
                                        Messages
                                    </span>
                                )}
                            </Link>
                            ) : (
                                <Link
                                to="messages"
                                className="pl-3 flex gap-x-6 cursor-pointer dark:text-white  hover:text-indigo-800 w-full hover:ease-in transition duration-150 group"
                            >
                                {state.sidebarState?.status === 1 && props.role === 'JOB_SEEKER' && (
                                    <span className="hidden lg:block">
                                        Messages
                                    </span>
                                )}
                            </Link>
                            )
                        }
                     
                    </li>
                    <li
                        className={`
                        ${
                            state.sidebarState?.status === 1
                                ? 'transform translate-x-0'
                                : 'w-32 transform translate-x-28  ease-in duration-300'
                        }
                `}
                    >
                        <Link
                            to="job-offers"
                            className="pl-3 flex gap-x-6  cursor-pointer dark:text-white hover:text-indigo-800 w-full hover:ease-in transition duration-150 group"
                        >
                            {state.sidebarState?.status === 1 && (
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
                        ></button>
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
            {state.sidebarState?.status === 1 && (
                <div className="hidden md:block md:fixed bottom- md:bottom-0 left-10 lg:left-16 z-[99]">
                    <button
                        type="button"
                        onClick={() => {
                            actions.updateSidebarState(0)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 -15 40 40"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-30 h-12 text-white"
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
