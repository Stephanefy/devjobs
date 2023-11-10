import { useState } from 'react';
import useAuthContext  from './useAuthContext';
import { useLocalStorage } from './useLocaleStorage';
import { useNavigate } from 'react-router-dom';


export const useLogout = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { dispatch } = useAuthContext()
    const [, , removeValue] = useLocalStorage('user', null)
    const navigate = useNavigate()

    const logout = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/user/logout' , {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                })
                const responseData = await response.json()

                if (!response.ok) {
                    setError(responseData.message)
                    throw new Error(responseData.message)
                }
                if (response.ok) {
                    removeValue('user')
                    dispatch({ type: 'LOGOUT' })
                    setIsSuccess(true)

                    navigate('/login')

                }

        } catch (err) {
            console.error(err)

        }
    }

    return { logout, error, isLoading, isSuccess}
}