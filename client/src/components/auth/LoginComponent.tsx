import Button  from '../Button'
import { useStateMachine } from 'little-state-machine'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useSignIn } from '../../hooks/useSignIn'

const LoginComponent = () => {
    const { getState } = useStateMachine()
    const { signIn, error, isSuccess } = useSignIn()
    const { state } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        console.log(getState())

        console.log(state)
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)

        try {
            await signIn(data.email, data.password)
        } catch (err) {
            console.log(err)
        }
    })

    useEffect(() => {
        if (isSuccess && state.user!.role === 'EMPLOYER') {
            navigate('/dashboard/main')
        }
    }, [state])

    return (
        <>
            <h2 className="dark:text-white text-gray-600 text-center text-2xl my-3">
                Login
            </h2>
            <form
                onSubmit={onSubmit}
                className="flex flex-col items-start md:w-6/12 mx-6 rounded-lg p-5 bg-app-very-black-blue dark:bg-app-light-grey"
            >
                <label htmlFor="email">
                    <span className="text-white dark:text-black">
                        Email address
                    </span>
                </label>
                <input
                    id="email"
                    type="email"
                    className="border-none w-full p-3 mt-2"
                    {...register('email', { required: true })}
                />
                <label htmlFor="password">
                    <span className="text-white dark:text-black">Password</span>
                </label>
                <input
                    id="password"
                    type="password"
                    className="border-none w-full p-3 mt-2"
                    {...register('password', { required: true })}
                />
                <div className="flex justify-center w-full mt-4">
                    <Button
                        text1="login"
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
            </form>
            <p>Can't login ? <span className="text-dark dark:text-black">
                        <Link to="/forgot-password">Reset your password?</Link>
            </span></p>
        </>
    )
}

export default LoginComponent
