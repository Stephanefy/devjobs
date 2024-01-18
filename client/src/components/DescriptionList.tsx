import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useQuery } from 'react-query'
import { getApplication } from '../api/applications'
import niceBytes from '../utils/niceBytes'

interface Props {
    dataName: string
    dataId: string
}

const DescriptionList = ({ dataName, dataId }: Props) => {
    const { isLoading, data, error } = useQuery('data', () => {
        if (dataName === 'applications') {
            if (dataId) {
                return getApplication(dataId)
            }
        }
    })

    console.log(data)

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base leading-7 text-gray-900">
                    Your application to{' '}
                    <span className="font-semibold">
                        {data?.data.appliedTo.apply}
                    </span>
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    Personal details and application.
                </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    {!isLoading && (
                        <>
                            <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Margot Foster
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Application for
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {data.data.appliedTo.position}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {data.data.applicantEmail}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Salary expectation
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    $120,000
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    About
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {data.data.appliedTo.description}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Attachments
                                </dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <ul
                                        role="list"
                                        className="divide-y divide-gray-100 rounded-md border border-gray-200"
                                    >
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon
                                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        {data.data.coverLetter}
                                                    </span>
                                                    <span className="flex-shrink-0 text-gray-400">
                                                        {niceBytes(
                                                            data.files[1][1].size
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href={`${data.files[1][0]}`}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon
                                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">
                                                        {data.data.resume}
                                                    </span>
                                                    <span className="flex-shrink-0 text-gray-400">
                                                        {niceBytes(
                                                            data.files[0][1]
                                                                .size
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a
                                                    href={`${data.files[0][0]}`}
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </>
                    )}
                </dl>
            </div>
        </div>
    )
}

export default DescriptionList
