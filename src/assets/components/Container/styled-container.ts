import styled from "styled-components";

type imgProps = {
    src: string;
}

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    align-items: center; 
    background-color: #008584;
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
    font-size: 4.5em;
    text-align: center;
    color: white;
`
