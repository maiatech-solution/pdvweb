import styled from "styled-components";

type imgProps = {
    src: string;
}

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    margin-bottom: 2rem;
    .bg-red-new{
        background-color: #eb3237;
    }

    .bg-red-new:hover{
        background-color: #8b0000;
    }
`
