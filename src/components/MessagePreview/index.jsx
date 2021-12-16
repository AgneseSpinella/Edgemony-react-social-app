
import styles from "./MessagePreview.module.scss";
import {DisplayTime} from "../Date";

const MessagePreview = (props) => {
    const data = props.data || {
        text: "lore ipsum", date: new Date(), sender: "user"
    }
    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p><DisplayTime date={data.date}/></p>
            <p>{data.text}</p>
        </div>
    )
}

export {MessagePreview};