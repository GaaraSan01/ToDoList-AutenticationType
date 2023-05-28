import Link from 'next/link';
import * as S from './style';
import { useState } from 'react';

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return(
        <S.Form>
            <S.Title>Login</S.Title>
            <S.Div>
               <S.Input 
                    type='email' 
                    placeholder='Digite seu email...'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
               /> 
            </S.Div>
            <S.Div>
               <S.Input 
                    type='password' 
                    placeholder='Digite sua senha...'
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
               /> 
            </S.Div>
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