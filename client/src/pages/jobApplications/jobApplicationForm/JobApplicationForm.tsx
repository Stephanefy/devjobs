import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
// import { Uploader, UploadButton } from 'react-uploader';
import { useMutation } from 'react-query'
import { getJob } from '../../../api/jobs'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { JobPost } from '../../../types/global'

type FormValues = {
    name: string
    email: string
    phone: string
    resume: FileList
    coverLetter: FileList
    message: string,
}

interface JobApplicationFormProps {
    jobData: any
}

// const uploader = Uploader({ apiKey: "free" });

const JobApplicationForm = ({
    jobData,
}: {
    jobData: JobApplicationFormProps
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()
    const mutation = useMutation<Response, Error, Record<keyof FormValues, string | FormData>>({
        mutationFn: (data) =>{
            return axios.post('/api/application', data , {withCredentials: true}
    )},
    
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {

    

        console.log(data.resume[0])
        const { name, email, phone, message } = data;


        const resume = new FormData();
        resume.append('resume',data.resume[0])
        const coverLetter= new FormData();
        coverLetter.append('coverLetter',data.coverLetter[0])

        mutation.mutate({ name, email, phone, resume, coverLetter, message })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
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
            <div className='mb-4'>
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
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="resume"
                    >
                        Resume
                        <input
                            {...register('resume', { required: false })}
                            className="appearance-none flex text-gray-700 px-1 mt-2 file:py-2 
                                file:border-0 justify-center
                                file:text-lg file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                focus:outline-none 
                                "
                            id="resume"
                            type="file"
                            name="resume"
                        />
                    </label>
                    {errors.resume && <p>{errors.resume.message}</p>}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="coverLetter"
                    >
                        Cover Letter
                    </label>
                    <input
                        type="file"
                        {...register('coverLetter', { required: false })}
                        className="appearance-none block  text-gray-700 px-1 mt-2 file:py-2
                        file:border-0
                        file:text-lg file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        focus:outline-none 
                        "
                        id="coverLetter"
                        placeholder="Cover Letter"
                        name="coverLetter"
                    />
                    {errors.coverLetter && <p>{errors.coverLetter.message}</p>}
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default JobApplicationForm
