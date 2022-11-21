import styled from "styled-components";

type imgProps = {
    src: string;
}

export const Header = styled.div`
    display:flex;
    justify-content: center;
    padding: 5px;
    background-color: #008584;
    height: 20vh;
    border-bottom: 1px solid white;
`

export const Img = styled.img<imgProps>`
        width: 10em;
`;  