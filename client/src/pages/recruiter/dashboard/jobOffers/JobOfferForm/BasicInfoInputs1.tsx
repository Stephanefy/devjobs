import { FC, useRef } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>
}

const BasicInfoInputs: FC<Props> = ({ step, setStep, register }: Props): JSX.Element => {
    const nodeRef = useRef()


    const { state }= useStateMachine()

    console.log(state)
    

    return (
        <>
            <div className={`flex items-center w-full justify-between`}>
                <h4 className="text-gray-200 text-3xl text-left">
                    Company information
                </h4>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between my-2 w-full">
                <label className="my-2 font-semibold">Company name</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('company', { value: state.jobPost && state.jobPost.company})}
                />
            </div>
            <div className="flex flex-col md:flex-row  items-start justify-between my-2 w-full">
                <label className="my-2 font-semibold">Logo</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('logo', { value: state.jobPost && state.jobPost.logo})}

                />
            </div>
            <div className="flex flex-col md:flex-row  items-start justify-between my-2 w-full">
                <label className="my-2 font-semibold">Logo background</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('logoBackground', { value: state.jobPost && state.jobPost.logoBackground})}

                />
            </div>
            <div className="flex flex-col md:flex-row  items-start justify-between my-2 w-full">
                <label className="my-2 font-semibold">Position</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('position', { value: state.jobPost && state.jobPost.position})}
                />
            </div>
            <div className="flex flex-col md:flex-row  items-start justify-between my-2 w-full">
                <label className="my-2 font-semibold">Contract</label>
                <input
                    type="text"
                    required
                    aria-required={true}
                    className="w-full lg:w-7/12 rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                    {...register('contract', { value: state.jobPost && state.jobPost.contract})}
                />
            </div>
            {/* <StepNavigationBtn step={step} setStep={setStep}/> */}
   
        </>
    )
}

export default BasicInfoInputs
