import Button from '../Button'
import { useStateMachine } from 'little-state-machine'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import useResetPassword from '../../hooks/useResetPassword'

//TODO for now just get the url back from forgot password request to get back the token without sending emails etc
const ResetPasswordComponent = () => {
    const { getState } = useStateMachine()
    const { state } = useContext(AuthContext)
    const { resetPassword, isSuccess, error } = useResetPassword()
    const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false)
    const navigate = useNavigate()
    const params = useParams()

    const { resetKey } = params

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        console.log(getState())
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        console.log("data from request password",data)
        const resetPasswordData =  {
            resetToken: resetKey!,
            password: data.newPassword as string,
            confirmNewPassword: data.confirmNewPassword as string
        }
        if (data.newPassword === data.confirmNewPassword) {
            try {
                const responseData = await resetPassword(resetPasswordData)

                navigate('/login', {replace: true})
            } catch (err) {
                console.log(err)
            }
        } else {
            setConfirmPasswordError(true)
        }
    })

    useEffect(() => {
        if (isSuccess && state.user!.role === 'EMPLOYER') {
            navigate('/dashboard/main')
        }
    }, [state])

    useEffect(() => {
        let timeOutId = setTimeout(() => {
            setConfirmPasswordError(false)
        }, 1500)

        return () => clearTimeout(timeOutId)
    },[confirmPasswordError])

    useEffect(() => {
        if(error !== null) {
                navigate('/login', {replace: true})
        }
    },[error])

    return (
        <>
            <h2 className="dark:text-white text-gray-600 text-center text-2xl my-3">
                Reset password
            </h2>
            <form
                onSubmit={onSubmit}
                className="w-10/12 md:w-6/12 mx-6 rounded-lg p-5 bg-app-very-black-blue dark:bg-app-light-grey"
            >
                <div className='mt-4 w-full'>
                    <label htmlFor="newPassword">
                        <span className="text-white dark:text-black">
                            New password
                        </span>
                    </label>
                    <input

                        id="newPassword"
                        type="password"
                        className="border-none block w-full rounded p-3 mt-2"
                        {...register('newPassword', { required: true })}
                    />
                </div>
                <div className='mt-4 w-full'>
                    <label htmlFor="confirmPassword">
                        <span className="text-white dark:text-black">
                            Confirm new password
                        </span>
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className="border-none block w-full rounded p-3 mt-2"
                        {...register('confirmNewPassword', { required: true })}
                    />
                </div>
                <div className="flex justify-center w-full mt-4">
                    <Button
                        text1="Reset password"
                        background="bg-app-violet"
                        paddingX="p-3"
                        paddingY="p-2"
                    />
                </div>
                <div className="mt-3">
                    <span className="text-white dark:text-black">
                        <Link to="/signup">Don't have an account?</Link>
                    </span>
                </div>
                {error ? (
                    <div>
                        <p className="text-red-600">Error: {error}</p>
                    </div>
                ) : null}
                {confirmPasswordError ? (
                    <div>
                        <p className="text-red-600">Error: Passwords don't match</p>
                    </div>
                ) : null}
            </form>
        </>
    )
}

export default ResetPasswordComponent
