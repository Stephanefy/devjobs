import React, { Children, FC, ReactNode, useContext } from 'react'
import { TabContext } from './Tab'

interface Props {
    id: string
    children: ReactNode
}

const TabItem: FC<Props> = ({children, id}): JSX.Element => {
    const { openTab, setOpenTab } = useContext(TabContext)

    const isTabPanelOpen = openTab === id

    const toggleTab = (tabId: string) => {
        setOpenTab(tabId)
    }

    return (
        <div id={id} className='w-full mt-4'>
            {React.Children.map(children, (child: any) =>
                React.cloneElement(child, {
                    id,
                    openTab,
                    setOpenTab,
                    isTabPanelOpen,
                    toggleTab,
                })
            )}
        </div>
    )
}

export default TabItem
