import React from 'react'
import { motion } from 'framer-motion'

type StepProps = {
    step: number
    currentStep: number
}

type CheckIconProps = {
    className: string
}

function Step({ step, currentStep }: StepProps) {
    let status =
        currentStep === step
            ? 'active'
            : currentStep < step
            ? 'inactive'
            : 'complete'

    return (
        <motion.div animate={status} className="relative">
            <motion.div
                variants={{
                    active: {
                        scale: 1,
                        transition: {
                            delay: 0,
                            duration: 0.2,
                        },
                    },
                    complete: {
                        scale: 1.25,
                    },
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.2,
                    type: 'tween',
                    ease: 'circOut',
                }}
                className="absolute inset-0 rounded-full bg-blue-200"
            ></motion.div>

            <motion.div
                initial={false}
                variants={{
                    inactive: {
                        backgroundColor: 'var(--white)',
                        borderColor: 'var(--app-violet)',
                        color: 'var(--app-violet)',
                    },
                    active: {
                        backgroundColor: 'var(--app-violet)',
                        borderColor: 'var(--blue-500)',
                        color: 'var(--white)',
                    },
                    complete: {
                        backgroundColor: 'var(--app-violet)',
                        borderColor: 'var(--blue-500)',
                        color: 'var(--blue-500)',
                    },
                }}
                transition={{ duration: 0.2 }}
                className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
            >
                <div className="flex items-center justify-center">
                    {status === 'complete' ? (
                        <CheckIcon className="h-6 w-6 text-white" />
                    ) : (
                        <span>{step}</span>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}


function CheckIcon(props: CheckIconProps) {
    return (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
        >
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    delay: 0.2,
                    type: 'tween',
                    ease: 'easeOut',
                    duration: 0.3,
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
            />
        </svg>
    )
}


export default Step