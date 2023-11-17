import { FC, useContext, useState, useEffect } from 'react'
import { User } from '../../../../context/AuthContext'
import { AuthContext } from '../../../../context/AuthContext'
import PortalModal from '../../../../components/modals/PortalModal'
import JobOfferModalContent from './JobOfferForm/JobOfferModalContent'
import JobOfferUpdateModalContent from './JobOfferUpdate/JobOfferEditModalContent'
import Card from './Card'
import { JobPost } from '../../../../types/global'
import JobOffersTable from '../../../../components/JobOffersTable'
import Button from '../../../../components/Button'
import { useStateMachine } from 'little-state-machine'

interface Props {}

const MainPanel: FC<Props> = (props): JSX.Element => {
    const { state: littleStateMachine, getState } = useStateMachine()

    console.log('fdsfsd', getState())

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openPanel2, setOpenPanel2] = useState<boolean>(false)
    const [postedJob, setPostedJob] = useState<JobPost[]>([])
    const [selectedJobId, setSelectedJobId] = useState<string>('')

    const handleOpenUpdateForm = (jobId: string) => {
        setSelectedJobId(jobId)
        setOpenPanel2(true)
    }

    useEffect(() => {
        fetch('/api/jobPost', { credentials: 'include' })
            .then((res) => res.json())
            .then((data) => setPostedJob(data.data))
    }, [])

    const { state } = useContext(AuthContext)

    console.log('reached')

    return (
        <section className="min-h-screen w-10/12 my-8 bg-gray-200 pt-8 md:pl-8 lg:pl-16 lg:px-8">
            {/* <h1 className='text-3xl mb-12'>{state.user!.email} </h1>
    <div className='mt-6 w-full flex flex-col gap-y-4 lg:gap-y-0 gap-x-4 pb-16'>
        <h1>Here you can post new job offers</h1>
        <div className='flex'>
            <Card
              title={"Add a new job offer"}
              backgroundColor='bg-app-violet'
              openModal={() => setOpenModal(true)}
            />
        </div>
    </div> */}
            {!openPanel2 ? (
                <div>
                    {/* <h2>Your job offers</h2>
            {
              postedJob.length > 0 ? (<p>You have posted {postedJob.length} job offers</p>): (<p>No job offers listed yet</p>)
            } */}
                    <JobOffersTable
                        setOpenModal={setOpenModal}
                        handleOpenUpdateForm={handleOpenUpdateForm}
                        jobPosts={postedJob}
                        setPostedJob={setPostedJob}
                    />
                </div>
            ) : null}
            <PortalModal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <JobOfferModalContent setOpenModal={setOpenModal}/>
            </PortalModal>
            {openPanel2 ? (
                <JobOfferUpdateModalContent
                    selectedJobId={selectedJobId}
                    setOpenPanel2={setOpenPanel2}
                />
            ) : null}
        </section>
    )
}

export default MainPanel
