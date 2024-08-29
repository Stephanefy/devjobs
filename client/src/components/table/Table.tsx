import TableHeader from './TableHeader'
import { SentMessage } from '../../../../.history/client/src/store/message_20240829211520'
import { Dispatch, SetStateAction } from 'react'

type Props = {
    headerData: string[]
    sentMessages?: SentMessage[]
    setSelectedMesage?: Dispatch<SetStateAction<string>>
}

const Table = ({ headerData, sentMessages, setSelectedMesage }: Props) => {



    return (
        <table className="w-full table-auto">
            <TableHeader headerData={headerData} />
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
