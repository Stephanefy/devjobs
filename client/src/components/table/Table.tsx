import TableHeader from './TableHeader'
import { SentMessage } from '../../store/message'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    type: "received" | "sent"
    sentMessages?: SentMessage[]
    setSelectedMesage?: Dispatch<SetStateAction<string>>
}

const Table = ({ sentMessages, setSelectedMesage, type }: Props) => {



    return (
        <table className="w-full table-auto">
            <TableHeader type={type} />
            <tbody className='text-center divide-x-4 divide-y-4 overflow-auto'>
                {sentMessages?.length &&
                    sentMessages.map((message) => (
                        <tr key={message.id} className='bg-gray-300 cursor-pointer' onClick={() => {
                          if(setSelectedMesage)
                          setSelectedMesage(message.content)
                          
                          }}>
                            <td className=''>{message.receiver.email}</td>
                            <td className=''>{new Date(message.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default Table
