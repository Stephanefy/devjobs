import { useState } from "react"

const useResetPassword = () => {

    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const forgotPassword = async (email: string) => {


        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:8000/forgot-password' , {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        email,
                 }),
                })

            if (response.ok) {
                setIsSuccess(true)
            }
            
        } catch(err) {
            setIsLoading(false)
            setError(error)
            console.log(error)
        }
    }


    return {
        forgotPassword,
        isSuccess,
        error
    }
}


export default useResetPassword;