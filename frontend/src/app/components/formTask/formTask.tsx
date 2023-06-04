import * as S from './style';

const FormTask = () => {
    return(
        <>
            <S.Form>
                <S.Input type='text' placeholder='Digite o titulo da tarefa...' />
                <S.Input type='text' placeholder='Digite a descrição da tarefa...' />
                <S.Button>+</S.Button>
            </S.Form>
        </>
    )
}

export default FormTask