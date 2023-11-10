import { FC, useState, ReactElement, createElement } from 'react';
import { nanoid } from 'nanoid';
import RequirementsAndRoleItem from './RequirementsAndRoleItem';
import StepNavigationBtn from './StepNavigationBtn';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface Props {
    step: number,
    setStep: (step: number) => void,
    register: UseFormRegister<FieldValues>

}

const JobDetailsInput3: FC<Props> = ({step, setStep, register}: Props): JSX.Element => {

    const [roleItemArr, setRoleItemArr] = useState<ReactElement[]>([
        <RequirementsAndRoleItem id={nanoid()} register={register} />,
    ])



  return (
    <>
        <div id="role" className="w-full">
        <h4 className="text-gray-200 text-2xl text-left my-2">Role</h4>
        <div className="flex items-center justify-between my-2 w-full">
            <label>Content</label>
            <textarea
                rows={5}
                required
                aria-required={true}
                className="w-7/12 rounded-md border-0 px-4 py-3 placeholder-gray-300 shadow mr-2"
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
        <ul className="grid grid-cols-2 items-start justify-start w-full list-disc">
        
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