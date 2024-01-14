import axios from "axios"

export const getApplications = async (userId: string) => {

    const applications = await axios.get(`http://localhost:8000/api/applications/${userId}`, {withCredentials: true})

    return applications.data
}