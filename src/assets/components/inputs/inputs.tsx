type InputsProps = {
    className: string,
    placeholder: string
    name:string,
    id:string,
    type:string,
}

export const Inputs =({placeholder,className,name,id,type}:InputsProps) => {
    return (
        <input className={className} placeholder={placeholder} name={name} id={id} type={type}></input>
    )
}