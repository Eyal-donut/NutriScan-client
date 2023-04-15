import Checkbox from "./CheckBox/CheckBox"
import RangeSelection from "./RangeSelection/RangeSelection"

const OptionValue = ({type}) => {
    if (type === "checkbox"){
        return <Checkbox/>
    }
    if (type === "range"){
        return <RangeSelection/>
    }
}
export default OptionValue