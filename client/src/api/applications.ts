import axios from "axios"

export const getApplications = async (userId: string) => {

    const applications = await axios.get(`http://localhost:8000/api/applicant/applications/${userId}`, {withCredentials: true})

    return applications.data
}


export const getApplication = async (applicationId: string) => {
  const application = await axios.get(`http://localhost:8000/api/applications/${applicationId}`, {withCredentials: true})

  return application.data
}


export const getApplicationCount = async (applicantId: string) => {
  const applicationCount = await axios.get(`http://localhost:8000/api/applications/count/${applicantId}`, {withCredentials: true})

  return applicationCount.data;
}