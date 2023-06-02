import Link from 'next/link';
import * as S from './style';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { setCookie } from 'nookies';
import baseUrl from '@/app/api/_api'
import { loginData } from '@/app/types/typesUser';
import { useRouter } from 'next/navigation';


const FormLogin = () => {

    const loginUserSchema = z.object({
        email: string().nonempty('Preencha o campo email').email('Email invalido!').toLowerCase(),
        password: string().min(6, 'Minimo 6 caracteres').nonempty('O campo senha é obrigatório')
    })

    type LoginUserData = z.infer<typeof loginUserSchema>

    const {register, handleSubmit, formState: {errors}} = useForm<LoginUserData>({
        resolver: zodResolver(loginUserSchema)
    })

    const { push } = useRouter()

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

            push('/layout')            
        } catch (error) {
            console.log(error)
            alert('Usuário ou senha incorretos!')
        }
    }

    return(
        <S.Form onSubmit={handleSubmit(loginUser)}>
            <S.Title>Login</S.Title>
            <S.Div>
               <S.Input 
                    type='email' 
                    placeholder='Digite seu email...'
                    {...register('email')}
               /> 
            </S.Div>
            {errors.email && <span>{errors.email.message}</span>}
            <S.Div>
               <S.Input 
                    type='password' 
                    placeholder='Digite sua senha...'
                    {...register('password')}
               /> 
            </S.Div>
            {errors.password && <span>{errors.password.message}</span>}
            <S.Div>
                <Link href={"/cadastro"}>
                    <S.Link>Cadastre-se</S.Link>
                </Link>
               <S.Button>Continue</S.Button>
            </S.Div>
        </S.Form>
    )
}

export default FormLogin