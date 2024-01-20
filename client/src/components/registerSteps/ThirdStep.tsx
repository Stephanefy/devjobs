import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { updateSignUp } from '../../utils/updateAction'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { useQuery } from 'react-query'
import axios from 'axios'

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

const ThirdStep = ({ setStep }: Props) => {
    const { register, handleSubmit } = useForm()
    const { actions, state } = useStateMachine({ updateSignUp })
    const navigate = useNavigate()
    let options;

    const { isLoading, data } = useQuery('skillsList', async() => {
        const response = await axios.get('http://localhost:8000/skills-list')
        return response.data
    })

    console.log(data)
    if (!isLoading && data) {
         options = data?.data.map((skill: {id: string, skillName: string}) => {
            return { value: skill.skillName, label: skill.skillName }
        })
    }

    const onSubmit = handleSubmit((data, e) => {
        console.log(e)
        console.log('data', data)
        console.log(data.password)
        console.log('actions', actions)
        actions.updateSignUp({ password: data.password })
        navigate('/confirm-signup')
    })

    return (
        <form id="step-3" onSubmit={onSubmit} className="p-6 md:p-12">
            <h3 className="text-2xl text-white dark:text-gray-400">
                JobSeeker
            </h3>
            <div className="my-2">
                <p className="text-white">{state.data.email}</p>
            </div>
            <div className="mt-4">
                <label htmlFor="skills">
                    <span className="block text-gray-400">Skillset</span>
                </label>
                <Select
                    isMulti
                    options={options}
                />
            </div>
            <div className="mt-4">
                <label htmlFor="password">
                    <span className="block text-gray-400">password</span>
                </label>
                <input
                    type="password"
                    className="w-full p-2 rounded-lg mt-2 text-2xl"
                    {...register('password', { required: true })}
                />
            </div>
            <button
                onClick={() => setStep(2)}
                className="w-full mt-6 bg-app-light-grey text-dark rounded-lg p-2 "
            >
                Back
            </button>
            <button
                className="w-full mt-6 bg-app-light-grey text-dark rounded-lg p-2 "
                type="submit"
            >
                Create an Job seeker account
            </button>
        </form>
    )
}

export default ThirdStep
