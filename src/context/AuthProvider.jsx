import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false
}

export const AuthProviver = ({children}) => {

    const [authState, dispatch] = useReducer( authReducer, initialState );
    return (
        <AuthContext.Provider value={{}} >
            {children}
        </AuthContext.Provider>
    )
}