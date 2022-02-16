import "./date.css";
import moment from "moment";

const DateDisplay = (props) => {
    const {date} = props;
    return ( 
        <div className="date-display">
            My date is: {moment(date).format('LL')};
        </div>
     );
}
 
export default DateDisplay;