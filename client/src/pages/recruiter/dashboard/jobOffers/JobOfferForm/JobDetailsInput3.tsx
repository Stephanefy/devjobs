import { FC, useState, ReactElement, createElement, useEffect } from 'react';
import { nanoid } from 'nanoid';
import RequirementsAndRoleItem from './RequirementsAndRoleItem';
import StepNavigationBtn from './StepNavigationBtn';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>

}
//TODO: refactor this with JobDetailsInput2 component
const JobDetailsInput3: FC<Props> = ({step, setStep, register}: Props): JSX.Element => {
    const { state } = useStateMachine()

    // const [roleItemArr, setRoleItemArr] = useState<ReactElement[]>([
    //     <RequirementsAndRoleItem id={nanoid()} register={register} />,
    // ])
       const [roleItemArr, setRoleItemArr] = useState<ReactElement[]>([])
       const defaultRequirementsItems = () => {
        if (state.jobPost.role?.items?.length > 0 && roleItemArr.length === 0) {
            return state.jobPost.role?.items?.map((item) => {
                return (
                    <RequirementsAndRoleItem
                        id={nanoid()}
                        type="role"
                        register={register}
                        defaultValue={item}
                    />
                )
            })
        }
        return []
    }

    useEffect(() => {
        setRoleItemArr(defaultRequirementsItems())
    }, [])


  return (
    <>
        <div id="role" className="w-full">
        <div className="flex flex-col justify-between my-2 w-full">
            <label>Content</label>
            <textarea
                rows={5}
                required
                aria-required={true}
                className="w-12/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
                {...register('role-content')}

            />
        </div>
            <div className="flex w-full items-center">
                <h4 className="text-gray-200 text-1xl text-left my-2">
                    Relevant information items to this job's role
                </h4>
                <button
                    className="ml-4"
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        if (roleItemArr.length < 6) {
                            setRoleItemArr((prevState) => [
                                ...prevState,
                                <RequirementsAndRoleItem
                                    type="role"
                                    id={nanoid()}
                                    setRoleItemArr={setRoleItemArr}
                                    register={register}
                                />,
                            ])
                        }
                    }}
                >
                    +
                </button>
                {roleItemArr.length === 6 ? (
                <span className="inline-block text-red-600 ml-auto">
                    maximum items reached
                </span>
            ) : null}

            </div>
        <ul className="grid grid-cols-2 items-start justify-start w-full">
        
            {roleItemArr!.map((item: ReactElement, _index: number) =>
                createElement(item.type, {
                    key: nanoid(),
                    ...item.props,
                    setRoleItemArr,
                })
            )}
        </ul>
    </div>

    </>
  );
};

export default JobDetailsInput3;