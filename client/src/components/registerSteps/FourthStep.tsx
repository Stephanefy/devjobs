import { useStateMachine } from 'little-state-machine'
import { useForm } from 'react-hook-form'
import { updateSignUp } from '../../utils/updateAction'
import { useNavigate } from 'react-router-dom'

interface Props {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const FourthStep = ({ step, setStep }: Props) => {
    const { register, handleSubmit } = useForm()
    const { actions, state } = useStateMachine({ updateSignUp })
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data, e) => {
        console.log(e)
        console.log(data.password)
        console.log('actions', actions)
        actions.updateSignUp({ password: data.password })
        navigate('/confirm-signup')
    })

    return (
        <form id="step-4" onSubmit={onSubmit} className="p-6 md:p-12">
          <div className='my-2'>
              <h3 className="text-2xl text-white dark:text-gray-400">Employer</h3>
          </div>
          <div className='my-2'>
            <p className='text-white'>{state.data.email}</p>
          </div>
          <div className='my-2'>
              <label htmlFor="password">
                  <span className="inline-block text-gray-400 mb-2">password</span>
              </label>
              <input
                  id="password"
                  aria-required="true"
                  type="password"
                  className="w-full p-2 rounded-lg text-4xl"
                  {...register('password', { required: true })}
              />
          </div>
            <button
                className="w-full mt-6 bg-app-light-grey text-dark rounded-lg p-2"
                onClick={() => setStep(2)}
            >
                Back
            </button>
            <button
                className="w-full mt-6 bg-app-light-grey text-dark rounded-lg p-2 "
                type="submit"
            >
                Create an employer account
            </button>
        </form>
    )
}

export default FourthStep
