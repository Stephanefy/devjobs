import { useContext, useEffect, useState } from 'react'
import MessageTable from '../../../components/MessageTable'
import { useQuery } from 'react-query'
import { AuthContext } from '../../../context/AuthContext'
import { getMessageAsReceiver } from '../../../api/message'
import Tab from '../../../components/tabs/Tab'
import TabItem from '../../../components/tabs/TabItem'
import TabHeader from '../../../components/tabs/TabHeader'
import TabPanel from '../../../components/tabs/TabPanel'

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
        <section className="w-12/12 sm:w-8/12 mx-auto">
            <h1 className="text-3xl font-semibold">Messages</h1>
            <Tab>
                <TabItem id="1">
                    <TabHeader>Inbox</TabHeader>
                    <TabPanel>
                        <div className="w-full flex justify-between space-x-3">
                            <MessageTable
                                type={"received"}
                                receivedMessages={data?.data}
                                setSelectedMessage={setSelectedMessage}
                            />
                            {selectedMessage && (
                                <div className="bg-white w-7/12 p-4 h-[500px] rounded-lg">
                                    <p>{selectedMessage}</p>
                                </div>
                            )}
                        </div>
                    </TabPanel>
                </TabItem>
                <TabItem id="2">
                    <TabHeader>Sent</TabHeader>
                    <TabPanel>
                        <div className="w-full flex justify-between space-x-3">
                            <MessageTable
                                type="sent"
                                sentMessages={data?.data}
                                setSelectedMessage={setSelectedMessage}
                            />
                            {selectedMessage && (
                                <div className="bg-white w-7/12 p-4 h-[500px] rounded-lg">
                                    <p>{selectedMessage}</p>
                                </div>
                            )}
                        </div>
                    </TabPanel>
                </TabItem>
            </Tab>
        </section>
    )
}

export default MessagePanel
