import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'
import { createContext } from 'react'

interface Props {
    children: ReactNode
}

export type TabContextType = {
    openTab: string
    setOpenTab: Dispatch<SetStateAction<string>>
}

export const TabContext = createContext<TabContextType>({
    openTab: '',
    setOpenTab: () => {},
})

const Tab: FC<Props> = (props): JSX.Element => {
    const [openTab, setOpenTab] = useState<string>('')

    return (
        <TabContext.Provider value={{ openTab, setOpenTab }}>
            <div className='w-full flex space-x-1 relative'>
                {props.children}
            </div>
        </TabContext.Provider>
    )
}

export default Tab
