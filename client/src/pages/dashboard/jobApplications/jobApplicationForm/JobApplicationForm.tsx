import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
// import { Uploader, UploadButton } from 'react-uploader';

type FormValues = {
    name: string
    email: string
    phone: string
    resume: FileList
    coverLetter: string
}

// const uploader = Uploader({ apiKey: "free" });

const JobApplicationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-6/12 mx-auto shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mt-4"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="resume"
                >
                    Resume
                    <input
                        {...register('resume', { required: 'Required' })}
                        className="appearance-none flex text-gray-700 px-1 mt-2 file:py-2 w-full
                            file:border-0 justify-center
                            file:text-lg file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100"
                        id="resume"
                        type="file"
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
                    {...register('coverLetter', { required: 'Required' })}
                    className="appearance-none block  text-gray-700 px-1 mt-2 file:py-2 w-full
                    file:border-0
                    file:text-lg file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                    id="coverLetter"
                    placeholder="Cover Letter"
                />
                {errors.coverLetter && <p>{errors.coverLetter.message}</p>}
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
