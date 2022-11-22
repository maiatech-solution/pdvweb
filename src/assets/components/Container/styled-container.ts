import styled from "styled-components";

type imgProps = {
    src: string;
}

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 70vh;
`

export const H1 = styled.h1`
    margin:2em 0px;
    font-size: 3em;
    color: white;
`

export const Inputs = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    width: 20%;
    gap: 1em;

    input{
        width: 100%;
        outline: none;
        padding: 10px;
        border-radius: 10px;
        border: none;
    }

`

export const Buttons = styled.div`
    display: flex;
    gap: 2em;
    margin-top: 1em;

    button{
        background-color: transparent;
        padding: 10px;
        border: white 1px solid;
        color: white;
        border-radius: 10px;
    }

    button:hover{
        color: #008584;
        background-color: white;
    }
`

export const Icons = styled.div`
    font-size: 10em;
    text-align: center;
    color: white;
`
