import { Dispatch, SetStateAction, useContext } from 'react'
import { getMessageAsReceiver, getSentMessages } from '../api/message'
import Table from './table/Table'
import { useQuery } from 'react-query'
import { AuthContext } from '../context/AuthContext'
import { SentMessage } from '../store/message'

type Props = {
    setSelectedMessage: Dispatch<SetStateAction<string>>
    sentMessages?: SentMessage[]
}

const headerData = ['to', 'date']

const MessageTable = (props: Props) => {
    return (
        <div className='w-full'>
            <Table
                headerData={headerData}
                sentMessages={props.sentMessages}
                setSelectedMesage={props.setSelectedMessage}
            />
        </div>
    )
}

export default MessageTable
