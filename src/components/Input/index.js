import './style.css'
import PropTypes from 'prop-types'

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

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;