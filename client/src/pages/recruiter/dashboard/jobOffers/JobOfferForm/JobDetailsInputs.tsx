import { FC, ReactElement, useState, useEffect, createElement } from 'react'
import StepNavigationBtn from './StepNavigationBtn'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>

}

const JobDetailsInputs: FC<Props> = ({ step, setStep, register }: Props): JSX.Element => {
  
    
    const { state } = useStateMachine()


    return (
        <>
            <div className="flex items-center justify-between my-2 w-full">
                <label className='text-1xl font-semibold'>Description</label>
                <textarea
                    required
                    rows={5}
                    aria-required={true}
                    className="w-7/12 max-h-[300px] rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                    {...register('description', { value: state.jobPost && state.jobPost.description})}
                />
            </div>
        </>
    )
}

export default JobDetailsInputs
