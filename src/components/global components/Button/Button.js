import classes from './Button.module.css'

const Button = ({text, className, onBtnClick, id, type, disabled}) => {
    return <button disabled={disabled} type={type} id={id} onClick={onBtnClick} className={`${classes.button} ${className}`}>{text}</button>
}

export default Button