import { useLocation } from 'react-router-dom'
import JobApplicationForm from './jobApplicationForm/JobApplicationForm'
import { useQuery } from 'react-query'
import axios from 'axios'
import { getJob } from '../../api/jobs'

const JobApplicationPanel = () => {
    const location = useLocation()

    const { isLoading, data, error } = useQuery('job', () => getJob(location.state.jobId))

    return (
        <section className="w-full">
            <div className="w-full flex flex-col justify-center items-center ">
                {isLoading ? (
                    <p>loading...</p>
                ) : (
                    <h2 className="text-4xl font-bold my-10">
                        Application to {data.jobPost?.position} at {data.jobPost?.company}
                    </h2>
                )}
                <JobApplicationForm jobData={data} />
            </div>
        </section>
    )
}

export default JobApplicationPanel
