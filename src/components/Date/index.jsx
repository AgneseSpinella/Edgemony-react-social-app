
import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";

const DisplayTime = (props) => {
    const date = props.date || new Date();
    return (
        <small>
         {formatDistance(new Date(date), new Date(), {addSuffix: true, locale: it,})} 
         </small>
    )};

export  {DisplayTime};