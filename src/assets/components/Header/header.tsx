type Props = {
    text: string;
    className:string
}

export const Header = ({text,className}:Props) => {
    return(
        <header className=" header-home">
                <h2 className={className}>{text}</h2>
            </header>
    )
}