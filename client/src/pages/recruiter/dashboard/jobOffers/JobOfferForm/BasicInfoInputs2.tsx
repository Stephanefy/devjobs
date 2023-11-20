import { FC } from 'react'
import StepNavigationBtn from './StepNavigationBtn'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>

}

const BasicInfoInputs2: FC<Props> = ({step, setStep, register}: Props): JSX.Element => {

    const { state } = useStateMachine()



    return (
        <>
            <div className="flex flex-col justify-between my-2 w-full">
                <label className="inline-block my-2 font-semibold">Location</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="inlin-block w-12/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                    {...register('location', { value: state.jobPost && state.jobPost.location})}
                />
            </div>
            <div className="flex flex-col my-2 w-full">
                <label className="my-2 font-semibold">Website</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-12/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                    {...register('website', { value: state.jobPost && state.jobPost.website})}
                />
            </div>
            <div className="flex flex-col my-2 w-full">
                <label className="my-2 font-semibold">Apply</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-12/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                    {...register('apply', { value: state.jobPost && state.jobPost.apply})}
                />
            </div>
        </>
    )
}

export default BasicInfoInputs2
