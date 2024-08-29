import { MouseEvent, useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import { updateSignUp } from '../../utils/updateAction'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import axios from 'axios'

async function checkForEmailAvailability(email: string) {
    const response = await axios.get(
        'http://localhost:8000/email-verification',
        {
            params: {
                email,
            },
        }
    )
    console.log("response",response)
    return response
}

type Props = {
    onstephandler: (e: any) => void
}

const FirstSteps = ({ onstephandler }: Props) => {
    const { actions, state } = useStateMachine({ updateSignUp })
    const [emailAvailability, setEmailAvailability] = useState<boolean>(true)

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors, isSubmitted },
    } = useForm()

    const { email } = errors

    const onSubmit = handleSubmit((data, e): void => {
        checkForEmailAvailability(getValues('email')).then((res) => {
            console.log(res.data.data.available)
            if (res.data.data.available) {
                onstephandler(e)
                actions.updateSignUp({ email: data.email })
            } else {
                setEmailAvailability(false)
            }
        })
    })

    return (
        <form id="step-1" onSubmit={onSubmit} className="p-8 bg-app-violet">
            <label htmlFor="email">
                <span className="block text-white mb-2">Email address :</span>
            </label>
            <input
                type="Email address"
                className="w-full p-2 rounded-lg"
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email',
                    },
                })}
                onChange={() => {
                    if (getValues('email').length === 0 && isSubmitted) {
                        reset()
                    }
                    setEmailAvailability(true)
                
                }}
            />
            {!emailAvailability && (
                <span className="text-orange-500 inline-block mt-3">
                    This email is already in use
                </span>
            )}
            {errors.email && (
                    <span className="text-orange-500">
                   {errors.email.message as string}
                </span>
            )}
            <button
                className="w-full mt-6 bg-app-light-grey text-dark rounded-lg p-2 font-semibold"
                type="submit"
            >
                what is your role ?
            </button>
        </form>
    )
}

export default FirstSteps
