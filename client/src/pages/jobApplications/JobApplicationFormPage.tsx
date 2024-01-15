import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import JobApplicationForm from './jobApplicationForm/JobApplicationForm'
import { useQuery } from 'react-query'
import { getJob } from '../../api/jobs'
import Body from '../../components/Body'
import { Toaster } from 'react-hot-toast'
import MyDialog from '../../components/modals/Dialog'


const JobApplicationFormPage = () => {
    const location = useLocation()
    console.log(location)
    
    const [open, setOpen] = useState(true)

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
                <JobApplicationForm jobData={data} setOpen={setOpen} />
                {isLoading ? (
                    <p>loading...</p>
                ) : (
                    <Body page="application" currentJob={data} />
                )}
            </div>
            <Toaster
                position='bottom-center'
                toastOptions={{
                    duration: 1500,
                    style: {
                        background: '#fff',
                        color: '#000',
                    }
                }}
            />
            <MyDialog
                dialogTitle='Application submitted'
                dialogMessage='Thank you for submitting your application. The employer will come back to you if interested.'
                dialogDescription='We confirm that your application has been transmitted to the employer'
                dialogValidate='Ok'
                dialogCancel='Close'
                open={open}
                setOpen={setOpen}
            />
        </section>
    )
}

export default JobApplicationFormPage
