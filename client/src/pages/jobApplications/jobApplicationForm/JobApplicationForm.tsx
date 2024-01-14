import { useContext } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
// import { Uploader, UploadButton } from 'react-uploader';
import { useMutation } from 'react-query'
import axios from 'axios'
import { AuthContext } from '../../../context/AuthContext'

type FormValues = {
    name: string
    email: string
    phone: string
    resume: File & FileList
    coverLetter: File & FileList
    message: string
}

interface JobApplicationFormProps {
    jobData: any
}

// const uploader = Uploader({ apiKey: "free" });

const JobApplicationForm = ({ jobData }: JobApplicationFormProps) => {
    const { state } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        control,
        formState: { errors, touchedFields },
    } = useForm<FormValues>()

    const watchedFileInputs = watch(['resume', 'coverLetter'])

    console.log('watchFields', watchedFileInputs)

    const mutation = useMutation<Response, Error, FormData>({
        mutationFn: (data) => {
            return axios.post('/api/application', data, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        },
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const { name, email, phone, message } = data

        const userId = state.user?.id as unknown as string

        console.log('from form data', data)

        const formData = new FormData()
        formData.append('resume', data.resume)
        formData.append('coverLetter', data.coverLetter)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('message', message)
        formData.append('appliedById', userId)
        formData.append('appliedToId', jobData.id)

        mutation.mutate(formData)
    }

    console.log('jobData', jobData)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="bg-white mx-auto md:ml-20 w-[500px] md:min-w-6/12 rounded-lg p-8 md:px-8 pt-6 pb-8 mb-4"
        >
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    {...register('name', { required: 'Required' })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    {...register('email', {
                        required: 'Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                >
                    Phone Number
                </label>
                <input
                    {...register('phone', { required: 'Required' })}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                >
                    Further details
                </label>
                <textarea
                    {...register('message', { required: 'Required' })}
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    id="message"
                    cols={8}
                    rows={5}
                    placeholder="Further details"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
                <div className="mb-4 flex items-center">
                    <label
                        className="flex justify-center text-white text-sm font-bold mb-2 border-red-100 bg-app-violet w-32 px-3 py-2 rounded-md cursor-pointer hover:bg-app-light-violet mr-4"
                        htmlFor="resume"
                    >
                        Your resume
                    </label>
                    <Controller
                        control={control}
                        name="resume"
                        rules={{ required: false }}
                        render={({ field: { value, onChange, ...field } }) => {
                            return (
                                <input
                                    {...field}
                                    className="appearance-none text-sm text-slate-500 mr-8 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50
                                    text-pink-700 hover:bg-pink-100 cursor-pointer hidden
                                    "
                                    id="resume"
                                    type="file"
                                    name="resume"
                                    onChange={(e) => {
                                        if (e.target.files)
                                            onChange(e.target.files[0])
                                    }}
                                    hidden
                                />
                            )
                        }}
                    />

                    <span className='font-semibold'>
                        {!watchedFileInputs[0]?.name
                            ? 'Select a file'
                            : watchedFileInputs[0]?.name}
                    </span>
                    {errors.resume && <p>{errors.resume.message}</p>}
                </div>
                <div className="mb-4 flex items-center">
                    <label
                        className="flex justify-center text-white text-sm font-bold mb-2 border-red-100 bg-app-violet w-32 px-3 py-2 rounded-md cursor-pointer hover:bg-app-light-violet mr-4"
                        htmlFor="coverLetter"
                    >
                        Cover Letter
                    </label>
                    <Controller
                        control={control}
                        name="coverLetter"
                        rules={{ required: false }}
                        render={({ field: { value, onChange, ...field } }) => {
                            return (
                                <input
                                    type="file"
                                    id="coverLetter"
                                    placeholder="Cover Letter"
                                    name="coverLetter"
                                    onChange={(e) => {
                                        if (e.target.files)
                                            onChange(e.target.files[0])
                                    }}
                                    hidden
                                />
                            )
                        }}
                    />
                    <span className='font-semibold'>
                        {!watchedFileInputs[1]?.name
                            ? 'Select a file'
                            : watchedFileInputs[1]?.name}
                    </span>{' '}
                    {errors.coverLetter && <p>{errors.coverLetter.message}</p>}
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit the application
                </button>
            </div>
        </form>
    )
}

export default JobApplicationForm
