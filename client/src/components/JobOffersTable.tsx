import { useEffect, useState } from 'react'
import { FC, Dispatch, SetStateAction } from 'react'
import { JobPost } from '../types/global'
import toast, { Toaster } from 'react-hot-toast';
import classNames from 'classnames';
import TableHeader from './table/TableHeader';
import Table from './table/Table';


interface Props {
    jobPosts: Array<JobPost>
    setOpenModal: Dispatch<SetStateAction<boolean>>
    setPostedJob: Dispatch<SetStateAction<JobPost[]>>
    handleOpenUpdateForm: (jobId: string) => void
}

const headerData = ["Company", "Position", "Posted at", "edit"]

const JobOffersTable: FC<Props> = (props): JSX.Element => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    
    
    const notify = () => toast("job offer deleted with success", {
        icon: '✅'
    })
    
    const deleteJobPost = async (id: string) => {
        setIsLoading(true)
        const response = await fetch(`/api/jobPost/${id}`, { 
            method: "DELETE",
            credentials: 'include' })
        .then((res) => {

            if (res.ok) {

                const updatedJobPosts = props.jobPosts.filter((jobPost) => jobPost.id !== id)

                props.setPostedJob(updatedJobPosts)
                
                setIsLoading(false)
                notify()

            }
        })
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Job Offers
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all job offers you posted
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        type="button"
                        onClick={() => props.setOpenModal(true)}
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Job offer
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block md:min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <Table headerData={headerData}/>
                            {/* <table className="md:min-w-full divide-y divide-gray-300 rounded-lg"> */}
                                {/* <TableHeader headerData={[]}/>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {props.jobPosts.map((jobPost) => (
                                        <tr key={jobPost.id}>
                                            <td className="hidden md:inline whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {jobPost.contract}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {jobPost.position}
                                            </td>
                                            <td className="hidden md:inline-block whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {new Date(jobPost.postedAt).toLocaleDateString()}
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 space-x-4">
                                                <button
                                                    onClick={() => props.handleOpenUpdateForm(jobPost.id)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                    <span className="sr-only">
                                                        , {jobPost.website}
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() => deleteJobPost(jobPost.id)}
                                                    className="text-red-500 hover:text-indigo-900"
                                                >
                                                    Delete
                                                    <span className="sr-only">
                                                        , {jobPost.website}
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody> */}
                            {/* </table> */}
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
             toastOptions={{
                success: {
                  style: {
                    background: 'green',
                  },
                },
                error: {
                  style: {
                    background: 'red',
                  },
                },
              }}
            
            />
        </div>
    )
}

export default JobOffersTable
