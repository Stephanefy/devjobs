import { FC, useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import SidebarIcons from './SidebarIcon'
import { AuthContext } from '../../context/AuthContext'
import { Outlet } from 'react-router-dom'
import { useStateMachine } from 'little-state-machine'
import classNames from 'classnames'

interface Props {}

const MainDashboardEmployer: FC<Props> = (props): JSX.Element => {
    const { state } = useContext(AuthContext)
    const { state: littleStateMachineState } = useStateMachine()


    console.log(littleStateMachineState)

    return (
        <div className={classNames(`w-full h-full flex lg:justify-center items-start bg-gray-200`, {
            
        })}>
            <SidebarIcons role={state?.user!.role}/>
            <Sidebar role={state?.user!.role}/>
            <Outlet/>
        </div>
    )
}

export default MainDashboardEmployer
