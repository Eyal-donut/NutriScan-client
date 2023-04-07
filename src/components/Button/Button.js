import classes from './Button.module.css'

const Button = ({text, className, onBtnClick}) => {
    return <button onClick={onBtnClick} className={`${classes.button} ${className}`}>{text}</button>
}

export default Button