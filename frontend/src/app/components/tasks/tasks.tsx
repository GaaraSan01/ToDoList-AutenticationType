import * as S from './style';
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"


const Task = () => {
    return(
        <>
            <S.Container>
                <S.Div>
                    <S.Title>Test</S.Title>
                </S.Div>
                <S.Div>
                    <S.P>Testando 123</S.P>
                </S.Div>
                <S.Div>
                    <S.Select>
                        <option value="Pendente">Pendente</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Finalizado">Finalizado</option>
                    </S.Select>
                </S.Div>
                <S.Div>
                    <S.Title color='#f1f1f1'><FaEdit/></S.Title>
                    <S.Title color='red'><MdDelete/></S.Title>
                </S.Div>
            </S.Container>
        </>
    )
};

export default Task