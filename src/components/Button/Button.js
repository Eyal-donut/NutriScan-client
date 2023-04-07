import classes from './Button.module.css'

const Button = ({text, className, onBtnClick, id}) => {
    return <button id={id} onClick={onBtnClick} className={`${classes.button} ${className}`}>{text}</button>
}

export default Button