import { useState } from 'react'
import useAuthContext from './useAuthContext'
import { useLocalStorage } from './useLocaleStorage'

interface UseSignUp {
    signup: (email: string, password: string, role: string) => Promise<void>
    error: any
    isLoading: boolean
    isSuccess: boolean
}

export const useSignUp = (): UseSignUp => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { dispatch } = useAuthContext()
    const [, setItem] = useLocalStorage('user', {})

    const signup = async (email: string, password: string, role: string) => {
        setIsLoading(true)
        setError(null)

        console.log(email, password, role)

        try {
            const response = await fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    role,
                }),
                credentials: 'include',
            })
            const responseData = await response.json()

            if (!response.ok) {
                throw new Error(responseData.message)
            }
            if (response.ok) {
                dispatch({ type: 'LOGIN', payload: responseData })
                const timeStamp = Date.now()

                const timeStampedUser = {
                    id: responseData!.id as string,
                    email: responseData!.email as string,
                    role: responseData!.role as string,
                    initial: timeStamp,
                    expiresOn: timeStamp + 1000 * 60 * 60 * 24 * 30,
                }

                console.log(timeStampedUser)

                setItem(timeStampedUser)
                setIsSuccess(true)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return { signup, error, isLoading, isSuccess }
}
