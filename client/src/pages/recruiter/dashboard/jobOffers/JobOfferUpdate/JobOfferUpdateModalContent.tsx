import { FC } from 'react'
import FormIndex from './FormIndex'
import { useState } from 'react'

interface Props {
    selectedJobId: string
}

const JobOfferUpdateModalContent: FC<Props> = (props): JSX.Element => {

    return (
        <div className="mt-4 flex flex-col justify-between w-full z-50 lg:px-16 pb-24 pt-12 rounded-md">
            <h3 className="text-5xl text-center mb-6">Edit your job post</h3>
            <FormIndex selectedJobId={props.selectedJobId}/>
        </div>
    )
}

export default JobOfferUpdateModalContent
