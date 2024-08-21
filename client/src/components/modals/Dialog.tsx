import { Dispatch, SetStateAction, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Button from '../Button'

interface Props {
    dialogTitle: string
    dialogDescription: string
    dialogMessage: string
    dialogValidate: string
    dialogCancel: string
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

function MyDialog({
    dialogTitle,
    dialogDescription,
    dialogMessage,
    dialogValidate,
    dialogCancel,
    open,
    setOpen,
}: Props) {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            className="relaitve z-50"
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white p-5">
                    <Dialog.Title className="text-2xl font-semibold my-2">
                        jifdjsfsdlk
                        {dialogTitle}
                    </Dialog.Title>
                    <Dialog.Description className="mb-2">
                        {dialogDescription}
                    </Dialog.Description>

                    <p className="mt-2">{dialogMessage}</p>

                    <div className="flex flex-col items-between justify-between mt-2 h-24">
                        <Button
                            onClick={() => setOpen(false)}
                            text1={dialogCancel}
                            background="bg-red-600"
                            paddingY="py-2"
                            textColor="text-white"
                        />
                        <Button
                            background="bg-app-violet"
                            paddingY="py-2"
                            textColor="text-white"
                            onClick={() => setOpen(false)}
                            text1={dialogValidate}
                        />
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default MyDialog
