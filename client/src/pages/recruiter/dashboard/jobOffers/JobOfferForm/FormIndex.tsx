import { FC, useState, useRef, useEffect } from 'react'
import Transition from '@headlessui/react'
import BasicInfoInputs1 from './BasicInfoInputs1'
import BasicInfoInputs2 from './BasicInfoInputs2'
import JobDetailsInputs from './JobDetailsInputs'
import JobDetailsInputs2 from './JobDetailsInputs2'
import JobDetailsInput3 from './JobDetailsInput3'
import JobDetailsRecap from './JobDetailsRecap'
import { useForm } from 'react-hook-form'
import {
    updateJobPost,
    updateRequirements,
    updateRole,
    clearJobPost,
    setCurrentStep
} from '../../../../../utils/updateAction'
import { useStateMachine } from 'little-state-machine'
import { isEmptyObject } from '../../../../../utils/isEmptyObject'
import Button from '../../../../../components/Button'


interface Props {
    step: number
    setStep: (arg0: number) => void
}

const updateReqOrRole = (
    updateFn: Function,
    content: string,
    items: string[]
) => {
    updateFn({
        content,
        items,
    })
}

const FormIndex: FC<Props> = ({ step, setStep }: Props): JSX.Element => {
    const [sucesss, setSuccess] = useState<boolean>(false)
    const { actions, state, getState } = useStateMachine({
        updateJobPost,
        updateRequirements,
        updateRole,
        clearJobPost,
        setCurrentStep
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: any) => {

        actions.setCurrentStep(step)

        if (step < 6) setStep(step + 1)

        const finalData = getState()

        if (step === 6) {
            try {
                const response = await fetch(
                    'http://localhost:8000/api/jobPost',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ ...finalData }),
                        credentials: 'include',
                    }
                )

                if (response.ok) {
                    setSuccess(true)
                    sessionStorage.removeItem('__LSM__')
                }
            } catch (error) {}
        }

        // check for step 4 and five of the wizard to use the proper update function
        if (step < 4) {
            actions.updateJobPost(data)
        }
        if (step === 4) {
            updateReqOrRole(
                actions.updateRequirements,
                data.content,
                data.items
            )
        }
        if (step === 5) {
            updateReqOrRole(actions.updateRole, data.content, data.items)
        }
    }


    useEffect(() => {
        if (state.formStep) {
            setStep(state.formStep.step + 1)
        }
    }, [])


    useEffect(() => {
        const storedFormData = sessionStorage.getItem('__LSM__')

        if (storedFormData === null) return

        if (!isEmptyObject(JSON.parse(storedFormData as string)?.jobPost)) {
            const parsedData = JSON.parse(storedFormData as string)
            // check if the user has already filled the form
            actions.updateJobPost(parsedData?.jobPost)
            actions.setCurrentStep(parsedData?.formStep.step)
            // redirect to recap step
        }
    }, [])

   
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`w-full h-screen ${
                    step === 1 || step === 6 ? 'pt-48 md:pt-0' : 'pt-16 md:pt-1'
                }  pb-16 flex flex-col items-start md:px-8 justify-center overflow-auto`}
            >
                <div className="h-3/4 w-full my-auto py-8">
                    {step === 1 ? (
                        <BasicInfoInputs1
                            step={step}
                            setStep={setStep}
                            register={register}
                        />
                    ) : null}
                    {step === 2 ? (
                        <BasicInfoInputs2
                            step={step}
                            setStep={setStep}
                            register={register}
                        />
                    ) : null}
                    {step === 3 ? (
                        <JobDetailsInputs
                            step={step}
                            setStep={setStep}
                            register={register}
                        />
                    ) : null}
                    {step === 4 ? (
                        <JobDetailsInputs2
                            register={register}
                            step={step}
                            setStep={setStep}
                        />
                    ) : null}
                    {step === 5 ? (
                        <JobDetailsInput3
                            register={register}
                            step={step}
                            setStep={setStep}
                        />
                    ) : null}
                    {step > 5 ? <JobDetailsRecap /> : null}
                </div>
                <div className="mt-36 flex w-full justify-between">
                    {step > 1 ? (
                        <div>
                            <button
                            type='button'
                                className='text-white bg-app-violet px-4 py-2'
                                onClick={() => setStep(step - 1)}
                            >Previous</button>
                        </div>
                    ) : null}
                    {step === 6 && (
                        <div className='mx-auto'>
                            <button
                                className='text-white bg-app-violet px-4 py-2'
                                onClick={() => actions.clearJobPost()}
                            >
                                Clear 
                                </button>
                        </div>
                    )}
                    {step <= 6 ? (
                        <div className='ml-auto'>
                            <Button 
                            text1={step === 6 ? 'Submit' : 'Next'}
                            background='bg-app-violet'
                            paddingX='px-4'
                            paddingY='py-2'
                            textColor="text-white"
                            type="submit"
                            />
                        </div>
                    ) : null}
                </div>
            </form>
        </>
    )
}

export default FormIndex
