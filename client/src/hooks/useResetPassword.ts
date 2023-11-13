import { useState } from "react"



interface ResetTokenData {
    resetToken: string;
    password: string;
    confirmNewPassword: string;
}


const useResetPassword = () => {

    // const [data, setData] = useState<{status: string, resetUrl: string, message: string} | null >(null)
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
            const data = await response.json()

            if (response.ok) {
                setIsSuccess(true)
                // setData(data)
            }
            return data
            
        } catch(err) {
            setIsLoading(false)
            setError(error)
            console.log(error)
        }
    }

    const resetPassword = async (newPasswordData: ResetTokenData) => {

        const {resetToken, password, confirmNewPassword} = newPasswordData

        try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:8000/reset-password/${resetToken}` , {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        password,
                        confirmNewPassword
                 }),
                })
            const data = await response.json()

            if (response.status === 403) {
                console.log(response)

                throw new Error("token is expired")
            }

            if (response.ok) {
                setIsSuccess(true)
                // setData(data)
            }

            
        } catch(err: any) {
            setIsLoading(false)
            setError(err.message)
            console.log("error from resetting password",err.message)
        }
    }


    return {
        // data,
        forgotPassword,
        resetPassword,
        isLoading,
        isSuccess,
        error
    }
}


export default useResetPassword;