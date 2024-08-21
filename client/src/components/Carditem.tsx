import { useContext } from "react";
import { JobContext } from "../context/JobContext"
import { JobPost } from "../types/global";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateCurrentSelectedJob } from "../utils/updateAction";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";
export type CardItemProps = {
  card : JobPost
}

function Carditem({card} : CardItemProps) {



  const context = useContext(JobContext)
  const authState = useContext(AuthContext)
  const { state, actions } = useStateMachine({
    updateCurrentSelectedJob
  })

  const { user } = authState.state

  console.log("user", user)
  const navigate = useNavigate()

  const handleNavigateToDetail = (id: string) => {
    actions.updateCurrentSelectedJob(card)
    navigate(`/job/${id}`)
  }


  const postedAt = formatDistanceToNow(new Date(card.postedAt))

  

  return (
    <li 
    className="relative w-[300px] place-self-center lg:w-[350px] md:h-[300px] mt-16 py-4 md:py-8 px-6 lg:px-8 bg-white rounded-xl cursor-pointer dark:bg-app-very-black-blue"
    onClick={() => handleNavigateToDetail(card.id)}
    >
      <div className="absolute w-[50px] place-self-center h-[50px] -top-6 flex justify-center items-center rounded-2xl" style={{backgroundColor: card.logoBackground}}>
        <img src={`${card.logo ? card.logo : '/assets/logos/logo-devjob-app.svg'}`} alt="logo" />
      </div>
      <div className="mt-2 mb-2">
        <span className="text-app-gray">{postedAt}</span>
        <span className="text-app-gray mx-2 text-6xl">.</span>
        <span className="text-app-gray">{card.contract}</span>
      </div>
      <div className="mb-2">
        <h3 className="font-semibold dark:text-white">{card.position}</h3>
      </div>
      <div>
        <span className="text-app-gray ">{card.company}</span>
      </div>
      <div className="mt-8">
        <span className="text-app-violet">{card.location}</span>
      </div>
      {
        user?.role === "JOB_SEEKER" ? (
          <div className="mt-5">
              <Button
                text1="Apply"
                text2="Now"
                background="bg-app-violet"
                textColor="text-white"
                paddingX="px-6"
                paddingY="py-2"
                // onClick={() => context.applyForJob(card.id)}
              >Apply</Button>
          </div>
        ) : null
      }
    </li>
  )
}

export default Carditem