import {
    Dispatch,
    SetStateAction,
    ReactElement,
    JSXElementConstructor,
    FC,
} from 'react'

import { UseFormRegister, FieldValues } from 'react-hook-form'

interface Props {
    id: string
    type: string,
    defaultValue?: string
    setRoleItemArr?: Dispatch<
        SetStateAction<ReactElement<any, string | JSXElementConstructor<any>>[]>
    >
    register: UseFormRegister<FieldValues>
}

const RequirementsAndRoleItem: FC<Props> = (props: Props): JSX.Element => {
    return (
        <li className="w-full transition ease-in duration-100 justify-stretch h-full my-1">
            <div className='w-full my-0'>
                <label htmlFor={props.id} className="hidden">
                    Items
                </label>
                {
                    props.type === "requirements" ? (
                        <input
                        id={`item-${props.id}`}
                        type="text"
                        defaultValue={props.defaultValue}
                        required={false}
                        className="w-10/12 mx-2 rounded-md border-0 px-4 py-4 placeholder-gray-300 shadow h-2/3"
                        {...props.register(`requirements-items.${props.id}`)}
                    />
                    ) :  (
                        <input
                        id={`item-${props.id}`}
                        type="text"
                        defaultValue={props.defaultValue}
                        required={false}
                        className="w-10/12 mx-2 rounded-md border-0 px-4 py-4 placeholder-gray-300 shadow h-2/3"
                        {...props.register(`role-items.${props.id}`)}
                    />
                    )
                }

                <button
                    className="ml-4 my-auto"
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation()
                        if (props.setRoleItemArr)
                            props.setRoleItemArr((prevState) => [
                                ...prevState].filter(element => element.props.id !== props.id)
                                )
                    }}
                >
                    -
                </button>

            </div>
        </li>
    )
}

export default RequirementsAndRoleItem
