import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { updateSignUp } from '../../utils/updateAction'
import { useNavigate } from 'react-router-dom'

const ThirdStep = () => {
    const { register, handleSubmit } = useForm()
    const { actions, state } = useStateMachine({ updateSignUp })
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data, e) => {
        console.log(e)
        console.log('data', data)
        console.log(data.password)
        console.log('actions', actions)
        actions.updateSignUp({ password: data.password })
        navigate('/confirm-signup')
    })

    return (
        <form id="step-3" onSubmit={onSubmit} className="p-6 md:p-12">
            <h3 className="text-2xl text-white dark:text-gray-400">
                JobSeeker
            </h3>
            <div className='mt-4'>
                <label htmlFor="password my-3">
                    <span className="block text-gray-400">password</span>
                </label>
                <input
                    type="password"
                    className="w-full p-2 rounded-lg mt-2"
                    {...register('password', { required: true })}
                />
            </div>
            <button
                className="w-full mt-6 bg-app-violet text-white rounded-lg p-2 "
                type="submit"
            >
                Create an Job seeker account
            </button>
        </form>
    )
}

export default ThirdStep
