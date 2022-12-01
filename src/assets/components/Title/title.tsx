type TitleProps = {
    text:string,
    className: string
}

export const Title = ({text,className}:TitleProps) => {
    return (
        <h1 className={className}>{text}</h1>
    )
}
