type CardsProps = {
    className?: string,
    text: string
}

export const Cards = ({className,text}:CardsProps) => {
    return(
        <button className={className}>{text}</button>
    )
}