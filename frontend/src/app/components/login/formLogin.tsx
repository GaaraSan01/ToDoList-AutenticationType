import Link from 'next/link';
import * as S from './style';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '../isAutencated/authContext';
import { useContext } from 'react';

const FormLogin = () => {

    const loginUserSchema = z.object({
        email: string().nonempty('Preencha o campo email').email('Email invalido!').toLowerCase(),
        password: string().min(6, 'Minimo 6 caracteres').nonempty('O campo senha é obrigatório')
    })

    type LoginUserData = z.infer<typeof loginUserSchema>

    const {register, handleSubmit, formState: {errors}} = useForm<LoginUserData>({
        resolver: zodResolver(loginUserSchema)
    })


    const { loginUser } = useContext(AuthContext)

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