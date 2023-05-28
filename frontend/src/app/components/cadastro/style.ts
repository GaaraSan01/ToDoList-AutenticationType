import styled from "styled-components";

export const Form = styled.form`
    height: 400px;
    width: 320px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--secundary-color);
`;

export const Div = styled.div`
    height: 40px;
    width: 90%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5pc;
`;

export const Input = styled.input`
    background: var(--terciary-color);
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 5px;

    :focus{
        outline: none;
    }
`;

export const Button = styled.button`
    font-weight: bold;
    font-size: 14px;
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: var(--terciary-color);
    border: solid 1.2px var(--primary-color);
    transition: ease-in-out 0.3s;
    cursor: pointer;

    :hover{
        background: var(--primary-color);
        color: var(--terciary-color);
    }
`;

export const Link = styled.a`
    color: var(--primary-color);
    font-weight: bold;
`;

export const Title = styled.h1`
    color: var(--primary-color);
    margin-bottom: 10px;
`