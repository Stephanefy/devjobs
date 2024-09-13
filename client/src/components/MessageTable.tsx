import { Dispatch, SetStateAction, useContext } from 'react'
import { getMessageAsReceiver, getSentMessages } from '../api/message'
import Table from './table/Table'
import { useQuery } from 'react-query'
import { AuthContext } from '../context/AuthContext'
import { SentMessage, ReceivedMessage } from '../store/message'

type Props = {
    type: "sent" | "received"
    setSelectedMessage: Dispatch<SetStateAction<string>>
    sentMessages?: SentMessage[],
    receivedMessages?: ReceivedMessage[]
}

const headerData = ['to', 'date']

const MessageTable = (props: Props) => {
    return (
        <div className='w-full'>
            <Table
                type={props.type}
                sentMessages={props.sentMessages}
                setSelectedMesage={props.setSelectedMessage}
            />
        </div>
    )
}

export default MessageTable
