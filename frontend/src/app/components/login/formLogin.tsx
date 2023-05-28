import * as S from './style';

const FormLogin = () => {
    return(
        <S.Form>
            <S.Title>Login</S.Title>
            <S.Div>
               <S.Input type='email' placeholder='Digite seu email...'/> 
            </S.Div>
            <S.Div>
               <S.Input type='password' placeholder='Digite sua senha...'/> 
            </S.Div>
            <S.Div>
                <S.Link href='/cadastro'>Cadastrar - se</S.Link>
               <S.Button>Continue</S.Button>
            </S.Div>
        </S.Form>
    )
}

export default FormLogin