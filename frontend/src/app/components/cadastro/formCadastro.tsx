import * as S from './style'

const CadastroForm = () => {
    return(
        <>
            <S.Form>
                <S.Title>Cadastrar</S.Title>
                <S.Div>
                    <S.Input type='text' placeholder='Digite seu nome...'/>
                </S.Div>
                <S.Div>
                    <S.Input type='email' placeholder='Digite seu e-mail...'/>
                </S.Div>
                <S.Div>
                    <S.Input type='password' placeholder='Digite sua senha...'/>
                </S.Div>
                <S.Div>
                    <S.Input type='password' placeholder='Digite sua senha...'/>
                </S.Div>
                <S.Div>
                    <S.Link href='/'>Voltar</S.Link>
                    <S.Button>Cadastrar</S.Button>
                </S.Div>
            </S.Form>
        </>
    )
}

export default CadastroForm