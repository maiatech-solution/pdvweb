type ButtonsProps = {
    className: string,
    text: string
}

export const Buttons =({text,className}:ButtonsProps) => {
    return (
        <button className={className}>{text} </button>
    )
}