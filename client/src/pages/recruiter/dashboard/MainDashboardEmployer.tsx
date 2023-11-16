import { FC, useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { AuthContext } from '../../../context/AuthContext'
import { Outlet } from 'react-router-dom'

interface Props {}

const MainDashboardEmployer: FC<Props> = (props): JSX.Element => {
    const { state } = useContext(AuthContext)

    useEffect(() => {
        fetch('/api/user', { credentials: 'include' })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div className="w-full h-full flex lg:justify-center items-start bg-gray-200">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default MainDashboardEmployer
