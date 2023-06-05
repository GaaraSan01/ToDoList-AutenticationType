import baseUrl from "../api/_api"
import { loginData } from "../types/typesUser"
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import {useMutation, useQueryClient} from 'react-query'

const loginUser = async({email, password}: loginData) => {
    
    const response = await baseUrl.post('/login',{
        email,
        password
    })
    const { token } = response.data

    if(token){
        baseUrl.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
    
    setCookie(undefined, 'todo-token', token, {
        maxAge: 60 * 60 * 1 // 1h hora
    })
}

export function LoginTodoList(){
    const { push } = useRouter()
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            queryClient.invalidateQueries(['task-data'])
            push('/layout')
        }
    })
    return mutate
}