import { FC } from 'react'
import FormIndex from './FormIndex'
import { useState } from 'react'
import Step from '../../../../../components/Step'

interface Props {}

const JobOfferModalContent: FC<Props> = (props): JSX.Element => {

    const [step, setStep] = useState<number>(1)


    return (
        <div className="flex flex-col justify-center w-4/4 w-full bg-white z-50 px-8 lg:px-16 pb-24 pt-12 rounded-md">
            <h3 className="text-3xl md:text-5xl text-center mb-16 font-bold">New job offer</h3>
            <div className="flex justify-between rounded p-3">
                <Step step={1} currentStep={step} />
                <Step step={2} currentStep={step} />
                <Step step={3} currentStep={step} />
                <Step step={4} currentStep={step} />
                <Step step={5} currentStep={step} />
                <Step step={6} currentStep={step} />
            </div>
            <FormIndex step={step} setStep={setStep}/>
        </div>
    )
}

export default JobOfferModalContent
