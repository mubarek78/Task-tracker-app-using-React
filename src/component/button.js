import propTypes from 'prop-types'


const Button = (props) => {   
    return <button onClick={props.Click}  style={{backgroundColor: props.color ? 'red' :'green' }} className = 'btn'>{props.color ? "Colaps" :'Add' }</button>  
}



Button.defaultProps = {
    color: 'red'
}

Button.propTypes = {
    text: propTypes.string,
    onClick: propTypes.func
}


export default Button;