import { FC, useContext, useEffect, useState } from 'react'
import WelcomeCard from './WelcomeCard'
import StatsApplicants from './StatsApplicants'
import StatsJobfield from './StatsJobfield'
import { User } from '../../../context/AuthContext'
import { AuthContext } from '../../../context/AuthContext'
import { useStateMachine } from 'little-state-machine'
import classNames from 'classnames'
import { useQuery } from 'react-query'
import { getJobPostsCount } from '../../../api/jobs'

interface Props {}

const MainPanel: FC<Props> = (props): JSX.Element => {
    const { state: littleStateMachineState } = useStateMachine()
    const { data, error } = useQuery('user',  () => getJobPostsCount())


    console.log("count ",data)

    const { state } = useContext(AuthContext)

    const [postedJobCount, setPostedJobCount] = useState<number>(0)

    // useEffect(() => {
    //     fetch('/api/jobPost/posted-count', { credentials: 'include' })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log('data', data)
    //             setPostedJobCount(data.count)
    //         })
    //         .catch((err) => console.log(err))
    // }, [])

    return (
        <section
            className={classNames(
                `max-w-2xlsm:max-w-7xl overflow-auto bg-gray-200 pt-8 pl-8 md:pl-56 sm:pr-16 lg:pr-6`,
                {
            'transition ease-in-out transform md:-translate-x-10': littleStateMachineState.sidebarState?.status === 0,
            'transition ease-in-out transform md:translate-x-0': littleStateMachineState.sidebarState?.status === 1
                }
            )}
        >
            <h1 className="text-3xl mb-12 font-bold">Hello {state.user!.email} </h1>
            <WelcomeCard postedJobCount={data?.count} />
            <div className="mt-6 w-full flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 pb-16">
                <StatsApplicants />
                <StatsJobfield />
            </div>
        </section>
    )
}

export default MainPanel
