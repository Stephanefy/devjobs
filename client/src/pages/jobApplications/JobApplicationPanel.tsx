import { useLocation } from 'react-router-dom'
import JobApplicationForm from './jobApplicationForm/JobApplicationForm'
import { useQuery } from 'react-query'
import { getJob } from '../../api/jobs'
import Body from '../../components/Body'

const JobApplicationPanel = () => {
    const location = useLocation()
    console.log(location)

    const { isLoading, data, error } = useQuery('job', () =>
        getJob(location.state.jobId)
    )

    return (
        <section className="w-full">
            {isLoading ? (
                <p>loading...</p>
            ) : (
                <>
                    <div className='text-center'>
                        <h2 className="text-4xl font-bold my-10">
                            Application to {data?.position} at {data?.company}
                        </h2>
                    </div>
                </>
            )}
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start ">
                <JobApplicationForm jobData={data} />
                {isLoading ? (
                    <p>loading...</p>
                ) : (
                    <Body page="application" currentJob={data} />
                )}
            </div>
        </section>
    )
}

export default JobApplicationPanel
