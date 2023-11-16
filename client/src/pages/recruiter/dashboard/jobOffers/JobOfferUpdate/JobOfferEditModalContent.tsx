import { FC } from 'react'
import FormIndex from './FormIndex'
import { useState } from 'react'
import Button from '../../../../../components/Button'

interface Props {
    selectedJobId: string
    setOpenPanel2: (arg0:boolean) => void
}

const JobOfferEditModalContent: FC<Props> = (props): JSX.Element => {

    return (
        <div className="mt-4 flex flex-col justify-between w-full z-50 lg:px-16 pb-24 pt-12 rounded-md">
            <h3 className="text-5xl text-center mb-6">Edit your job post</h3>
            <div className='w-10 ml-4 mb-5'>
                <Button
                buttonType='button'
                background='bg-app-violet'
                textColor='text-white'
                onClick={() => props.setOpenPanel2(false)}
                text1='back'
                paddingX='px-4'
                paddingY='py-2'
                />
            </div>
            <FormIndex selectedJobId={props.selectedJobId}/>
        </div>
    )
}

export default JobOfferEditModalContent
