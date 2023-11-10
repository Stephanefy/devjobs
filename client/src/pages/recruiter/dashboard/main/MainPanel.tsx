import { FC, useContext, useEffect, useState } from 'react'
import WelcomeCard from './WelcomeCard'
import StatsApplicants from './StatsApplicants'
import StatsJobfield from './StatsJobfield'
import { User } from '../../../../context/AuthContext'
import { AuthContext } from '../../../../context/AuthContext'

interface Props {}

const MainPanel: FC<Props> = (props): JSX.Element => {
    const { state } = useContext(AuthContext)

    const [postedJobCount, setPostedJobCount] = useState<number>(0)

    useEffect(() => {
        fetch('/api/jobPost/posted-count', { credentials: 'include' })
            .then((res) => res.json())
            .then((data) => setPostedJobCount(data.count))
    }, [])

    return (
        <section className="w-full overflow-auto bg-gray-200 pt-8 pl-8 pr-16 md:pl-16 md:pr-16 lg:pr-6">
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
