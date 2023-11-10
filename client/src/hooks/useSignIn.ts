import { useState } from 'react';
import useAuthContext  from './useAuthContext';
import { useLocalStorage } from './useLocaleStorage';



export const useSignIn = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { dispatch } = useAuthContext()
    const [, setItem] = useLocalStorage('user', {})

    const signIn = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        console.log(email, password)

        try {
            const response = await fetch('http://localhost:8000/signin' , {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        email,
                        password,
                 }),
                })
                const responseData = await response.json()

                if (!response.ok) {
                    setError(responseData.message)
                    throw new Error(responseData.message)
                }
                if (response.ok) {
                    dispatch({ type: 'LOGIN', payload: responseData })

                    console.log('reponseData', responseData)

                    const timeStamp = Date.now()

                    const timeStampedUser = {
                        id: responseData!.id as string,
                        email: responseData!.email as string,
                        role:responseData!.role as string,
                        initial: timeStamp,
                        expiresOn: timeStamp + 1000*60*60*24*30
                    }

                    console.log(timeStampedUser)

                    setItem(timeStampedUser)
                    setIsSuccess(true)
                }

        } catch (err) {
            console.error(err)
        }
    }

    return { signIn, error, isLoading, isSuccess}
}