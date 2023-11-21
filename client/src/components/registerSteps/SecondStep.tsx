import React, { MouseEvent, useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import {updateSignUp}  from '../../utils/updateAction'

type Props = {
    onstephandler: (e: MouseEvent<Element>) => void
}


const SeconStep = ({onstephandler}: Props) => {

  const { actions, state, getState } = useStateMachine({ updateSignUp })

 console.log(getState())


  return (
    <div className="text-white dark:text-gray-400 p-12">
        <h3>Are you a recruiter or a job seeker ?</h3>
        <p className='text-white'>your email address: {state?.data?.email}</p>
    <div className='flex flex-col'>
        <button onClick={onstephandler} className='my-4 mt-6 bg-app-violet text-white rounded-lg p-2 '>
            Recruiter
        </button>
        <button onClick={onstephandler} className='w-full my-4 mt-6 bg-app-violet text-white rounded-lg p-2 '>
            Job seeker
        </button>
    </div>
</div>
  )
}

export default SeconStep