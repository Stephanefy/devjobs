import { useState, useEffect } from 'react'
import FirstSteps from '../components/registerSteps/FirstStep'
import SecondStep from '../components/registerSteps/SecondStep'
import FourthStep from '../components/registerSteps/FourthStep';
import ThirdStep from '../components/registerSteps/ThirdStep';
import { useStateMachine } from 'little-state-machine';
import { updateSignUp } from '../utils/updateAction';


const SignUp = () => {

  const [step, setStep] = useState<number>(1)
  const { actions, state, getState} = useStateMachine({ updateSignUp})

  useEffect(() => {
    console.log(getState())
  }, [])


  const onStepChange = (e: any) : void => {
    if (step > 0 && step < 3) setStep(step => step + 1)

    console.log(e?.currentTarget?.innerHTML)

    if (e?.currentTarget?.innerHTML === "Job seeker") {
        setStep(3)
        actions.updateSignUp({role: 'JOB_SEEKER'})
    } 
    if (e?.currentTarget?.innerHTML === "Recruiter") {
        setStep(4)
        actions.updateSignUp({role: 'EMPLOYER'})

    }

  }

  

  return (
        <div className='h-screen md:w-7/12 mx-auto flex justify-center items-center'>
            {/* Employer */}
            <div 
            className='flex-col items-center md:w-8/12 mx-6 rounded-lg p-3 bg-app-violet dark:bg-app-very-black-blue'>
                <h2 className='text-white text-center text-2xl my-3'>Create an account </h2>
                {
                    step === 1 ? 
                    <FirstSteps 
                    onstephandler={onStepChange}
                    /> : null
                }
                {
                    step === 2 ? <SecondStep onstephandler={onStepChange}/> : null
                }
                {
                    step === 3 ? <ThirdStep setStep={setStep}/> : null
                }
                {
                    step === 4 ? <FourthStep setStep={setStep} step={step}/> : null
                }
            </div>

            {/* Jobseeker */}

        </div>
  )
}

export default SignUp