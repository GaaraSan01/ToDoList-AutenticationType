import { createContext } from 'react'
import baseUrl from '@/app/api/_api'
import { setCookie } from 'nookies'
import { loginData } from '@/app/types/typesUser'

type AuthContextType = {
    isAutenticated: boolean,
    loginUser: (data: loginData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any){
    const isAutenticated = false

    async function loginUser ({email, password}: loginData) {
        try {
            const response = await baseUrl.post('/login', {
                email,
                password
            })
            const {token} = await response.data
            
            setCookie(undefined, 'todo-token', token, {
                maxAge: 60 * 60 * 1 // 1h hora
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value={{isAutenticated, loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}