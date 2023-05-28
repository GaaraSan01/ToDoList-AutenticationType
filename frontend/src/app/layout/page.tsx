'use client';
import * as S from './style';
import FormTask from '../components/formTask/formTask';
import Task from '../components/tasks/tasks';

const ToDoList = () => {
    return(
        <>
            <S.Container>
                <FormTask/>
                <Task />
            </S.Container>
        </>
    )
}

export default ToDoList