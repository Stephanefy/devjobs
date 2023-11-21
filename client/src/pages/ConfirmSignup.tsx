import { useStateMachine } from 'little-state-machine'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSignUp } from '../hooks/useSignUp'
import Button from '../components/Button'

const ConfirmSignup = () => {
    const { state } = useStateMachine()
    const { handleSubmit } = useForm()
    const navigate = useNavigate()
    const { signup, isSuccess } = useSignUp()

    const onSubmit = handleSubmit(async (_) => {
        console.log(
            'derr',
            state.data.email,
            state.data.password,
            state.data.role
        )

        await signup(state.data.email, state.data.password, state.data.role)
    })

    return (
        <div className="h-screen w-7/12 mx-auto flex justify-center items-center py-8 px-4 lg:px-8">
            {/* Employer */}
            <form
                onSubmit={onSubmit}
                className="flex-col items-center w-6/12 mx-6 rounded-lg p-6 md:p-12 bg-app-very-black-blue dark:bg-app-light-grey"
            >
                <h2 className="dark:text-gray-800 text-white text-center text-2xl my-3">
                    You are about to signup on our platform
                </h2>
                <p className="dark:text-gray-800 text-white">
                    Please confirm these information are correct
                </p>
                <div className='mt-6'>
                    <p className="dark:text-gray-800 text-white">
                        <span className="mr-2">your email address:</span>{' '}
                        {state.data?.email}
                    </p>
                    <p className="dark:text-gray-800 text-white">
                        <span className="mr-2">your role:</span>{' '}
                        {state.data?.role}
                    </p>
                </div>
                <div className="mt-10 w-full flex justify-center gap-x-10">
                    <Button
                        onClick={() => navigate('/signup')}
                        text1="Cancel"
                        background="bg-red-600"
                        textColor='text-white'
                        paddingX="px-3"
                        paddingY="py-3"
                    />
                    <Button
                        text1="Confirm"
                        background="bg-app-violet"
                        textColor='text-white'
                        paddingX="px-3"
                        paddingY="py-3"
                        buttonType="submit"
                    />
                </div>
                {isSuccess ? (
                    <div className="w-full flex justify-center">
                        <p className="text-green-600">
                            You succesfully signed up !
                        </p>
                    </div>
                ) : null}
            </form>

            {/* Jobseeker */}
        </div>
    )
}

export default ConfirmSignup
