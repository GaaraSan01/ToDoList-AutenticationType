import * as S from './style';

const FormTask = () => {
    return(
        <>
            <S.Form>
                <S.Input type='text' placeholder='Digite sua tarefa...' />
                <S.Button>+</S.Button>
            </S.Form>
        </>
    )
}

export default FormTask