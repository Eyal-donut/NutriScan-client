import classes from './ContentWrap.module.css'

const ContentWrap = ({children}) => {
    return <div className={classes.contentWrap}>{children}</div>
}

export default ContentWrap