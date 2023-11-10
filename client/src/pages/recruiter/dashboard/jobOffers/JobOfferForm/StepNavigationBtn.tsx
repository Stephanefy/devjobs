import { FC } from 'react'

interface Props {
    step: number,
    setStep: (step: number) => void
}

const StepNavigationBtn: FC<Props> = ({step, setStep}: Props): JSX.Element => {
    return (
        <div className="mt-6 flex w-full justify-between">
            {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)}>Previous</button>
            ) : null}
            {step < 5 ? (
                <button type="submit" onClick={() => setStep(step + 1)} className="ml-auto">
                    Next
                </button>
            ) : null}
        </div>
    )
}

export default StepNavigationBtn
