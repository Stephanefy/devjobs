import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    isTabPanelOpen?: boolean
}

const TabPanel = (props: Props) => {
  
  if (!props.isTabPanelOpen) {
    return null;
  }
  
  return (
    <div className='mt-4 sm:mt-4 w-full absolute inset-0 top-10'>{props.children}</div>
  )
}

export default TabPanel;