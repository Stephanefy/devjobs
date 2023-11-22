import { createContext, useReducer, useEffect, ReactNode, Dispatch } from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";

type ChildrenProps = {
    children: ReactNode
}

export type User = {
        id: number,
        message: string,
        email: string,
        role: "JOB_SEEKER" | "EMPLOYER" | string,
}

export type AuthReducerState = {
    user: User | undefined
}


export const AuthContext = createContext<{
    state: AuthReducerState
    dispatch: Dispatch<{ type: string; payload?: User; }>
}>({
    state: { user: { id: 0, message: "", email: "", role: "" }},
    dispatch: () => null
});

export const authReducer = (state: AuthReducerState, action: { type: string; payload?: User; }) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload,
        }
        case "LOGOUT":
            return {
                user: { id: 0, message: "", email: "", role: "" },
            }
        default: return state
    }
}

const initialState: AuthReducerState = { user: { id: 0, message: "", email: "", role: "" }}

export const AuthContextProvder = ({ children } : ChildrenProps) => {

    const [user, setUser ] = useLocalStorage<User>('user', { id: 0, message: "", email: "", role: ""} )

    console.log('from context', user)

    useEffect(() => {
        if (Object.values(user).length > 0) {
            dispatch({type:"LOGIN", payload: user})
        }
    },[])
    



    const [state, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
        console.log('state from AuthContext',state)
    }, [state])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}