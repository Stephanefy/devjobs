import { MouseEvent } from 'react'
import { useStateMachine } from 'little-state-machine'
import {updateSignUp}  from '../../utils/updateAction';
import { useForm } from 'react-hook-form';


type Props = {
    onstephandler: (e: any) => void
}

const FirstSteps = ({ onstephandler }: Props) => {


    const { actions, state } = useStateMachine({ updateSignUp })
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log("state from little State machine",state)

    const onSubmit = handleSubmit((data, e) : void => {    
        onstephandler(e)
        actions.updateSignUp({email: data.email})
      })

    return (
        <form 
        id="step-1"
        onSubmit={onSubmit}
        className="p-8">
            <label htmlFor="email">
                <span className="block text-white mb-2">email</span>
            </label>
            <input
                type="Email address" 
                className="w-full p-2 rounded-lg"
                {...register('email',{ required: true })}
            />
            <button 
            className='w-full mt-6 bg-app-violet text-white rounded-lg p-2 '
            type="submit" 
            >
                what is your role ?
            </button>
        </form>
    )
}

export default FirstSteps
