import { FC, useRef, useState } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import DragAndDropImgFile from '../../../../components/forms/DragAndDropImgFile'

interface Props {
    step: number
    setStep: (step: number) => void
    register: UseFormRegister<FieldValues>
}

const contractSelection = [
    { id: 1, label: 'Durward Reynolds', unavailable: false },
    { id: 2, label: 'Kenton Towne', unavailable: false },
]

const BasicInfoInputs: FC<Props> = ({
    step,
    setStep,
    register,
}: Props): JSX.Element => {
    const nodeRef = useRef()

    const { state } = useStateMachine()
    const [selectedContract, setSelectedContract] = useState(
        contractSelection[0]
    )

    console.log("jfkldsjkdsl",state)

    return (
        <>
            {/* <div className={`flex items-center w-full justify-between`}>
                <h4 className="text-gray-200 text-3xl text-left mb-8">
                    Company information
                </h4>
            </div> */}
            <div className="my-5">
                <div className="items-start justify-between w-full">
                    <label className="font-semibold">Company name</label>
                    <input
                        type="text"
                        required
                        aria-required={true}
                        className="w-full rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                        {...register('company', {
                            value: state.jobPost && state.jobPost.company,
                        })}
                    />
                </div>
                {/* <div className="items-start justify-between my-2 w-full">
                    <label className="my-2 font-semibold">Logo</label>
                    <input
                        type="text"
                        aria-required={false}
                        className="w-full rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                        {...register('logo', {
                            value: state.jobPost && state.jobPost.logo,
                        })}
                    />
                    <DragAndDropImgFile/>
                </div>
                <div className="items-start justify-between my-2 w-full">
                    <label className="my-2 font-semibold">
                        Logo background
                    </label>
                    <input
                        type="text"
                        required
                        aria-required={true}
                        className="w-full rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                        {...register('logoBackground', {
                            value:
                                state.jobPost && state.jobPost.logoBackground,
                        })}
                    />
                </div> */}
                <div className="md:flex-row  items-start justify-between my-2 w-full">
                    <label className="my-2 font-semibold">Position</label>
                    <input
                        type="text"
                        required
                        aria-required={true}
                        className="w-full  rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                        {...register('position', {
                            value: state.jobPost && state.jobPost.position,
                        })}
                    />
                </div>
                <div className="md:flex-row  items-start justify-between my-2 w-full">
                    <label className="my-2 font-semibold">Contract</label>
                    <select
                        required
                        aria-required={true}
                        className="appearance-none w-full rounded-md border-0 p-3 mr-2 placeholder-gray-300 shadow"
                        {...register('contract', {
                            value: state.jobPost && state.jobPost.contract,
                        })}
                    >
                        <option className="appearance-none" value="Full Time">Full time</option>
                        <option className="appearance-none" value="Part Time">Part time</option>
                    </select>
                </div>
            </div>
            {/* <StepNavigationBtn step={step} setStep={setStep}/> */}
        </>
    )
}

export default BasicInfoInputs
