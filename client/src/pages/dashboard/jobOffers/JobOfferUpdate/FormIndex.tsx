import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { JobPost, Requirements } from '../../../../types/global'

interface Props {
    selectedJobId: string
}

const FormIndex: FC<Props> = (props): JSX.Element => {
    const [formDefaultData, setFormDefaultData] = useState<JobPost | null>(null)

    // useEffect(() => {
    //     fetch(`/api//jobPost/${props.selectedJobId}`, { credentials: 'include' })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             const { data } = res
    //             setFormDefaultData(data)
    //         })
    // }, [])

    const { formState, register } = useForm({
        defaultValues: async () =>
            fetch(`/api//jobPost/${props.selectedJobId}`, {
                credentials: 'include',
            })
                .then((res) => res.json())
                .then((res) => {
                    const { data } = res
                    setFormDefaultData(data)
                    return data
                }),
    })
    console.log(formDefaultData)
    console.log(formState.defaultValues)

    return (
        <form className="px-4 sm:px-6 lg:px-4">
            <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10 bg-white px-8 pb-8 rounded-lg dark:bg-app-very-black-blue">
                <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Job information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Modify your job offer information.
                    </p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Company name
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                id="company"
                                autoComplete="given-name"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                {...register('company', { required: true })}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Logo
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                {...register('logo')}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Logo background
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register('logo')}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Position
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                id="position"
                                type="email"
                                autoComplete="email"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register('position')}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Contract
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                id="contract"
                                autoComplete="contract"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                {...register('contract')}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Location
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                id="location"
                                autoComplete="address-level2"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                {...register('location')}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="website"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Website
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                id="website"
                                autoComplete="address-level1"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                {...register('website')}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="apply"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Apply
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <input
                                type="text"
                                id="apply"
                                autoComplete="apply"
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                {...register('apply')}
                            />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Description
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                                id="description"
                                rows={3}
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                defaultValue={''}
                                {...register('description')}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10 bg-white px-8 pb-8 mt-8 rounded-lg dark:bg-app-very-black-blue">
                    <div className="space-y-6 sm:space-y-5">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                            Requirements
                        </h3>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Content
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                defaultValue={
                                    formDefaultData?.requirements?.content
                                }
                            />
                        </div>
                        {formDefaultData?.requirements?.items.map(
                            (item, index) => (
                                <>
                                    <label
                                        htmlFor="about"
                                        className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                                    >
                                        {`Item ${index + 1}`}
                                    </label>
                                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                                        <input
                                            type="text"
                                            id="apply"
                                            autoComplete="apply"
                                            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                            defaultValue={item}
                                        />
                                    </div>
                                </>
                            )
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                            Role
                        </h3>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                        >
                            Content
                        </label>
                        <div className="mt-1 sm:col-span-2 sm:mt-0">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                defaultValue={formDefaultData?.role?.content}
                            />
                        </div>
                        {formDefaultData?.role?.items.map((item, index) => (
                            <>
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium text-gray-700 dark:text-white sm:mt-px sm:pt-2"
                                >
                                    {`Item ${index + 1}`}
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                    <input
                                        type="text"
                                        id="apply"
                                        autoComplete="apply"
                                        className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                                        defaultValue={item}
                                    />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormIndex
