import React, { createContext, Dispatch, SetStateAction, useState } from "react";
import { JobPost } from "../types/global";



interface Props {
    children: React.ReactNode
}


type JobContextType = {
        currentId: number, 
        setCurrentId: Dispatch<SetStateAction<number>>,
        jobsData: JobPost[],
        setJobsDataContext: Dispatch<SetStateAction<JobPost[]>>,
}

export const JobContext = createContext<JobContextType>({
    currentId: 0,
    setCurrentId: () => {},
    jobsData: [],
    setJobsDataContext: () => {}
})



const JobContextProvider: React.FC<Props> = ({children}) => {

    const [currentId, setCurrentId] = useState<number>(0)
    const [jobsData, setJobsDataContext] = useState<JobPost[]>([])

    console.log('from context', jobsData)

    const value = {
        currentId,
        setCurrentId,
        jobsData,
        setJobsDataContext
    }

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>
}


export default JobContextProvider