import { FC, useContext } from 'react'
import SvgComponent from '../../../../components/svg/WelcomeCardSvg'
import { AuthContext } from '../../../../context/AuthContext'
import EmployerWelcomeCard from './EmployerWelcomeCard'
import JobSeekerWelcomeCard from './JobSeekerWelcomeCard'

interface Props {
    postedJobCount: number
}

const WelcomeCard: FC<Props> = (props: Props): JSX.Element => {

    const { state } = useContext(AuthContext)



    return (
        <div className="bg-gray-100 p-6 rounded-lg w-12/12 flex">
            {
              state?.user!.role === "EMPLOYER" ? (
                <EmployerWelcomeCard postedJobCount={props.postedJobCount}/>
              ) : (
                <JobSeekerWelcomeCard/>
              )
            }
            <div className="hidden md:block md:basis-6/12">
                <SvgComponent />
            </div>
        </div>
    )
}

export default WelcomeCard
