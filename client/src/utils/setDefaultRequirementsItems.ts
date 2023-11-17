import { GlobalState } from 'little-state-machine/dist/types'
import React, { ReactElement } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const setDefaultRequirementsItems = (
    currentGlobalState: GlobalState,
    currentLocalState: ReactElement[],
    registerFunc: UseFormRegister<FieldValues>,
    id: string
) => {
    if (
        currentGlobalState.jobPost.requirements?.items?.length > 0 &&
        currentLocalState.length === 0
    ) {
        return currentGlobalState.jobPost.requirements?.items?.map((item) => {
            return React.createElement('li', {
                defaultValue: item,
                id,
                register: registerFunc,
            })
        })
    }
    return []
}

export default setDefaultRequirementsItems
