import { useContext, useEffect, useState } from 'react'
import MessageTable from '../../../components/MessageTable'
import { useQuery } from 'react-query'
import { AuthContext } from '../../../context/AuthContext'
import { getMessageAsReceiver } from '../../../api/message'

type Props = {}

const MessagePanel = (props: Props) => {
    const { state } = useContext(AuthContext)

    const userId: string = state.user!.id

    const { data, isLoading, isError, error } = useQuery(
        'messagesByReceiver',
        () => getMessageAsReceiver(userId)
    )

    const [selectedMessage, setSelectedMessage] = useState<string>('')

    useEffect(() => {
        console.log(selectedMessage)
    }, [selectedMessage])

    return (
        <section className="w-8/12 my-8">
            <h2 className="text-2xl py-2 font-semibold">Sent Messages</h2>
            <div className="w-full flex justify-between space-x-4">
                <MessageTable
                    sentMessages={data?.data}
                    setSelectedMessage={setSelectedMessage}
                />
                {selectedMessage && (
                    <div className='bg-white w-6/12 p-4 h-[500px] rounded-lg'>
                        <p>{selectedMessage}</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MessagePanel
