import { Dispatch, FC, SetStateAction } from 'react'
import FormIndex from './FormIndex'
import { useState } from 'react'
import Step from '../../../../../components/Step'

interface Props {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const JobOffersModalContent: FC<Props> = ({setOpenModal}): JSX.Element => {

    const [step, setStep] = useState<number>(1)

    const getCurrentStepName = () => {
        if (step === 1) return "Company information"
        if (step === 2) return "Extra company information"
        if (step === 3) return "Description"
        if (step === 4) return "Requirements"
        if (step === 5) return "Role"
        if (step === 6) return "Job Details recap"
    }


    return (
        <div className="min-h-max flex flex-col justify-center w-8/12 bg-white z-50 px-8 lg:px-6 pb-6 pt-6 rounded-md">
            <h3 className="text-3xl text-left font-bold pl-3">New job offer <span className='text-gray-200 text-lg'>{`${getCurrentStepName()}`}</span></h3>
            <div className="flex justify-between rounded p-3 mt-4">
                <Step step={1} currentStep={step} />
                <Step step={2} currentStep={step} />
                <Step step={3} currentStep={step} />
                <Step step={4} currentStep={step} />
                <Step step={5} currentStep={step} />
                <Step step={6} currentStep={step} />
            </div>
            <FormIndex step={step} setStep={setStep} setOpenModal={setOpenModal}/>
        </div>
    )
}

export default JobOffersModalContent
