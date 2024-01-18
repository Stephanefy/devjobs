import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useQuery } from "react-query"
import { getApplications } from "../api/applications"

interface Props {
  
}

const ApplicationTable = (props : Props) => {
    
    const { state } = useContext(AuthContext)
    const userId = state.user?.id as unknown as string


    const { isLoading, data, error } = useQuery('applications', () =>
        getApplications(userId)
    )

    
    const navigate = useNavigate();

    
    const handleNavigateToDetail = (applicationId: string) => {
        navigate(`/dashboard/applications/${applicationId}`);
    }

    

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Applications
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all applications you submitted
                    </p>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block md:min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="md:min-w-full divide-y divide-gray-300 rounded-lg">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="hidden md:inline-block w-56 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            Contract type
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Position name
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden md:inline-block w-32 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            posted at
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden md:inline-block w-32 ml-auto px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                                Seen 
                                        </th>
                                        <th
                                            scope="col"
                                            className="hidden md:inline-block ml-auto px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                                Actions 
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {!isLoading &&
                                        data.data?.map(
                                            (application: any) => (
                                                <tr key={application.id} className="w-100">
                                                    <td className="hidden md:inline whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {
                                                            application
                                                                .appliedTo
                                                                .contract
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            application
                                                                .appliedTo.apply
                                                        }
                                                    </td>
                                                    <td className="hidden md:inline-block w-32 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {new Date(
                                                            application.postedAt
                                                        ).toLocaleDateString()}
                                                    </td>
                                                    <td className="hidden w-32 md:inline-block whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Not seen
                                                    </td>
                                                    <td className="hidden md:inline-block whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <button 
                                                            className="hover:text-blue-300"
                                                            onClick={() => handleNavigateToDetail(application.id)}
                                                            >
                                                            Review your application
                                                        </button>
                                                    </td>
                                                    {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 space-x-4">
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
                                </td> */}
                                                </tr>
                                            )
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationTable
