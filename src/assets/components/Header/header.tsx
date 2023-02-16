type Props = {
    text: string;
}

export const Header = ({text}:Props) => {
    return(
        <header className=" header-home">
                <h2 className='h2-header '>{text}</h2>
            </header>
    )
}