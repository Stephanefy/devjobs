import React from 'react'

type Props = {
    id?: string
    children?: React.ReactNode
    toggleTab?: (id: string) => void
}

const TabHeader = (props: Props) => {
    return (
        <h3
            className="text-sm sm:text-1xl text-white font-semibold cursor-pointer bg-app-violet p-2 w-3/3 rounded-tr-lg rounded-tl-lg"
            onClick={() =>
                props.toggleTab && props.id && props.toggleTab(props.id)
            }
        >
            {props.children && props.children}
        </h3>
    )
}

export default TabHeader
