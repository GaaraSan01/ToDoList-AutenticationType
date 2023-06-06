import Link from 'next/link';
import * as S from './style';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginData } from '@/app/types/typesUser';
import { LoginTodoList } from '@/app/hooks/useLogin';
import { useState } from 'react';

const FormLogin = () => {

    const loginUserSchema = z.object({
        email: string().nonempty('Preencha o campo email').email('Email invalido!').toLowerCase(),
        password: string().min(6, 'Minimo 6 caracteres').nonempty('O campo senha é obrigatório')
    })

    type LoginUserData = z.infer<typeof loginUserSchema>

    const {register, handleSubmit, formState: {errors}} = useForm<LoginUserData>({
        resolver: zodResolver(loginUserSchema)
    })
    const [showPass, setShowPass] = useState(true)

    const {mutate, isLoading} = LoginTodoList()

    async function loginUser ({email, password}: loginData) {
        
        mutate({email,password})
    }

    const checkShowPass = () => {
        setShowPass(!showPass)
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
            {errors.email && <S.Span>{errors.email.message}</S.Span>}
            <S.Div>
               <S.Input 
                    type={showPass ? 'password' : 'text'}
                    placeholder='Digite sua senha...'
                    {...register('password')}
               /> 
            </S.Div>
            {errors.password && <S.Span>{errors.password.message}</S.Span>}
            <S.DivSeePassword>
                <S.Checkedbox 
                    type='checkbox' 
                    id='showPassword'
                    onChange={checkShowPass}
                />
                <S.Label htmlFor='showPassword'>Mostrar senha</S.Label>
            </S.DivSeePassword>
            <S.Div>
                <Link href={"/cadastro"}>
                    <S.Link>Cadastre-se</S.Link>
                </Link>
               <S.Button>{isLoading ? 'Carregando...' : 'Login'}</S.Button>
            </S.Div>
        </S.Form>
    )
}

export default FormLogin