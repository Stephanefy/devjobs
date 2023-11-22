import {
    Dispatch,
    FormEvent,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react'
import Button from './Button'
import { JobPost } from '../types/global'
import { JobContext } from '../context/JobContext'

type SearchBarProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    filteredByTitle: Function
    filterByLocation: Function
    filterByContract: Function
    filterByAll: Function
    setJobData: Dispatch<SetStateAction<JobPost[] | undefined>>
}

function Searchbar({
    setOpenModal,
    filteredByTitle,
    filterByLocation,
    filterByContract,
    filterByAll,
    setJobData,
}: SearchBarProps) {
    const [isFullTimeChecked, setIsFullTimeChecked] = useState<boolean>(false)
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
    const [jobTitle, setJobTitle] = useState<string>('')
    const [location, setLocation] = useState<string>('')

    const { jobsData } = useContext(JobContext)

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        console.log(isFullTimeChecked)

        if (jobTitle.trim().length > 0) {
            const titleTerms = jobTitle.split(' ')
            filteredByTitle(titleTerms)
        }

        if (location.trim().length > 0) {
            filterByLocation(location)
        }

        if (isFullTimeChecked) {
            filterByContract()
        }

        if (
            jobTitle.trim().length === 0 &&
            location.trim().length > 0 &&
            isFullTimeChecked
        ) {
            filterByAll(isFullTimeChecked, location)
        }

        if (
            jobTitle.trim().length > 0 &&
            location.trim().length > 0 &&
            isFullTimeChecked
        ) {
            filterByAll(isFullTimeChecked, location, jobTitle)
        }
    }

    // useEffect(() => {

    //     setIsAllChecked(false)

    //     if (isFullTimeChecked) {
    //         filterByContract()
    //         setJobTitle('')
    //         setLocation('')
    //     } else {
    //         setJobData(jobsData)
    //         setJobTitle('')
    //         setLocation('')
    //     }
    // }, [isFullTimeChecked])

    // useEffect(() => {
    //     setIsFullTimeChecked(false)
    // }, [isAllChecked])

    return (
        <div className="w-5/6 lg:max-w-6xl bg-white dark:bg-app-very-black-blue mx-auto rounded-lg absolute left-1/2 -translate-x-1/2 top-32">
            <form onSubmit={handleSearch} className="flex">
                <div className="h-full p-3 md:border-r-gray md:border-r-2 flex items-center w-10/12 lg:w-5/12 px-3">
                    <span className="hidden md:inline-block px-2">
                        <img
                            src="/assets/desktop/icon-search.svg"
                            alt="search-icon"
                            width={17}
                            height={24}
                        />
                    </span>
                    <label htmlFor="jobTitle" className="hidden">
                        title
                    </label>
                    <input
                        className="border-none w-full dark:bg-app-very-black-blue dark:text-white"
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Filter by title"
                    />
                </div>
                <div className="flex md:hidden items-center p-3">
                    <button
                        className="mr-3"
                        onClick={() => setOpenModal(true)}
                        type="button"
                    >
                        <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                                fill="#6E8098"
                                fillRule="nonzero"
                            />
                        </svg>
                    </button>
                    <button
                        className="bg-app-violet p-2 rounded-md"
                        type="submit"
                    >
                        <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                                fill="#fff"
                                fillRule="nonzero"
                            />
                        </svg>
                    </button>
                </div>
                <div className="md:border-r-gray md:border-r-2 hidden md:flex items-center w-4/12 px-3">
                    <span className="px-2">
                        <img
                            src="/assets/desktop/icon-location.svg"
                            alt="search-icon"
                            width={17}
                            height={24}
                        />
                    </span>
                    <label htmlFor="location" className="hidden">
                        location
                    </label>
                    <input
                        className="border-none w-full dark:bg-app-very-black-blue dark:text-white"
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="hidden md:flex items-center px-3 w-3/12">
                    <label htmlFor="isFullTime" className="hidden">
                        contract
                    </label>
                    <input
                        className="hidden md:block border-none rounded-sm bg-app-light-grey w-5 h-5 mr-4"
                        type="checkbox"
                        id="isFullTime"
                        name="isFullTime"
                        checked={isFullTimeChecked}
                        onChange={() => {
                            setIsFullTimeChecked(!isFullTimeChecked)
                            isFullTimeChecked
                                ? setJobData(jobsData)
                                : filterByContract()
                        }}
                    />
                    <span className="ml-2 font-bold dark:text-white">
                        Full Time
                    </span>
                    <span className="hidden lg:inline-block ml-1 font-bold dark:text-white">
                        Only
                    </span>
                </div>
                <div className="hidden md:flex items-center px-3 w-2/12">
                    <label htmlFor="isFullTime" className="hidden">
                        All
                    </label>
                    <button
                        onClick={() => {
                            setJobData(jobsData)
                            setLocation('')
                            setJobTitle('')
                            setIsFullTimeChecked(false)
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 10.2623L18.0123 4.25L19.75 5.98775L13.7377 12L19.75 18.0123L18.0123 19.75L12 13.7377L5.98775 19.75L4.25 18.0123L10.2623 12L4.25 5.98775L5.98775 4.25L12 10.2623Z"
                                fill="#141B34"
                            />
                        </svg>
                    </button>
                    <span className="ml-2 font-bold dark:text-white">All</span>
                </div>
                <div className="hidden md:flex md:px-3 items-center">
                    <Button
                        buttonType="submit"
                        text1="Search"
                        background="bg-app-violet"
                        paddingX="px-6"
                        paddingY="py-2"
                        textColor="text-white"
                    />
                </div>
            </form>
        </div>
    )
}

export default Searchbar
