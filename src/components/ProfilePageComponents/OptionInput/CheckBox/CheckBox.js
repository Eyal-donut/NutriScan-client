import classes from "./CheckBox.module.css"

const Checkbox = ({val}) => {

    const onCheckBoxClick = () => {
        //use context to change the user from here 
    }
    return <div className={classes.checkbox} onClick={onCheckBoxClick}>I will be a checkbox, my value:{val}</div>
}
export default Checkbox