import Button from '../Button'
import { useStateMachine } from 'little-state-machine'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useSignIn } from '../../hooks/useSignIn'


const roles = ['JOB_SEEKER', 'EMPLOYER']

const LoginComponent = () => {
    const { signIn, error, isSuccess } = useSignIn()
    const { state } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)

        try {
            await signIn(data.email, data.password)
        } catch (err) {
            console.log(err)
        }
    })

    useEffect(() => {
        if (roles.includes(state.user!.role)) {
            navigate('/dashboard/main')
        }
    }, [])

    useEffect(() => {
        if (roles.includes(state.user!.role)) {
            navigate('/dashboard/main')
        }
    }, [state])

    return (
        <>
            <h2 className="dark:text-white text-gray-600 text-center text-2xl mb-3">
                Login
            </h2>
            <form
                onSubmit={onSubmit}
                className="md:w-5/12 mx-6 rounded-lg p-6 md:p-12 bg-gray-600 dark:bg-app-light-grey h-3/5"
            >
                {' '}
                <div>
                    <label htmlFor="email">
                        <span className="text-white dark:text-black">
                            Email address
                        </span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="border-none block rounded w-full p-3 mt-2"
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="password">
                        <span className="text-white dark:text-black">
                            Password
                        </span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="border-none block rounded w-full p-3 mt-2 text-2xl"
                        {...register('password', { required: true })}
                    />
                </div>
                <div className="flex justify-center w-full mt-12">
                    <Button
                        text1="login"
                        background="bg-app-violet"
                        paddingX="p-3"
                        paddingY="p-2"
                        textColor="text-white"
                    />
                </div>
                <div className='mt-8'>
                    <div className="mt-3">
                        <span className="text-white dark:text-black hover:text-app-violet">
                            <Link to="/signup">Don't have an account?</Link>
                        </span>
                    </div>
                    <p className="text-white">
                        Can't login ?{' '}
                        <span className="dark:text-black hover:text-app-violet">
                            <Link to="/forgot-password">
                                Reset your password?
                            </Link>
                        </span>
                    </p>
                </div>
                {error ? (
                    <div>
                        <p className="text-red-600 ">Error: {error}</p>
                    </div>
                ) : null}
            </form>
        </>
    )
}

export default LoginComponent
