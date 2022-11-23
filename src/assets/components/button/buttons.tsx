type ButtonsProps = {
    className: string,
    text: string
}

export const Buttons =({text}:ButtonsProps,{className}:ButtonsProps) => {
    return (
        <button>{text} {className}</button>
    )
}