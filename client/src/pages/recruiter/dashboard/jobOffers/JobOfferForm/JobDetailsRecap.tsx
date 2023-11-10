import { FC } from 'react'
import { useStateMachine } from 'little-state-machine'

interface Props {}

const JobDetailsRecap: FC<Props> = (props): JSX.Element => {
    const { getState } = useStateMachine()
    const { jobPost } = getState()

    return (
        <section className="flex flex-col items-center w-full bg-app-violet p-3 py-16 text-white ">
            <h3 className="text-center text-white text-2xl">
                Job details recap
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-start w-full">
                <ul className="space-y-3 p-5">
                    <li className='list-disc'>Your Company name: {jobPost?.company}</li>
                    <li className='list-disc'>Job position: {jobPost?.position}</li>
                    <li className='list-disc'>Contract: {jobPost.contract}</li>
                    <li className='list-disc'>Job description: {jobPost.description}</li>
                    <li className='list-disc'>Job location: {jobPost.location}</li>
                    <li className='list-disc'>Your website: {jobPost.website}</li>
                </ul>
                <ul className='space-y-3 p-5'>
                    <li>
                        <h3>Requirements</h3>
                        <ul className="space-y-3 p-5">
                            <li>Content: {jobPost?.requirements?.content}</li>
                            <li>
                                <ul>
                                    {jobPost?.requirements?.items.map(
                                        (item, index) => (
                                            <li className="list-disc" key={index}>
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className='space-y-3 p-5'>
                    <li>
                        <h3>Role</h3>
                        <ul className="space-y-3 p-5">
                            <li>Content: {jobPost?.role?.content}</li>
                            <li>
                                <ul>
                                    {jobPost?.role?.items.map((item, index) => (
                                        <li className="list-disc" key={index}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default JobDetailsRecap
