import React, { Dispatch, SetStateAction, useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast'
import axios from 'axios'

type Props = {}

type FormValues = {
    message: string
}

interface JobApplicationFormProps {
    jobData?: any
}
const MessageFormPage = ({ jobData }: JobApplicationFormProps) => {
    const { state } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm<FormValues>()

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
            toast.success('Application submitted successfully')
            setOpen(true)
            console.log('response', response)
        },
        onError: (error) => {
            console.log(error)
        },
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const { message } = data

        const userId = state.user?.id as unknown as string

        console.log('from form data', data)

        const formData = new FormData()

        formData.append('content', message)
        formData.append('sender', userId)
        formData.append('receiver', jobData.postedBy)

        mutation.mutate(formData)
    }
    return (
        <main className="w-full flex-col flex justify-center items-center">
            <h2 className="text-2xl font-semibold">Message Form</h2>
            <p className="text-left w-6/12 py-4">
                If you are interested in this job and need some more information
                about the offer, send a message to the employer.
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
                className="bg-white mx-auto my-2 w-6/12 rounded-lg p-8 md:px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="message"
                    >
                        Message content
                    </label>
                    <textarea
                        {...register('message', { required: 'Required' })}
                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                        id="message"
                        cols={8}
                        rows={5}
                    />
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="flex items-center justify-between mt-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send the message
                    </button>
                </div>
            </form>
        </main>
    )
}
function onSuccess(
    data: Response,
    variables: FormData,
    context: unknown
): void | Promise<unknown> {
    throw new Error('Function not implemented.')
}

function setOpen(arg0: boolean) {
    throw new Error('Function not implemented.')
}

export default MessageFormPage
