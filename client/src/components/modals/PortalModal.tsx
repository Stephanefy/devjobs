import { FC, ReactNode, useEffect, Fragment } from 'react'
import ReactPortals from '../portals/ReactPortals'
import { Transition } from '@headlessui/react'

interface Props {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

const PortalModal: FC<Props> = ({
    children,
    isOpen,
    onClose,
}: Props): JSX.Element | null => {
    useEffect(() => {
        const closeOnEscapeKey = (e: { key: string }) =>
            e.key === 'Escape' ? onClose() : null
        document.body.addEventListener('keydown', closeOnEscapeKey)
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey)
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <ReactPortals wrapperId="modal-container">
            <Transition
                as={Fragment}
                show={isOpen}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed flex items-center justify-center h-full z-50 inset-0 w-screen bg-app-midnight bg-opacity-50 ">
                    <div className="flex mb-12 my-auto justify-center w-full z-50">
                        {children}
                    </div>
                </div>
            </Transition>
        </ReactPortals>
    )
}

export default PortalModal
