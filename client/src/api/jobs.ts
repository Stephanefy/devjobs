import axios from "axios";

export const getJobs = async () => {
    const response = await axios.get("http://localhost:8000/api/jobPost");
    return response.data;
}

export const getJob = async (id: string) => {

    const response = await axios.get(`/api/job/${id}`, { withCredentials: true })
    ;
    return response.data;
}


export const getJobPostsCount = async () => {
    const response = await axios.get('/api/jobPost/posted-count', { withCredentials: true })
    return response.data
}