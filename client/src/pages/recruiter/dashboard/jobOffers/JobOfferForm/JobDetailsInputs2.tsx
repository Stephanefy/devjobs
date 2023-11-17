import { FC, useState, ReactElement, createElement, useEffect } from 'react'
import RequirementsAndRoleItem from './RequirementsAndRoleItem'
import { nanoid } from 'nanoid'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import setDefaultRequirementsItems from '../../../../../utils/setDefaultRequirementsItems'
interface Props {
    step: number
    setStep: (step: number) => void
    register: UseFormRegister<FieldValues>
}
//TODO: refactor this with JobDetailsInput3 component

const JobDetailsInputs2: FC<Props> = ({
    step,
    setStep,
    register,
}: Props): JSX.Element => {
    const { state } = useStateMachine()

    // const [requirementItemArr, setNumRequirementItemArr] = useState<
    //     ReactElement[]
    // >([<RequirementsAndRoleItem id={nanoid()} register={register} />])
    const [requirementItemArr, setNumRequirementItemArr] = useState<
        ReactElement[]
    >([])

    const defaultRequirementsItems = () => {
        if (state.jobPost.requirements?.items?.length > 0 && requirementItemArr.length === 0) {
            return state.jobPost.requirements?.items?.map((item) => {
                return (
                    <RequirementsAndRoleItem
                        id={nanoid()}
                        type="requirements"
                        register={register}
                        defaultValue={item}
                    />
                )
            })
        }
        return []
    }

    useEffect(() => {
        setNumRequirementItemArr(defaultRequirementsItems())
    }, [])

    console.log('state from requirements form', state)

    return (
        <>
            <div id="requirements" className="w-full">
                <div className="flex flex-col justify-between my-2 w-full">
                    <label>Content</label>
                    <textarea
                        rows={5}
                        required
                        aria-required={true}
                        className="w-12/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                        {...register('requirements-content')}
                    />
                </div>
                <div className="flex w-full items-center">
                    <h4 className="text-gray-400 text-1xl text-left my-2">
                        Relevant information items to this job's requirements
                        (optional)
                    </h4>
                    <button
                        className="ml-4"
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation()
                            if (requirementItemArr.length < 6) {
                                setNumRequirementItemArr((prevState) => [
                                    ...prevState,
                                    <RequirementsAndRoleItem
                                        type="requirements"
                                        id={nanoid()}
                                        setRoleItemArr={
                                            setNumRequirementItemArr
                                        }
                                        register={register}
                                    />,
                                ])
                            }
                        }}
                    >
                        +
                    </button>
                    {requirementItemArr.length === 6 ? (
                        <span className="inline-block text-red-600 ml-auto">
                            maximum items reached
                        </span>
                    ) : null}
                </div>
                <ul className="grid grid-cols-2 w-full gap-x-7">
                    {requirementItemArr!.map(
                        (item: ReactElement, _index: number) =>
                            createElement(item.type, {
                                key: nanoid(),
                                ...item.props,
                                requirementItemArr,
                            })
                    )}
                    {/* <input
                        type="text"
                        required={false}
                        className="w-10/12 mx-2 my-2 rounded-md border-0 px-4 py-2 placeholder-gray-300 shadow h-2/3"
                    />
                    <input
                        type="text"
                        required={false}
                        className="w-10/12 mx-2 my-2  rounded-md border-0 px-4 py-2 placeholder-gray-300 shadow h-2/3"
                    /> */}
                </ul>
            </div>
        </>
    )
}

export default JobDetailsInputs2
