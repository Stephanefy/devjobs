import { useState, Dispatch, FormEvent } from 'react'

type ModalProps = {
    setOpenModal: Dispatch<React.SetStateAction<boolean>>
    filterByLocation: Function
    filterByContract: Function
    filterByAll: Function
}

function Modal({
    setOpenModal,
    filterByContract,
    filterByLocation,
    filterByAll,
}: ModalProps) {
    const [isFullTimeChecked, setIsFullTimeChecked] = useState<boolean>(false)
    const [location, setLocation] = useState<string>('')

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        console.log(isFullTimeChecked)

        if (location.trim().length > 0) {
            filterByLocation(location)
        }

        if (isFullTimeChecked) {
            filterByContract()
        }

        if (location.trim().length > 0 && isFullTimeChecked) {
            filterByAll(isFullTimeChecked, location)
        }


        setOpenModal(false)
    }

    return (
        <>
            <div
                className="absolute flex justify-center items-start top-0 left-0 w-screen h-screen bg-black opacity-50 -z-5"
                onClick={() => setOpenModal(false)}
            />
            <form 
                onSubmit={handleSearch}
                className="bg-white dark:bg-app-very-black-blue opacity-100 w-5/6 h-72 fixed top-1/3 left-1/2 tansform -translate-x-1/2 z-50 rounded-md">
                <div className="flex items-center w-12/12 px-3 py-6 border-b border-gray-300">
                    <span className="px-2">
                        <img
                            src="/assets/desktop/icon-location.svg"
                            alt="search-icon"
                            width={24}
                            height={17}
                        />
                    </span>
                    <label htmlFor="location" className="hidden">location</label>
                    <input
                        className="p-3 dark:bg-app-very-black-blue border-none w-full"
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Filter by location..."
                    />
                </div>
                <div className="flex items-center px-6 py-6 my-4">
                    <label htmlFor="contract" className="hidden">contract</label>
                    <input
                        className="block border-none rounded-sm bg-app-light-grey dark:bg-app-dark-gray w-5 h-5"
                        type="checkbox"
                        id="contract"
                        name="contract"
                        checked={isFullTimeChecked}
                        onChange={() =>
                            setIsFullTimeChecked(!isFullTimeChecked)
                        }
                    />
                    <span className="ml-2 font-semibold dark:text-white">Full Time</span>
                    <span className="inline-block ml-1 font-semibold dark:text-white">
                        Only
                    </span>
                </div>
                <div className="mb-4">
                    <button
                        className={`block w-[90%] mx-auto px-8 py-2 bg-app-violet rounded-md text-white mt-2`}
                    >
                        <span className="text-base mr-1 font-semibold">
                            Search
                        </span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default Modal
