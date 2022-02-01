import './style.css'

const Input = ({onChange, value, id, name, type}) => {
    return (
        <>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                value={value}/>
        </>
    )
}

export default Input;