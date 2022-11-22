import styled from "styled-components";

type imgProps = {
    src: string;
}

export const Footer = styled.div`
    display:flex;
    justify-content: center;
    padding: 5px;
    height: 20vh;
    width: 30%;
    margin: 0 auto;
`
export const Img = styled.img<imgProps>`
        width: 10em;
        min-height: 10em;
`;  