import { FC, useContext, useEffect, useState } from 'react'
import WelcomeCard from './WelcomeCard'
import StatsApplicants from './StatsApplicants'
import StatsJobfield from './StatsJobfield'
import { User } from '../../../../context/AuthContext'
import { AuthContext } from '../../../../context/AuthContext'
import { useStateMachine } from 'little-state-machine'
import classNames from 'classnames'

interface Props {}

const MainPanel: FC<Props> = (props): JSX.Element => {
    const { state: littleStateMachineState } = useStateMachine()

    const { state } = useContext(AuthContext)

    const [postedJobCount, setPostedJobCount] = useState<number>(0)

    useEffect(() => {
        fetch('/api/jobPost/posted-count', { credentials: 'include' })
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data)
                setPostedJobCount(data.count)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <section
            className={classNames(
                `w-full overflow-auto bg-gray-200 pt-8 pl-8 pr-16 md:pl-16 md:pr-16 lg:pr-6`,
                {
            'transition ease-in-out transform -translate-x-32': littleStateMachineState.sidebarState.status === 0,
            'transition ease-in-out transform translate-x-0': littleStateMachineState.sidebarState.status === 1
                }
            )}
        >
            <h1 className="text-3xl mb-12">Welcome {state.user!.email} </h1>
            <WelcomeCard postedJobCount={postedJobCount} />
            <div className="mt-6 w-full flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 pb-16">
                <StatsApplicants />
                <StatsJobfield />
            </div>
        </section>
    )
}

export default MainPanel
